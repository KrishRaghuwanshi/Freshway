$ErrorActionPreference = "Continue"
Write-Host "Optimizing Freshway Images..."

# Get absolute paths
$currentDir = $PWD.ProviderPath
$optImgPath = Join-Path $currentDir "public\optimized\images"

Write-Host "Creating directory..."
cmd /c "if not exist ""$optImgPath"" mkdir ""$optImgPath"""

# Optimize images
Write-Host "Converting JPG to WebP..."
$images = Get-ChildItem "public\images\*.jpg"

if ($images) {
    $count = 0
    foreach ($img in $images) {
        $count++
        $outPath = Join-Path $optImgPath "$($img.BaseName).webp"
        Write-Host "  Processing $($img.Name)..."
        
        $cmd = "cwebp -q 85 `"$($img.FullName)`" -o `"$outPath`""
        cmd /c $cmd
    }
}

Write-Host "IMAGES OPTIMIZED!" -ForegroundColor Green
