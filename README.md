# F1 Racing Dark Theme - Chrome Extension

A sleek, dark-themed Chrome extension featuring Formula 1 racing cars with dynamic rotating backgrounds, a centered search bar, and a hover-activated quick shortcuts sidebar on your new tab page.

---

## 🏎️ Features

- 🏎️ **F1 Car Backgrounds**: Randomly loads high-quality Formula 1 car images from the `images/` directory on every new tab.
- 🌙 **Aesthetic Dark Theme**: Premium glassmorphism design with tailored F1 red accent glows and smooth blur effects.
- 🔍 **Focused Search Bar**: Minimalist centered search input powering Google search (press `Enter` to search).
- ⚡ **Hover-to-Open Shortcuts Sidebar**:
  - Hover over the small left-side arrow or the left edge of your screen to slide out your bookmarks smoothly.
  - Built-in 250ms anti-jitter buffer ensures the sidebar stays open even if your mouse briefly slips.
  - Manual click-to-toggle option is also preserved for flexibility.
- 🔖 **Customizable Bookmarks**:
  - Pre-loaded with popular shortcuts (Gmail, ChatGPT, Gemini, GitHub, etc.).
  - Add your own custom shortcuts via the `+` button with automatic favicon fetching.
  - Hover over any shortcut and click the `×` button to remove it.
  - Automatically saved to your browser's `localStorage`.
- 📱 **Fully Responsive**: Adapts seamlessly to standard desktops, laptops, and smaller screens.

---

## 📂 File Structure

```
chrome-theme-bg/
├── manifest.json          # Chrome Extension Manifest (V3)
├── newtab.html           # New tab page layout
├── styles.css            # Dark theme & glassmorphic styling
├── script.js             # Background loader, search & shortcuts logic
├── icons/                # Extension icons (16px, 48px, 128px)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── images/               # F1 car wallpaper images folder
│   ├── img-1.jpg
│   ├── img-2.jpg
│   ├── img-3.jpg
│   ├── img-4.jpg
│   └── img-5.jpg
└── README.md             # Project documentation
```

---

## 🚀 Installation

1. **Clone or Download** this repository to your local machine.
2. Open Google Chrome and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the project folder (`chrome theme bg`).
6. Open a new tab (`Ctrl + T` or `Cmd + T`) to enjoy your new F1 theme!

---

## 🛠️ Usage & Customization

### Shortcuts Sidebar
- **Open**: Move your cursor to the left edge of the screen or hover over the small arrow (`>`).
- **Close**: Move your cursor away back towards the center of the screen.
- **Add Shortcut**: Hover over the sidebar, click the `+` card at the bottom, enter the website name and URL, and click **Save**.
- **Remove Shortcut**: Hover over an existing shortcut card and click the red `×` button in the top-right corner.

### Background Images
- Replace or add your own images inside the `images/` folder named `img-1.jpg`, `img-2.jpg`, etc.
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`.
- To add more images, add their filenames to the `backgroundImages` array in [script.js](file:///p:/chrome%20extenstion/chrome%20theme%20bg/script.js).

### Theme Styling
- Modify accent colors, border glows, or glassmorphic blur properties directly in [styles.css](file:///p:/chrome%20extenstion/chrome%20theme%20bg/styles.css).

---

## 📄 License

Free to use, customize, and modify.
