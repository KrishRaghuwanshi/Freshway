# Image Mapping

This document shows which product uses which image from `public/images/`

## Product → Image Mapping

| Product | Image File | Status |
|---------|------------|--------|
| California Navel Orange | `/images/orange.jpg` | ✅ Mapped |
| Organic Hass Avocado | `/images/avocado.jpg` | ✅ Mapped |
| Heritage Tomatoes | `/images/tomatoes.jpg` | ✅ Mapped |
| Wild Maine Blueberries | `/images/blueberries.jpg` | ✅ Mapped |
| Organic Baby Spinach | `/images/blueberries.jpg` | ⚠️ Using blueberries (no spinach image) |
| Raw Wildflower Honey | `/images/honey.jpg` | ✅ Mapped |
| Artisan Sourdough Loaf | `/images/loaf.jpg` | ✅ Mapped |
| Grass-Fed Cultured Butter | `/images/honey.jpg` | ⚠️ Using honey (no butter image) |

## Available Images in `public/images/`

1. ✅ `orange.jpg` - Used by California Navel Orange
2. ✅ `avocado.jpg` - Used by Organic Hass Avocado
3. ✅ `tomatoes.jpg` - Used by Heritage Tomatoes
4. ✅ `blueberries.jpg` - Used by Wild Maine Blueberries + Organic Baby Spinach
5. ✅ `honey.jpg` - Used by Raw Wildflower Honey + Grass-Fed Cultured Butter
6. ✅ `loaf.jpg` - Used by Artisan Sourdough Loaf

## Notes

- 2 products are sharing images (spinach uses blueberries, butter uses honey)
- All images are properly referenced in `data/products.json`
- Images will display on all product listings and detail pages
- All images are optimized with lazy loading for better performance

## If You Want to Add More Images

Just add them to `public/images/` with matching names and update the `images` array in `data/products.json`:

```json
{
  "id": "organic-spinach-005",
  "images": ["/images/spinach.jpg"],  // Change this line
  ...
}
```
