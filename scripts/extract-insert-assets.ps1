Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"

$sourceDir = Join-Path $PSScriptRoot "..\panf-images"
$outputRoot = Join-Path $PSScriptRoot "..\panf-insert-assets-ready"

New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null

$assets = @(
  @{ Page = 1; Name = "cover-shoulder-illustration"; X = 510; Y = 20; W = 500; H = 820 },
  @{ Page = 1; Name = "cover-icon-brace"; X = 45; Y = 985; W = 115; H = 115 },
  @{ Page = 1; Name = "cover-icon-rehab"; X = 165; Y = 985; W = 115; H = 115 },
  @{ Page = 1; Name = "cover-icon-training"; X = 285; Y = 985; W = 115; H = 115 },
  @{ Page = 1; Name = "cover-icon-qa"; X = 405; Y = 985; W = 115; H = 115 },

  @{ Page = 3; Name = "anatomy-front-bone"; X = 70; Y = 390; W = 240; H = 285 },
  @{ Page = 3; Name = "anatomy-front-muscle"; X = 360; Y = 390; W = 260; H = 285 },
  @{ Page = 3; Name = "anatomy-back-muscle"; X = 635; Y = 390; W = 330; H = 285 },
  @{ Page = 3; Name = "muscle-supraspinatus"; X = 65; Y = 885; W = 185; H = 150 },
  @{ Page = 3; Name = "muscle-infraspinatus"; X = 305; Y = 885; W = 180; H = 150 },
  @{ Page = 3; Name = "muscle-teres-minor"; X = 545; Y = 885; W = 175; H = 150 },
  @{ Page = 3; Name = "muscle-subscapularis"; X = 800; Y = 885; W = 150; H = 150 },
  @{ Page = 3; Name = "role-shield-icon"; X = 60; Y = 1050; W = 100; H = 105 },
  @{ Page = 3; Name = "role-shoulder-line"; X = 780; Y = 1035; W = 165; H = 135 },
  @{ Page = 3; Name = "symptoms-icon"; X = 45; Y = 1240; W = 135; H = 165 },
  @{ Page = 3; Name = "symptom-arm-pain"; X = 240; Y = 1295; W = 170; H = 125 },
  @{ Page = 3; Name = "symptom-night-pain"; X = 455; Y = 1295; W = 180; H = 125 },
  @{ Page = 3; Name = "symptom-weakness"; X = 770; Y = 1295; W = 150; H = 125 },

  @{ Page = 4; Name = "surgery-scene"; X = 585; Y = 105; W = 395; H = 320 },
  @{ Page = 4; Name = "wound-photo"; X = 600; Y = 535; W = 180; H = 205 },
  @{ Page = 4; Name = "balance-scale-icon"; X = 70; Y = 785; W = 220; H = 155 },
  @{ Page = 4; Name = "brace-person"; X = 835; Y = 790; W = 110; H = 150 },
  @{ Page = 4; Name = "retear-no-close-arm"; X = 110; Y = 1160; W = 175; H = 135 },
  @{ Page = 4; Name = "retear-no-self-move"; X = 420; Y = 1150; W = 160; H = 145 },
  @{ Page = 4; Name = "retear-no-heavy-bag"; X = 735; Y = 1160; W = 165; H = 140 },
  @{ Page = 4; Name = "warning-triangle"; X = 60; Y = 1360; W = 120; H = 105 },
  @{ Page = 4; Name = "phone-icon"; X = 870; Y = 1360; W = 100; H = 100 },

  @{ Page = 5; Name = "brace-patient-hero"; X = 760; Y = 45; W = 210; H = 245 },
  @{ Page = 5; Name = "brace-overview-front"; X = 80; Y = 415; W = 220; H = 340 },
  @{ Page = 5; Name = "brace-overview-side"; X = 325; Y = 415; W = 150; H = 340 },
  @{ Page = 5; Name = "brace-ok-front"; X = 140; Y = 885; W = 180; H = 165 },
  @{ Page = 5; Name = "brace-ok-side"; X = 345; Y = 885; W = 165; H = 165 },
  @{ Page = 5; Name = "brace-ok-back"; X = 535; Y = 885; W = 165; H = 165 },
  @{ Page = 5; Name = "brace-ng-front"; X = 140; Y = 1115; W = 180; H = 165 },
  @{ Page = 5; Name = "brace-ng-side"; X = 345; Y = 1115; W = 165; H = 165 },
  @{ Page = 5; Name = "brace-ng-back"; X = 535; Y = 1115; W = 165; H = 165 },
  @{ Page = 5; Name = "safety-shield"; X = 65; Y = 1325; W = 110; H = 100 },
  @{ Page = 5; Name = "safety-person"; X = 405; Y = 1330; W = 110; H = 100 },

  @{ Page = 6; Name = "sleeping-posture"; X = 400; Y = 205; W = 350; H = 280 },
  @{ Page = 6; Name = "towel-support-inset"; X = 780; Y = 210; W = 175; H = 160 },
  @{ Page = 6; Name = "turn-step-1"; X = 95; Y = 690; W = 175; H = 160 },
  @{ Page = 6; Name = "turn-step-2"; X = 315; Y = 690; W = 175; H = 160 },
  @{ Page = 6; Name = "turn-step-3"; X = 535; Y = 690; W = 175; H = 160 },
  @{ Page = 6; Name = "nurse-point"; X = 830; Y = 750; W = 100; H = 130 },
  @{ Page = 6; Name = "getup-step-1"; X = 80; Y = 1085; W = 170; H = 140 },
  @{ Page = 6; Name = "getup-step-2"; X = 300; Y = 1085; W = 160; H = 140 },
  @{ Page = 6; Name = "getup-step-3"; X = 530; Y = 1085; W = 150; H = 140 },
  @{ Page = 6; Name = "getup-step-4"; X = 745; Y = 1085; W = 175; H = 140 },
  @{ Page = 6; Name = "video-phone-icon"; X = 710; Y = 1340; W = 90; H = 80 },
  @{ Page = 6; Name = "qr-code-page06"; X = 820; Y = 1315; W = 110; H = 110 },

  @{ Page = 7; Name = "dressing-wear-step-1"; X = 250; Y = 410; W = 225; H = 165 },
  @{ Page = 7; Name = "dressing-wear-step-2"; X = 235; Y = 705; W = 250; H = 175 },
  @{ Page = 7; Name = "dressing-wear-step-3"; X = 260; Y = 970; W = 205; H = 155 },
  @{ Page = 7; Name = "dressing-remove-step-1"; X = 710; Y = 405; W = 210; H = 165 },
  @{ Page = 7; Name = "dressing-remove-step-2"; X = 695; Y = 705; W = 225; H = 165 },
  @{ Page = 7; Name = "dressing-remove-step-3"; X = 705; Y = 970; W = 220; H = 170 },
  @{ Page = 7; Name = "video-icon-page07"; X = 65; Y = 1340; W = 110; H = 80 },
  @{ Page = 7; Name = "qr-code-page07"; X = 835; Y = 1320; W = 105; H = 105 },

  @{ Page = 8; Name = "outdoor-woman"; X = 725; Y = 65; W = 230; H = 300 },
  @{ Page = 8; Name = "bag-arm-closeup"; X = 545; Y = 400; W = 380; H = 275 },
  @{ Page = 8; Name = "bag-tip-strap"; X = 120; Y = 765; W = 180; H = 150 },
  @{ Page = 8; Name = "bag-tip-shape"; X = 430; Y = 760; W = 180; H = 150 },
  @{ Page = 8; Name = "bag-tip-weight"; X = 725; Y = 765; W = 200; H = 145 },
  @{ Page = 8; Name = "pocket-belt-people"; X = 560; Y = 965; W = 350; H = 245 },
  @{ Page = 8; Name = "warning-shoulder-pain"; X = 745; Y = 1280; W = 170; H = 150 },

  @{ Page = 9; Name = "laundry-before-main"; X = 425; Y = 205; W = 535; H = 370 },
  @{ Page = 9; Name = "laundry-hook-inset"; X = 820; Y = 225; W = 145; H = 145 },
  @{ Page = 9; Name = "laundry-after-main"; X = 425; Y = 620; W = 535; H = 375 },
  @{ Page = 9; Name = "laundry-ok-hanger"; X = 280; Y = 1160; W = 180; H = 145 },
  @{ Page = 9; Name = "laundry-ng-high"; X = 520; Y = 1125; W = 300; H = 235 },

  @{ Page = 10; Name = "grip-ball"; X = 430; Y = 275; W = 330; H = 250 },
  @{ Page = 10; Name = "grip-method-hold"; X = 830; Y = 360; W = 50; H = 65 },
  @{ Page = 10; Name = "grip-method-release"; X = 810; Y = 485; W = 75; H = 60 },
  @{ Page = 10; Name = "wrist-stretch-hands"; X = 465; Y = 680; W = 185; H = 175 },
  @{ Page = 10; Name = "wrist-forearm-extend"; X = 760; Y = 655; W = 180; H = 105 },
  @{ Page = 10; Name = "wrist-forearm-flex"; X = 760; Y = 785; W = 180; H = 100 },
  @{ Page = 10; Name = "pendulum-step-1"; X = 410; Y = 1005; W = 120; H = 175 },
  @{ Page = 10; Name = "pendulum-step-2"; X = 550; Y = 1005; W = 110; H = 175 },
  @{ Page = 10; Name = "pendulum-step-3"; X = 705; Y = 1005; W = 110; H = 175 },
  @{ Page = 10; Name = "pendulum-step-4"; X = 860; Y = 1005; W = 100; H = 175 },
  @{ Page = 10; Name = "video-phone-page10"; X = 745; Y = 1325; W = 70; H = 85 },
  @{ Page = 10; Name = "qr-code-page10"; X = 850; Y = 1325; W = 105; H = 105 },

  @{ Page = 11; Name = "table-slide-main"; X = 370; Y = 300; W = 380; H = 235 },
  @{ Page = 11; Name = "table-slide-inset"; X = 785; Y = 310; W = 155; H = 190 },
  @{ Page = 11; Name = "external-rotation-main"; X = 430; Y = 705; W = 270; H = 190 },
  @{ Page = 11; Name = "external-rotation-inset"; X = 785; Y = 700; W = 155; H = 190 },
  @{ Page = 11; Name = "stick-raise-main"; X = 420; Y = 1010; W = 320; H = 200 },
  @{ Page = 11; Name = "stick-raise-inset"; X = 780; Y = 1030; W = 160; H = 170 },
  @{ Page = 11; Name = "relax-woman"; X = 760; Y = 1320; W = 160; H = 120 },

  @{ Page = 12; Name = "wall-walk"; X = 520; Y = 320; W = 430; H = 205 },
  @{ Page = 12; Name = "shoulder-shrug"; X = 520; Y = 690; W = 430; H = 190 },
  @{ Page = 12; Name = "theraband-external-rotation"; X = 510; Y = 1005; W = 440; H = 190 },
  @{ Page = 12; Name = "return-to-life-people"; X = 620; Y = 1280; W = 160; H = 120 },
  @{ Page = 12; Name = "sports-golf-tennis"; X = 760; Y = 1280; W = 185; H = 120 },

  @{ Page = 13; Name = "faq-nurse"; X = 820; Y = 55; W = 160; H = 170 },
  @{ Page = 13; Name = "faq-brace"; X = 360; Y = 350; W = 120; H = 150 },
  @{ Page = 13; Name = "faq-shower"; X = 830; Y = 350; W = 120; H = 150 },
  @{ Page = 13; Name = "faq-car"; X = 365; Y = 690; W = 120; H = 90 },
  @{ Page = 13; Name = "faq-laptop"; X = 835; Y = 690; W = 115; H = 90 },
  @{ Page = 13; Name = "faq-sports"; X = 355; Y = 925; W = 130; H = 90 },
  @{ Page = 13; Name = "faq-sleep"; X = 815; Y = 895; W = 145; H = 120 },
  @{ Page = 13; Name = "faq-medicine"; X = 355; Y = 1155; W = 135; H = 95 },
  @{ Page = 13; Name = "faq-calendar"; X = 820; Y = 1145; W = 130; H = 110 },
  @{ Page = 13; Name = "faq-shoulder-pain"; X = 350; Y = 1320; W = 125; H = 120 },
  @{ Page = 13; Name = "faq-family"; X = 790; Y = 1310; W = 165; H = 135 },

  @{ Page = 14; Name = "emergency-phone-woman"; X = 800; Y = 65; W = 170; H = 200 },
  @{ Page = 14; Name = "wound-thermometer"; X = 760; Y = 330; W = 205; H = 250 },
  @{ Page = 14; Name = "contact-clock-icon"; X = 80; Y = 775; W = 75; H = 75 },
  @{ Page = 14; Name = "contact-moon-icon"; X = 80; Y = 910; W = 75; H = 75 },
  @{ Page = 14; Name = "contact-ambulance-icon"; X = 80; Y = 1050; W = 75; H = 75 },
  @{ Page = 14; Name = "video-monitor"; X = 90; Y = 1250; W = 160; H = 100 },
  @{ Page = 14; Name = "qr-code-page14"; X = 300; Y = 1245; W = 115; H = 115 },
  @{ Page = 14; Name = "hospital-building"; X = 735; Y = 1340; W = 250; H = 120 }
)

