# Texture Files Guide

## 📁 Folder Structure

Create the following folder structure in `/public/textures/`:

```
public/textures/
├── roof/
│   ├── roof_diffuse.jpg       # Base color texture
│   ├── roof_normal.jpg        # Normal/bump map
│   └── roof_roughness.jpg     # Roughness map
├── panels/
│   ├── panels_diffuse.jpg     # Base color texture
│   ├── panels_normal.jpg      # Normal/bump map
│   └── panels_roughness.jpg   # Roughness map
└── flooring/
    ├── flooring_diffuse.jpg   # Base color texture
    ├── flooring_normal.jpg    # Normal/bump map
    └── flooring_roughness.jpg # Roughness map
```

## 🎨 Texture Types

### **Diffuse/Albedo Map** (Required)
- **File:** `*_diffuse.jpg`
- **Purpose:** Base color and appearance
- **Example:** Wood grain color, metal surface color, concrete texture

### **Normal Map** (Optional but recommended)
- **File:** `*_normal.jpg`
- **Purpose:** Adds surface detail and depth without geometry
- **Example:** Wood grain bumps, metal scratches, concrete roughness

### **Roughness Map** (Optional)
- **File:** `*_roughness.jpg`
- **Purpose:** Controls how shiny/matte the surface is
- **White = Rough/Matte, Black = Smooth/Shiny**

## 📐 Texture Guidelines

### **Recommended Sizes:**
- **1024x1024** - Good balance of quality and performance
- **2048x2048** - High quality (use sparingly)
- **512x512** - Lower quality but fast loading

### **File Formats:**
- **JPG** - Best for photos and complex textures
- **PNG** - Use if you need transparency
- **WebP** - Modern format, smaller file sizes

### **Quality Tips:**
1. **Seamless textures** - Ensure they tile without visible seams
2. **Consistent lighting** - Avoid baked-in shadows
3. **Proper scale** - Match real-world proportions

## 🔄 How to Add Your Textures

1. **Create the folders** as shown above
2. **Add your texture files** with the exact names listed
3. **Restart your dev server** to load new textures
4. **Check console** for any loading errors

## 🎯 Quick Start

If you don't have textures yet, you can:

1. **Download free textures** from:
   - [Polyhaven](https://polyhaven.com/textures)
   - [CC0 Textures](https://cc0textures.com/)
   - [Freepbr](https://freepbr.com/)

2. **Create simple textures** in any image editor:
   - Roof: Shingle or metal roofing pattern
   - Panels: Siding, brick, or concrete texture
   - Flooring: Wood, concrete, or tile pattern

3. **Use placeholder colors** - The app will work without textures, using default materials

## 🚫 Troubleshooting

- **Textures not loading?** Check file paths and names match exactly
- **Console errors?** Verify files exist and are accessible
- **Performance issues?** Reduce texture sizes or use fewer textures 