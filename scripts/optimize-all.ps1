$ErrorActionPreference = "Continue"

Write-Host "Starting Freshway Asset Optimization..."

# Get absolute paths
$currentDir = $PWD.ProviderPath
Write-Host "Current Directory: $currentDir"

# Define paths
$optPath = Join-Path $currentDir "public\optimized"
$optImgPath = Join-Path $optPath "images"
$optVidPath = Join-Path $optPath "videos"

# Create output directories using CMD (robust)
Write-Host "Creating directories..."
cmd /c "if not exist ""$optImgPath"" mkdir ""$optImgPath"""
cmd /c "if not exist ""$optVidPath"" mkdir ""$optVidPath"""

# Verify directories exist
if (!(Test-Path $optImgPath)) {
    Write-Host "CRITICAL ERROR: Failed to create image directory!" -ForegroundColor Red
    exit
}

# Optimize images
Write-Host "Optimizing images to WebP..."
$images = Get-ChildItem "public\images\*.jpg"

if ($images) {
    $count = 0
    foreach ($img in $images) {
        $count++
        # Use explicit string paths
        $outPath = Join-Path $optImgPath "$($img.BaseName).webp"
        Write-Host "  Processing $($img.Name)..."
        
        # Run cwebp
        $cmd = "cwebp -q 85 `"$($img.FullName)`" -o `"$outPath`""
        cmd /c $cmd
        
        if (!(Test-Path $outPath)) {
            Write-Host "  Failed to create output file!" -ForegroundColor Red
        }
    }
} else {
    Write-Host "No images found in public/images/"
}

# Optimize video
Write-Host "Optimizing video..."
$vidInput = Join-Path $currentDir "public\assets\vid.mp4"

if (Test-Path $vidInput) {
    $mp4Out = Join-Path $optVidPath "hero.mp4"
    $webmOut = Join-Path $optVidPath "hero.webm"

    Write-Host "  Converting to MP4..."
    cmd /c ffmpeg -i "$vidInput" -c:v libx264 -crf 28 -preset slow -movflags +faststart "$mp4Out" -y -loglevel error
    
    if (Test-Path $mp4Out) {
        Write-Host "  MP4 created successfully" -ForegroundColor Green
    } else {
        Write-Host "  MP4 creation failed" -ForegroundColor Red
    }

    Write-Host "  Converting to WebM..."
    cmd /c ffmpeg -i "$vidInput" -c:v libvpx-vp9 -crf 35 -b:v 0 "$webmOut" -y -loglevel error
    
    if (Test-Path $webmOut) {
        Write-Host "  WebM created successfully" -ForegroundColor Green
    } else {
        Write-Host "  WebM creation failed" -ForegroundColor Red
    }
} else {
    Write-Host "Video file not found at $vidInput"
}

Write-Host "DONE! Please check public/optimized folder." -ForegroundColor Green