$index = New-Object System.Collections.Generic.List[object]

foreach ($asset in $assets) {
  $pageLabel = "{0:D2}" -f $asset.Page
  $sourcePath = Join-Path $sourceDir "page-$pageLabel.png"
  if (-not (Test-Path -LiteralPath $sourcePath)) {
    Write-Warning "Missing source image: $sourcePath"
    continue
  }

  $pageDir = Join-Path $outputRoot "page-$pageLabel"
  New-Item -ItemType Directory -Force -Path $pageDir | Out-Null
  $outputPath = Join-Path $pageDir "$($asset.Name).png"

  $sourceImage = [System.Drawing.Image]::FromFile($sourcePath)
  try {
    $x = [Math]::Max(0, [int]$asset.X)
    $y = [Math]::Max(0, [int]$asset.Y)
    $w = [Math]::Min([int]$asset.W, $sourceImage.Width - $x)
    $h = [Math]::Min([int]$asset.H, $sourceImage.Height - $y)

    if ($w -le 0 -or $h -le 0) {
      Write-Warning "Skipping invalid crop: page-$pageLabel/$($asset.Name)"
      continue
    }

    $bitmap = New-Object System.Drawing.Bitmap($w, $h)
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.DrawImage($sourceImage, 0, 0, (New-Object System.Drawing.Rectangle($x, $y, $w, $h)), [System.Drawing.GraphicsUnit]::Pixel)
      } finally {
        $graphics.Dispose()
      }
      $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally {
      $bitmap.Dispose()
    }

    $index.Add([pscustomobject]@{
      page = $pageLabel
      asset = $asset.Name
      file = "page-$pageLabel/$($asset.Name).png"
      source = "panf-images/page-$pageLabel.png"
      x = $x
      y = $y
      width = $w
      height = $h
    }) | Out-Null
  } finally {
    $sourceImage.Dispose()
  }
}

$indexPath = Join-Path $outputRoot "asset-index.csv"
$index | Export-Csv -LiteralPath $indexPath -NoTypeInformation -Encoding UTF8

Write-Host "Exported $($index.Count) assets to $outputRoot"
