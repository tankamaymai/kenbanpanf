param(
  [string]$InputDir = "panf-images",
  [string]$BackupDir = "panf-images-original-blue"
)

Add-Type -AssemblyName System.Drawing

function ConvertTo-Hsl {
  param([int]$R, [int]$G, [int]$B)

  $r1 = $R / 255.0
  $g1 = $G / 255.0
  $b1 = $B / 255.0
  $max = [Math]::Max($r1, [Math]::Max($g1, $b1))
  $min = [Math]::Min($r1, [Math]::Min($g1, $b1))
  $l = ($max + $min) / 2.0

  if ([Math]::Abs($max - $min) -lt 0.000001) {
    return @{ H = 0.0; S = 0.0; L = $l }
  }

  $d = $max - $min
  if ($l -gt 0.5) {
    $s = $d / (2.0 - $max - $min)
  } else {
    $s = $d / ($max + $min)
  }

  if ($max -eq $r1) {
    $h = (($g1 - $b1) / $d)
    if ($g1 -lt $b1) { $h += 6.0 }
  } elseif ($max -eq $g1) {
    $h = (($b1 - $r1) / $d) + 2.0
  } else {
    $h = (($r1 - $g1) / $d) + 4.0
  }

  return @{ H = ($h / 6.0) * 360.0; S = $s; L = $l }
}

function ConvertFrom-Hsl {
  param([double]$H, [double]$S, [double]$L, [int]$A)

  $h1 = (($H % 360.0) + 360.0) % 360.0 / 360.0

  if ($S -le 0.000001) {
    $v = [int][Math]::Round($L * 255.0)
    return [System.Drawing.Color]::FromArgb($A, $v, $v, $v)
  }

  if ($L -lt 0.5) {
    $q = $L * (1.0 + $S)
  } else {
    $q = $L + $S - ($L * $S)
  }
  $p = (2.0 * $L) - $q

  function HueToRgb([double]$P, [double]$Q, [double]$T) {
    if ($T -lt 0.0) { $T += 1.0 }
    if ($T -gt 1.0) { $T -= 1.0 }
    if ($T -lt (1.0 / 6.0)) { return $P + (($Q - $P) * 6.0 * $T) }
    if ($T -lt 0.5) { return $Q }
    if ($T -lt (2.0 / 3.0)) { return $P + (($Q - $P) * ((2.0 / 3.0) - $T) * 6.0) }
    return $P
  }

  $r = HueToRgb $p $q ($h1 + (1.0 / 3.0))
  $g = HueToRgb $p $q $h1
  $b = HueToRgb $p $q ($h1 - (1.0 / 3.0))

  return [System.Drawing.Color]::FromArgb(
    $A,
    [int][Math]::Round([Math]::Max(0.0, [Math]::Min(1.0, $r)) * 255.0),
    [int][Math]::Round([Math]::Max(0.0, [Math]::Min(1.0, $g)) * 255.0),
    [int][Math]::Round([Math]::Max(0.0, [Math]::Min(1.0, $b)) * 255.0)
  )
}

function Test-BluePixel {
  param([System.Drawing.Color]$Color, [hashtable]$Hsl)

  if ($Color.A -eq 0) { return $false }

  $h = $Hsl.H
  $s = $Hsl.S
  $l = $Hsl.L

  $isHueBlue = ($h -ge 180.0 -and $h -le 235.0)
  $isNavyLike = ($Color.B -gt ($Color.R + 14) -and $Color.B -ge ($Color.G - 18) -and $l -lt 0.38)
  $isCyanLine = ($h -ge 170.0 -and $h -le 210.0 -and $s -gt 0.12)

  return (($isHueBlue -or $isNavyLike -or $isCyanLine) -and $s -gt 0.08)
}

function Convert-BluePixel {
  param([System.Drawing.Color]$Color, [hashtable]$Hsl)

  $l = $Hsl.L
  $s = $Hsl.S

  # Pastel blue family. Dark navy becomes a softer readable blue;
  # pale aqua/border colors become very light pastel blue.
  $newHue = 204.0
  if ($l -lt 0.24) {
    $newLight = 0.37 + ($l * 0.24)
    $newSat = [Math]::Min(0.42, 0.24 + ($s * 0.18))
  } elseif ($l -lt 0.50) {
    $newLight = 0.50 + (($l - 0.24) * 0.34)
    $newSat = [Math]::Min(0.36, 0.18 + ($s * 0.16))
  } elseif ($l -lt 0.78) {
    $newLight = 0.68 + (($l - 0.50) * 0.42)
    $newSat = [Math]::Min(0.32, 0.14 + ($s * 0.12))
  } else {
    $newLight = [Math]::Min(0.92, $l + 0.03)
    $newSat = [Math]::Min(0.20, 0.08 + ($s * 0.08))
  }

  return ConvertFrom-Hsl -H $newHue -S $newSat -L $newLight -A $Color.A
}

$inputPath = Resolve-Path -LiteralPath $InputDir
if (-not (Test-Path -LiteralPath $BackupDir)) {
  New-Item -ItemType Directory -Path $BackupDir | Out-Null
  Copy-Item -LiteralPath (Join-Path $InputDir "page-*.png") -Destination $BackupDir
}

$files = Get-ChildItem -LiteralPath $inputPath -Filter "page-*.png" | Sort-Object Name
foreach ($file in $files) {
  $image = [System.Drawing.Bitmap]::FromFile($file.FullName)
  try {
    for ($y = 0; $y -lt $image.Height; $y++) {
      for ($x = 0; $x -lt $image.Width; $x++) {
        $color = $image.GetPixel($x, $y)
        $hsl = ConvertTo-Hsl -R $color.R -G $color.G -B $color.B
        if (Test-BluePixel -Color $color -Hsl $hsl) {
          $image.SetPixel($x, $y, (Convert-BluePixel -Color $color -Hsl $hsl))
        }
      }
    }

    $tmp = Join-Path $file.DirectoryName ($file.BaseName + ".tmp.png")
    $image.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
  } finally {
    $image.Dispose()
  }

  Move-Item -LiteralPath $tmp -Destination $file.FullName -Force
  Write-Host "recolored $($file.Name)"
}
