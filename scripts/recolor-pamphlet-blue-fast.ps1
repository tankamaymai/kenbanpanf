param(
  [string]$InputDir = "panf-images",
  [string]$BackupDir = "panf-images-original-blue"
)

Add-Type -AssemblyName System.Drawing

$source = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class PamphletBlueRecolor
{
    public static void RecolorFile(string sourcePath, string destinationPath)
    {
        using (var src = new Bitmap(sourcePath))
        using (var bmp = new Bitmap(src.Width, src.Height, PixelFormat.Format32bppArgb))
        using (var g = Graphics.FromImage(bmp))
        {
            g.DrawImage(src, 0, 0, src.Width, src.Height);

            var rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
            var data = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            try
            {
                int bytes = Math.Abs(data.Stride) * bmp.Height;
                byte[] buffer = new byte[bytes];
                Marshal.Copy(data.Scan0, buffer, 0, bytes);

                for (int y = 0; y < bmp.Height; y++)
                {
                    int row = y * data.Stride;
                    for (int x = 0; x < bmp.Width; x++)
                    {
                        int i = row + (x * 4);
                        byte b = buffer[i + 0];
                        byte gch = buffer[i + 1];
                        byte r = buffer[i + 2];
                        byte a = buffer[i + 3];
                        if (a == 0) continue;

                        double h, s, l;
                        RgbToHsl(r, gch, b, out h, out s, out l);

                        bool isHueBlue = h >= 180.0 && h <= 235.0;
                        bool isNavyLike = b > r + 14 && b >= gch - 18 && l < 0.38;
                        bool isCyanLine = h >= 170.0 && h <= 210.0 && s > 0.12;
                        if (!((isHueBlue || isNavyLike || isCyanLine) && s > 0.08)) continue;

                        double newHue = 204.0;
                        double newLight;
                        double newSat;

                        if (l < 0.24)
                        {
                            newLight = 0.37 + (l * 0.24);
                            newSat = Math.Min(0.42, 0.24 + (s * 0.18));
                        }
                        else if (l < 0.50)
                        {
                            newLight = 0.50 + ((l - 0.24) * 0.34);
                            newSat = Math.Min(0.36, 0.18 + (s * 0.16));
                        }
                        else if (l < 0.78)
                        {
                            newLight = 0.68 + ((l - 0.50) * 0.42);
                            newSat = Math.Min(0.32, 0.14 + (s * 0.12));
                        }
                        else
                        {
                            newLight = Math.Min(0.92, l + 0.03);
                            newSat = Math.Min(0.20, 0.08 + (s * 0.08));
                        }

                        byte nr, ng, nb;
                        HslToRgb(newHue, newSat, newLight, out nr, out ng, out nb);
                        buffer[i + 0] = nb;
                        buffer[i + 1] = ng;
                        buffer[i + 2] = nr;
                    }
                }

                Marshal.Copy(buffer, 0, data.Scan0, bytes);
            }
            finally
            {
                bmp.UnlockBits(data);
            }

            string tmp = destinationPath + ".tmp";
            bmp.Save(tmp, ImageFormat.Png);
            if (File.Exists(destinationPath)) File.Delete(destinationPath);
            File.Move(tmp, destinationPath);
        }
    }

    private static void RgbToHsl(byte rb, byte gb, byte bb, out double h, out double s, out double l)
    {
        double r = rb / 255.0;
        double g = gb / 255.0;
        double b = bb / 255.0;
        double max = Math.Max(r, Math.Max(g, b));
        double min = Math.Min(r, Math.Min(g, b));
        l = (max + min) / 2.0;

        if (Math.Abs(max - min) < 0.000001)
        {
            h = 0.0;
            s = 0.0;
            return;
        }

        double d = max - min;
        s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);

        if (Math.Abs(max - r) < 0.000001)
        {
            h = (g - b) / d + (g < b ? 6.0 : 0.0);
        }
        else if (Math.Abs(max - g) < 0.000001)
        {
            h = (b - r) / d + 2.0;
        }
        else
        {
            h = (r - g) / d + 4.0;
        }
        h = h / 6.0 * 360.0;
    }

    private static void HslToRgb(double h, double s, double l, out byte rb, out byte gb, out byte bb)
    {
        h = (((h % 360.0) + 360.0) % 360.0) / 360.0;
        double r, g, b;

        if (s <= 0.000001)
        {
            r = g = b = l;
        }
        else
        {
            double q = l < 0.5 ? l * (1.0 + s) : l + s - (l * s);
            double p = (2.0 * l) - q;
            r = HueToRgb(p, q, h + (1.0 / 3.0));
            g = HueToRgb(p, q, h);
            b = HueToRgb(p, q, h - (1.0 / 3.0));
        }

        rb = (byte)Math.Round(Math.Max(0.0, Math.Min(1.0, r)) * 255.0);
        gb = (byte)Math.Round(Math.Max(0.0, Math.Min(1.0, g)) * 255.0);
        bb = (byte)Math.Round(Math.Max(0.0, Math.Min(1.0, b)) * 255.0);
    }

    private static double HueToRgb(double p, double q, double t)
    {
        if (t < 0.0) t += 1.0;
        if (t > 1.0) t -= 1.0;
        if (t < 1.0 / 6.0) return p + ((q - p) * 6.0 * t);
        if (t < 0.5) return q;
        if (t < 2.0 / 3.0) return p + ((q - p) * ((2.0 / 3.0) - t) * 6.0);
        return p;
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies System.Drawing

if (-not (Test-Path -LiteralPath $InputDir)) {
  throw "Input directory not found: $InputDir"
}

if (-not (Test-Path -LiteralPath $BackupDir)) {
  New-Item -ItemType Directory -Path $BackupDir | Out-Null
  Copy-Item -LiteralPath (Join-Path $InputDir "page-*.png") -Destination $BackupDir
}

$sourceFiles = Get-ChildItem -LiteralPath $BackupDir -Filter "page-*.png" | Sort-Object Name
foreach ($file in $sourceFiles) {
  $destination = Join-Path $InputDir $file.Name
  [PamphletBlueRecolor]::RecolorFile($file.FullName, (Resolve-Path -LiteralPath $InputDir).Path + [System.IO.Path]::DirectorySeparatorChar + $file.Name)
  Write-Host "recolored $($file.Name)"
}
