# Freshway Asset Optimization Guide

Quick reference for optimizing your Freshway project assets.

---

## 📊 CURRENT ASSET ANALYSIS

### Assets Found:
```
public/
├── assets/
│   ├── vid.mp4             49.3 MB  ⚠️ NEEDS OPTIMIZATION
│   └── model/
│       └── orange.glb      56 KB    ✅ Already optimized
└── images/
    ├── avocado.jpg         3.0 MB   ⚠️ NEEDS OPTIMIZATION
    ├── blueberries.jpg     1.0 MB   ⚠️ NEEDS OPTIMIZATION
    ├── butter.jpg          1.4 MB   ⚠️ NEEDS OPTIMIZATION
    ├── freshway.jpg        943 KB   ⚠️ NEEDS OPTIMIZATION
    ├── honey.jpg           2.4 MB   ⚠️ NEEDS OPTIMIZATION
    ├── loaf.jpg            6.7 MB   ⚠️ NEEDS OPTIMIZATION
    ├── orange.jpg          669 KB   ⚠️ NEEDS OPTIMIZATION
    ├── spinach.jpg         1.0 MB   ⚠️ NEEDS OPTIMIZATION
    └── tomatoes.jpg        1.7 MB   ⚠️ NEEDS OPTIMIZATION
```

**Total Size Before:** ~68 MB  
**Expected After:** ~8 MB  
**Expected Savings:** ~88% reduction

---

## 🚀 QUICK START (All-in-One)

```powershell
# Run complete optimization
npm run optimize
```

---

## 📸 IMAGE OPTIMIZATION

### Install cwebp (One-time setup)
```powershell
npm install -g cwebp-bin
```

### Optimize All Product Images
```powershell
# Create optimized folder
mkdir public\optimized\images -Force

# Batch convert all JPGs to WebP
Get-ChildItem public\images\*.jpg | ForEach-Object {
    cwebp -q 85 $_.FullName -o "public\optimized\images\$($_.BaseName).webp"
}
```

**Quality Setting:** `-q 85` (High quality for product images)  
**Expected Result:** 18.8 MB → ~2.5 MB (87% reduction)

### Manual Single Image (if needed)
```powershell
cwebp -q 85 public\images\loaf.jpg -o public\optimized\images\loaf.webp
```

---

## 🎬 VIDEO OPTIMIZATION

### Install FFmpeg (One-time setup)
```powershell
winget install FFmpeg
# Restart terminal after installation
```

### Optimize Hero Video
```powershell
# Create optimized folder
mkdir public\optimized\videos -Force

# Optimize to MP4 (H.264)
ffmpeg -i public\assets\vid.mp4 -c:v libx264 -crf 28 -preset slow -movflags +faststart public\optimized\videos\hero.mp4

# Also create WebM version (better compression)
ffmpeg -i public\assets\vid.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 public\optimized\videos\hero.webm
```

**CRF Setting:** `28` (Good balance)  
**Expected Result:** 49.3 MB → ~5-6 MB (88-90% reduction)

**What `-movflags +faststart` does:** Enables progressive playback (video starts playing before fully downloaded)

---

## 🎨 3D MODEL STATUS

✅ **orange.glb is already optimized (56 KB)**

Your model is already very small and doesn't need further compression. If you add more models later, use:

```powershell
npm install -g @gltf-transform/cli
gltf-transform optimize input.glb output.glb --compress draco --texture-compress webp
```

---

## 📁 RECOMMENDED FOLDER STRUCTURE

After optimization:

```
public/
├── optimized/              ← All optimized assets
│   ├── images/            ← WebP product images
│   │   ├── avocado.webp
│   │   ├── blueberries.webp
│   │   ├── butter.webp
│   │   ├── freshway.webp
│   │   ├── honey.webp
│   │   ├── loaf.webp
│   │   ├── orange.webp
│   │   ├── spinach.webp
│   │   └── tomatoes.webp
│   └── videos/            ← Optimized videos
│       ├── hero.mp4       ← Use this (best compatibility)
│       └── hero.webm      ← Fallback/alternative
├── assets/                ← Original assets (backup)
│   ├── vid.mp4
│   └── model/
│       └── orange.glb
└── images/                ← Original images (backup)
    └── *.jpg
```

