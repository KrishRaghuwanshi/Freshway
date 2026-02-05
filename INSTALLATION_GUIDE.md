# Tool Installation Guide

Quick setup guide for asset optimization tools.

---

## 📦 REQUIRED TOOLS

### 1. cwebp (Image Optimization)
### 2. FFmpeg (Video Optimization)

---

## 🚀 INSTALLATION STEPS

### Step 1: Install cwebp

```powershell
# Method 1: Using npm (Recommended)
npm install -g cwebp-bin

# Method 2: Manual download
# Download from: https://developers.google.com/speed/webp/download
# Extract and add to PATH
```

**Verify Installation:**
```powershell
cwebp -version
# Should output: 1.x.x or similar
```

### Step 2: Install FFmpeg

```powershell
# Using Windows Package Manager
winget install FFmpeg

# IMPORTANT: Restart your terminal/PowerShell after installation
```

**Verify Installation:**
```powershell
ffmpeg -version
# Should output: ffmpeg version x.x.x
```

---

## ✅ VERIFICATION CHECKLIST

Run these commands to ensure everything is installed:

```powershell
# Check cwebp
cwebp -version

# Check ffmpeg  
ffmpeg -version

# If both work, you're ready to optimize!
npm run optimize
```

---

## 🔧 TROUBLESHOOTING

### "cwebp command not found"

**Solution 1:**
```powershell
npm install -g cwebp-bin
```

**Solution 2 (Manual):**
1. Download from https://developers.google.com/speed/webp/download
2. Extract to `C:\WebP\`
3. Add `C:\WebP\bin` to PATH:
   - Press Win + R, type `sysdm.cpl`
   - Advanced → Environment Variables
   - Edit PATH, add `C:\WebP\bin`
   - Restart terminal

### "ffmpeg command not found"

**Solution:**
```powershell
# Install FFmpeg
winget install FFmpeg

# Restart PowerShell/Terminal
# Try again
ffmpeg -version
```

If winget doesn't work:
1. Download from https://ffmpeg.org/download.html
2. Extract to `C:\FFmpeg\`
3. Add `C:\FFmpeg\bin` to PATH (same process as above)

### "winget command not found"

Update Windows to latest version. winget comes with Windows 10/11.

---

## 🎯 QUICK START AFTER INSTALLATION

```powershell
# 1. Verify tools are installed
cwebp -version
ffmpeg -version

# 2. Run optimization
npm run optimize

# 3. Check results
dir public\optimized\images
dir public\optimized\videos
```

---

**Ready? Install the tools and run `npm run optimize`! ⚡**
