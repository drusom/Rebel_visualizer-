# Creating a Warehouse GLB Model

This guide provides instructions for creating a proper GLB model for the 3D warehouse visualization project.

## Requirements

1. **Software:** Blender (recommended) or any 3D modeling software that can export to GLB format
2. **Sections:** The warehouse model should have three distinct sections:
   - Roof
   - Wall panels
   - Flooring

## Modeling Guidelines

1. **Scale:** Use a real-world scale (meters) for accurate representation
2. **Complexity:** Keep the model relatively low-poly for web performance
3. **UV Mapping:** Create proper UV maps for texturing
4. **Named Objects:** Each section should be a separate named object:
   - Name the roof section "roof"
   - Name the walls section "panels" 
   - Name the floor section "flooring"

## Exporting

1. Export as GLB format (binary glTF)
2. Include materials and textures
3. Ensure object names are preserved in the export

## Example Structure in Blender

```
Warehouse (Collection)
├── roof (Object)
├── panels (Object)
└── flooring (Object)
```

## Material Guidelines

- Use PBR materials for realistic appearance
- Keep texture sizes reasonable (1024x1024 or 2048x2048 max)
- Include metalness, roughness, and normal maps for quality

## Placement

Once exported, place the GLB file in the `/public` folder of the project.