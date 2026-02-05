# Code Update Checklist

After running optimization, update your code to use the optimized assets.

---

## 🔍 FIND & REPLACE PATTERNS

### Images (Next.js Image Component)

**Search for:**
```
/images/
```

**Replace with:**
```
/optimized/images/
```

**And also update extensions:**
```
.jpg  →  .webp
```

---

## 📝 SPECIFIC CODE CHANGES

### 1. Product Image Components

**Before:**
```tsx
import Image from 'next/image';

<Image 
  src="/images/avocado.jpg" 
  alt="Fresh Avocado"
  width={500}
  height={500}
/>
```

**After:**
```tsx
import Image from 'next/image';

<Image 
  src="/optimized/images/avocado.webp" 
  alt="Fresh Avocado"
  width={500}
  height={500}
/>
```

### 2. Hero Video Section

**Before:**
```tsx
<video 
  src="/assets/vid.mp4" 
  autoPlay 
  loop 
  muted 
/>
```

**After (Recommended - with fallback):**
```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="hero-video"
>
  <source src="/optimized/videos/hero.webm" type="video/webm" />
  <source src="/optimized/videos/hero.mp4" type="video/mp4" />
  Your browser doesn't support video playback.
</video>
```

**After (Simple - MP4 only):**
```tsx
<video 
  src="/optimized/videos/hero.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline
/>
```

### 3. Background Images (CSS)

**Before:**
```css
.hero-section {
  background-image: url('/images/freshway.jpg');
}
```

**After:**
```css
.hero-section {
  background-image: url('/optimized/images/freshway.webp');
}
```

### 4. Dynamic Image Paths

**Before:**
```tsx
const products = [
  { name: 'Avocado', image: '/images/avocado.jpg' },
  { name: 'Blueberries', image: '/images/blueberries.jpg' },
  { name: 'Butter', image: '/images/butter.jpg' },
];
```

**After:**
```tsx
const products = [
  { name: 'Avocado', image: '/optimized/images/avocado.webp' },
  { name: 'Blueberries', image: '/optimized/images/blueberries.webp' },
  { name: 'Butter', image: '/optimized/images/butter.webp' },
];
```

---

## 🗂️ FILES TO CHECK

Based on your open files, likely need updates in:

1. `app/page.tsx` - Hero video, featured images
2. `app/about/page.tsx` - Any images used
3. `components/sections/CuratedCollections/CuratedCollections.tsx` - Product images
4. `components/sections/FeaturesSection/FeaturesSection.module.css` - Background images
5. Any other component files using images

---

## 🔎 SEARCH ALL FILES

To find all files that need updating:

### PowerShell Command:
```powershell
# Find all files referencing /images/ or /assets/
Get-ChildItem -Recurse -Include *.tsx,*.ts,*.css,*.js | Select-String -Pattern "/images/|/assets/" | Select-Object Path, LineNumber, Line
```

### VS Code Search:
1. Press `Ctrl + Shift + F`
2. Search: `/images/` or `/assets/`
3. Files to include: `*.tsx, *.ts, *.css, *.js`
4. Replace with: `/optimized/images/` or `/optimized/videos/`

---

## ✅ VERIFICATION

After making changes:

```powershell
# 1. Run dev server
npm run dev

# 2. Open browser DevTools → Network tab
# 3. Filter by "img" and "media"
# 4. Verify files are loading from /optimized/
# 5. Check file sizes are smaller
```

---

## 💡 TIPS

1. **Use Global Search:** Update all at once using find & replace
2. **Test Incrementally:** Update one component, test, then continue
3. **Check Console:** Look for 404 errors indicating wrong paths
4. **Compare Lighthouse:** Run before/after to see performance improvements
5. **Keep Originals:** Don't delete `/images/` or `/assets/` folders

---

## 🚀 QUICK START

```powershell
# 1. Optimize assets
npm run optimize

# 2. Update code (use VS Code find & replace)
#    Find:    /images/
#    Replace: /optimized/images/
#    
#    Find:    .jpg
#    Replace: .webp

# 3. Test
npm run dev
```

---

**Ready to update? Start with `app/page.tsx` and work your way through! 🎯**
