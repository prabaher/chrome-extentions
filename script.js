// F1 Car Background Images (supports jpg, jpeg, png, webp)
const backgroundImages = [
    'images/f1-car-1',
    'images/f1-car-2',
    'images/f1-car-3',
    'images/f1-car-4',
    'images/f1-car-5'
];

// Try to load image with different extensions
function getImagePath(basePath) {
    const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
    // Return with .jpg as default, browser will handle if file doesn't exist
    return basePath + '.jpg';
}

// Get random image index for this page load
function getRandomImageIndex() {
    // Pick a random image each time the page loads
    return Math.floor(Math.random() * backgroundImages.length);
}

// Initialize background images
function initBackgroundImages() {
    const container = document.getElementById('backgroundContainer');
    
    // Get the image index for this page load
    const imageIndex = getRandomImageIndex();
    const imageBasePath = backgroundImages[imageIndex];
    const imagePath = getImagePath(imageBasePath);
    
    // Create single background image element
    const img = document.createElement('div');
    img.style.backgroundImage = `url('${imagePath}')`;
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    img.style.backgroundRepeat = 'no-repeat';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.opacity = '1';
    img.style.transition = 'opacity 1s ease-in-out';
    img.style.zIndex = '1';
    container.appendChild(img);
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                // Use Google search
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        }
    });
    
    // Focus search input on load
    searchInput.focus();
}

// Shortcuts functionality
const defaultShortcuts = [
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'Gmail', url: 'https://gmail.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Reddit', url: 'https://reddit.com' }
];

function getShortcuts() {
    const saved = localStorage.getItem('f1ThemeShortcuts');
    return saved ? JSON.parse(saved) : defaultShortcuts;
}

function saveShortcuts(shortcuts) {
    localStorage.setItem('f1ThemeShortcuts', JSON.stringify(shortcuts));
}

function getFaviconUrl(url) {
    try {
        const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
        return null;
    }
}

function createShortcutElement(shortcut, index) {
    const shortcutEl = document.createElement('a');
    shortcutEl.href = shortcut.url;
    shortcutEl.target = '_blank';
    shortcutEl.className = 'shortcut-item';
    
    const icon = document.createElement('div');
    icon.className = 'shortcut-icon';
    
    const faviconUrl = getFaviconUrl(shortcut.url);
    if (faviconUrl) {
        const img = document.createElement('img');
        img.src = faviconUrl;
        img.alt = shortcut.name;
        img.onerror = () => {
            icon.textContent = shortcut.name.charAt(0).toUpperCase();
        };
        icon.appendChild(img);
    } else {
        icon.textContent = shortcut.name.charAt(0).toUpperCase();
    }
    
    const label = document.createElement('div');
    label.className = 'shortcut-label';
    label.textContent = shortcut.name;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeShortcut(index);
    };
    
    shortcutEl.appendChild(icon);
    shortcutEl.appendChild(label);
    shortcutEl.appendChild(removeBtn);
    
    return shortcutEl;
}

function renderShortcuts() {
    const shortcuts = getShortcuts();
    const grid = document.getElementById('shortcutsGrid');
    grid.innerHTML = '';
    
    shortcuts.forEach((shortcut, index) => {
        const shortcutEl = createShortcutElement(shortcut, index);
        grid.appendChild(shortcutEl);
    });
}

function removeShortcut(index) {
    const shortcuts = getShortcuts();
    shortcuts.splice(index, 1);
    saveShortcuts(shortcuts);
    renderShortcuts();
}

function initShortcuts() {
    renderShortcuts();
    
    const toggleBtn = document.getElementById('shortcutsToggleBtn');
    const shortcutsContainer = document.getElementById('shortcutsContainer');
    const addBtn = document.getElementById('addShortcutBtn');
    const modal = document.getElementById('addShortcutModal');
    const saveBtn = document.getElementById('saveShortcutBtn');
    const cancelBtn = document.getElementById('cancelShortcutBtn');
    const nameInput = document.getElementById('shortcutName');
    const urlInput = document.getElementById('shortcutUrl');
    
    // Toggle shortcuts visibility
    toggleBtn.addEventListener('click', () => {
        const isVisible = shortcutsContainer.classList.contains('show');
        if (isVisible) {
            shortcutsContainer.classList.remove('show');
            toggleBtn.classList.remove('active');
        } else {
            shortcutsContainer.classList.add('show');
            toggleBtn.classList.add('active');
        }
    });
    
    addBtn.addEventListener('click', () => {
        modal.classList.add('active');
        nameInput.value = '';
        urlInput.value = '';
        nameInput.focus();
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    saveBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        let url = urlInput.value.trim();
        
        if (!name || !url) {
            alert('Please fill in both name and URL');
            return;
        }
        
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        
        const shortcuts = getShortcuts();
        shortcuts.push({ name, url });
        saveShortcuts(shortcuts);
        renderShortcuts();
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveBtn.click();
        }
    });
    
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            urlInput.focus();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initBackgroundImages();
    initSearch();
    initShortcuts();
});

// Handle image load errors
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'DIV') {
        console.warn('Background image failed to load:', e.target);
        // Fallback to solid color if image fails
        document.getElementById('backgroundContainer').style.background = '#0a0a0a';
    }
}, true);