---

## 🛠️ AUTOMATED OPTIMIZATION SCRIPT

Create this PowerShell script for one-command optimization:

**File:** `scripts/optimize-all.ps1`

```powershell
Write-Host "🚀 Starting Freshway Asset Optimization..." -ForegroundColor Cyan

# Create output directories
Write-Host "`n📁 Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "public\optimized\images" | Out-Null
New-Item -ItemType Directory -Force -Path "public\optimized\videos" | Out-Null

# Optimize images
Write-Host "`n📸 Optimizing images to WebP..." -ForegroundColor Yellow
$images = Get-ChildItem "public\images\*.jpg"
$count = 0
foreach ($img in $images) {
    $count++
    Write-Host "  [$count/$($images.Count)] Converting $($img.Name)..." -ForegroundColor Gray
    cwebp -q 85 $img.FullName -o "public\optimized\images\$($img.BaseName).webp" 2>&1 | Out-Null
}
Write-Host "  ✅ $count images optimized" -ForegroundColor Green

# Optimize video
Write-Host "`n🎬 Optimizing video (this may take a few minutes)..." -ForegroundColor Yellow
Write-Host "  Converting to MP4..." -ForegroundColor Gray
ffmpeg -i "public\assets\vid.mp4" -c:v libx264 -crf 28 -preset slow -movflags +faststart "public\optimized\videos\hero.mp4" -y 2>&1 | Out-Null
Write-Host "  ✅ MP4 created" -ForegroundColor Green

Write-Host "  Converting to WebM..." -ForegroundColor Gray
ffmpeg -i "public\assets\vid.mp4" -c:v libvpx-vp9 -crf 35 -b:v 0 "public\optimized\videos\hero.webm" -y 2>&1 | Out-Null
Write-Host "  ✅ WebM created" -ForegroundColor Green

# Calculate savings
Write-Host "`n📊 Calculating file sizes..." -ForegroundColor Yellow
$originalImagesSize = (Get-ChildItem "public\images\*.jpg" | Measure-Object -Property Length -Sum).Sum
$originalVideoSize = (Get-Item "public\assets\vid.mp4").Length
$originalTotal = $originalImagesSize + $originalVideoSize

$optimizedImagesSize = (Get-ChildItem "public\optimized\images\*.webp" | Measure-Object -Property Length -Sum).Sum
$optimizedVideoSize = (Get-Item "public\optimized\videos\hero.mp4").Length
$optimizedTotal = $optimizedImagesSize + $optimizedVideoSize

$savings = [math]::Round((($originalTotal - $optimizedTotal) / $originalTotal) * 100, 1)

Write-Host "`n✨ OPTIMIZATION COMPLETE!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  Original Size:  $([math]::Round($originalTotal/1MB, 1)) MB" -ForegroundColor White
Write-Host "  Optimized Size: $([math]::Round($optimizedTotal/1MB, 1)) MB" -ForegroundColor White
Write-Host "  Savings:        $savings%" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "`n📝 Next steps:" -ForegroundColor Yellow
Write-Host "  1. Update image imports to use /optimized/images/*.webp"
Write-Host "  2. Update video src to /optimized/videos/hero.mp4"
Write-Host "  3. Test the website: npm run dev"
```

---

## 📦 PACKAGE.JSON SCRIPT

Add this to your `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "optimize": "powershell -ExecutionPolicy Bypass -File ./scripts/optimize-all.ps1"
}
```

---

## 💻 UPDATE YOUR CODE

### Example: Update Image Component

**Before:**
```tsx
<Image 
  src="/images/avocado.jpg" 
  alt="Fresh Avocado"
  width={500}
  height={500}
