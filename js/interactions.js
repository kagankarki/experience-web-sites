// ========================================
// USER INTERACTIONS
// ========================================
function initInteractions() {
    initCustomCursor();
    init3DTilt();
}

function initCustomCursor() {
    // Check if device is mobile or touch-enabled
    const isMobile = window.matchMedia("(max-width: 768px)").matches ||
        window.matchMedia("(pointer: coarse)").matches;

    // Create unique ID for style element
    const styleId = 'cursor-style-hide';
    let styleEl = document.getElementById(styleId);

    if (isMobile) {
        // Hide cursor elements on mobile using CSS
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.textContent = `
                .cursor-dot, .cursor-outline {
                    display: none !important;
                }
                body {
                    cursor: auto !important;
                }
            `;
            document.head.appendChild(styleEl);
        }
        return;
    } else {
        // Remove the hiding style if we are on desktop (in case of resize)
        if (styleEl) {
            styleEl.remove();
        }
    }

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows immediately
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with a slight delay (using animate for smoother performance)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .progress-label, input, textarea, select');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
}

// 3D Tilt Effect (Generic for any .tilt-container if we add one in future)
function init3DTilt() {
    // Currently no hero section, keeping this empty wrapper to prevent errors
}
