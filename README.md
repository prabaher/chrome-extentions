# F1 Racing Dark Theme - Chrome Extension

A beautiful dark-themed Chrome extension featuring Formula 1 racing cars with rotating background images on your new tab page.

## Features

- 🏎️ **F1 Car Backgrounds**: 5 rotating Formula 1 car images
- 🌙 **Dark Theme**: Sleek dark theme optimized for your eyes
- 🔍 **Search Bar**: Clean search bar at the top (no Google branding)
- 🎨 **Smooth Animations**: Elegant transitions and effects
- ⚡ **Fast & Lightweight**: Optimized for performance

## Installation

1. **Prepare Your Images**:
   - Place your 5 F1 car images in the `images/` folder
   - Name them: `img-1.jpg`, `img-2.jpg`, `img-3.jpg`, `img-4.jpg`, `img-5.jpg`
   - Supported formats: JPG, PNG, WebP

2. **Load Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select this extension folder

3. **Enjoy**:
   - Open a new tab to see your F1 racing theme!

## File Structure

```
chrome-extensions/
├── manifest.json          # Extension manifest
├── newtab.html           # New tab page
├── styles.css            # Dark theme styling
├── script.js             # Background rotation & search
├── images/               # F1 car images folder
│   ├── img-1.jpg
│   ├── img-2.jpg
│   ├── img-3.jpg
│   ├── img-4.jpg
│   └── img-5.jpg
└── README.md            # This file
```

## Customization
- **Change images your favourate**: set your img in img1,img2..name then relode
- **Change rotation speed**: Edit the interval in `script.js` (default: 8000ms)
- **Adjust search bar position**: Modify `padding-top` in `styles.css`
- **Change transition effects**: Edit transition properties in `styles.css`

## Notes

- Images change automatically every new tab
- Search uses Google (no branding displayed)
- Theme is fully responsive for all screen sizes

## License

Free to use and modify.