/>
```

**After:**
```tsx
<Image 
  src="/optimized/images/avocado.webp" 
  alt="Fresh Avocado"
  width={500}
  height={500}
/>
```

### Example: Update Video

**Before:**
```tsx
<video src="/assets/vid.mp4" autoPlay loop muted />
```

**After:**
```tsx
<video autoPlay loop muted playsInline>
  <source src="/optimized/videos/hero.webm" type="video/webm" />
  <source src="/optimized/videos/hero.mp4" type="video/mp4" />
  Your browser doesn't support video.
</video>
```

---

## ✅ VERIFICATION CHECKLIST

After optimization:

### 1. Check File Sizes
```powershell
# Original images
Get-ChildItem public\images\*.jpg | Measure-Object -Property Length -Sum

# Optimized images
Get-ChildItem public\optimized\images\*.webp | Measure-Object -Property Length -Sum

# Original video
Get-Item public\assets\vid.mp4

# Optimized video
Get-Item public\optimized\videos\hero.mp4
```

### 2. Visual Quality Check
- Open both original and optimized images side-by-side
- Check for any visible quality loss (there should be minimal difference)
- Verify product details are still clear

### 3. Browser Test
```powershell
npm run dev
```
- Open DevTools → Network tab
- Reload the page
- Verify WebP images are loading
- Check video loads and plays smoothly
- Confirm no 404 errors

### 4. Cross-browser Test
- Test in Chrome (WebP supported)
- Test in Firefox (WebP supported)
- Test in Safari (WebP supported since v14)

---

## 🔧 TROUBLESHOOTING

### "cwebp command not found"
```powershell
# Reinstall cwebp
npm install -g cwebp-bin

# Or use manual installation
# Download from: https://developers.google.com/speed/webp/download
```

### "ffmpeg command not found"
```powershell
# Install FFmpeg
winget install FFmpeg

# Restart PowerShell/Terminal
# Verify installation
ffmpeg -version
```

### Images not loading in browser
1. Check file paths are correct
2. Verify files exist in `public/optimized/images/`
3. Check browser console for 404 errors
4. Try hard refresh (Ctrl+Shift+R)

### Video not playing
1. Verify video file exists
2. Check video codec support
3. Try adding `playsInline` attribute for mobile
4. Check browser console for errors

---

## 📊 EXPECTED RESULTS

| Asset Type | Before | After | Savings |
|------------|--------|-------|---------|
| **Product Images (9)** | 18.8 MB | ~2.5 MB | 87% |
| **Hero Video** | 49.3 MB | ~5.5 MB | 89% |
| **3D Model** | 56 KB | 56 KB | 0% (already optimized) |
| **TOTAL** | ~68 MB | ~8 MB | **88%** |

---

## 🎯 QUICK COMMAND REFERENCE

```powershell
# Image optimization (single)
cwebp -q 85 public\images\loaf.jpg -o public\optimized\images\loaf.webp

# Image optimization (batch)
Get-ChildItem public\images\*.jpg | ForEach-Object {
    cwebp -q 85 $_.FullName -o "public\optimized\images\$($_.BaseName).webp"
}

# Video optimization (MP4)
ffmpeg -i public\assets\vid.mp4 -c:v libx264 -crf 28 -preset slow -movflags +faststart public\optimized\videos\hero.mp4

# Video optimization (WebM)
ffmpeg -i public\assets\vid.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 public\optimized\videos\hero.webm

# Run complete optimization
npm run optimize
```

---

## 💡 BEST PRACTICES FOR FRESHWAY

1. **Always keep originals** - Your `public/images/` and `public/assets/` are backups
2. **Use WebP with fallback** - Modern browsers support WebP, but have fallbacks ready
3. **Lazy load images** - Use Next.js Image component's built-in lazy loading
4. **Optimize on upload** - Add optimization to your image upload pipeline
5. **Monitor bundle size** - Run `npm run build` to check total bundle size
6. **Use Next.js Image component** - Automatic optimization and responsive images

---

**Ready to optimize? Run `npm run optimize` to get started! 🚀**
