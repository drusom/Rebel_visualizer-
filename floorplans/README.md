# Floor Plans Directory

This directory contains floor plan images for each storage unit.

## File Naming Convention

Floor plan images should be named using the unit identifier in lowercase, followed by `.png`:

- `a1.png` - Floor plan for unit A1
- `a2.png` - Floor plan for unit A2
- `c10.png` - Floor plan for unit C10
- `e3.png` - Floor plan for unit E3

## Supported Formats

- PNG (recommended)
- JPG/JPEG (also supported)

## Image Guidelines

- **Resolution**: 800x600 pixels or higher recommended
- **Aspect Ratio**: Any aspect ratio is supported (images will auto-scale)
- **File Size**: Keep under 2MB for optimal loading performance

## Fallback Behavior

If a floor plan image is not found for a unit, the system will display a placeholder message indicating "Floor Plan Not Available".

## Example Floor Plans

To add floor plans:

1. Create or obtain floor plan images for your units
2. Name them according to the convention above (unit ID + .png)
3. Place them in this directory
4. The system will automatically load them when users click on units

The system expects the file names to exactly match the unit names from your GLB files and Google Sheets data. 