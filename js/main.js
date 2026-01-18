// import CONFIG from './data.js';

// --- RENDER FUNCTIONS ---

function renderHero() {
    const { hero } = CONFIG;
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-subtitle').textContent = hero.subtitle;

    // Background Image
    document.querySelector('.hero').style.backgroundImage = `url('${hero.bgImage}')`;

    // Badges
    const badgesContainer = document.getElementById('hero-badges');
    badgesContainer.innerHTML = hero.badges.map(text => `<span>${text}</span>`).join('');

    // Primary CTA Zalo
    const zaloLink = CONFIG.info.zaloLink;
    document.getElementById('hero-btn-primary').href = zaloLink;

    // Update all Zalo buttons
    document.querySelectorAll('.nav-zalo').forEach(el => el.href = zaloLink);
    // Update Call buttons
    document.querySelectorAll('.nav-call').forEach(el => el.href = `tel:${CONFIG.info.phone}`);
}

function renderVideo() {
    const { video } = CONFIG;
    if (!video) return;

    document.getElementById('video-title').textContent = video.title;
    document.getElementById('video-desc').textContent = video.description;

    const container = document.getElementById('video-wrapper');
    // Simple YouTube embed
    if (video.youtubeId) {
        container.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${video.youtubeId}?rel=0" 
                title="${video.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else if (video.videoUrl) {
        container.innerHTML = `
            <video id="main-video" controls>
                <source src="${video.videoUrl}" type="video/mp4">
                Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
        `;

        // Auto-generate poster from first frame
        const videoEl = document.getElementById('main-video');
        videoEl.addEventListener('loadeddata', function () {
            if (!videoEl.poster) {
                videoEl.currentTime = 0.5;
            }
        });
        videoEl.addEventListener('seeked', function () {
            if (!videoEl.poster && videoEl.currentTime === 0.5) {
                const canvas = document.createElement('canvas');
                canvas.width = videoEl.videoWidth;
                canvas.height = videoEl.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
                videoEl.poster = canvas.toDataURL('image/jpeg');
                videoEl.currentTime = 0; // Reset to beginning
            }
        }, { once: true });
    }
}


function renderAmenities() {
    const container = document.getElementById('amenities-container');
    container.innerHTML = CONFIG.amenities.map(item => `
        <div class="amenity-card">
            <i class="fas fa-${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

function renderNearbyAttractions() {
    const container = document.getElementById('nearby-container');
    if (!CONFIG.nearbyAttractions || !container) return;

    container.innerHTML = CONFIG.nearbyAttractions.map(item => `
        <div class="nearby-card">
            <div class="icon-wrap">
                <i class="fas fa-${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

function renderFood() {
    const container = document.getElementById('food-container');
    const { food } = CONFIG;
    let html = '';

    // 1. Render Menu Image if exists
    if (food.menuImage) {
        html += `
            <div class="food-menu-image mb-4">
                <img src="${food.menuImage}" alt="Thực đơn" class="rounded-img shadow-lg" onclick="openLightbox('${food.menuImage}')" style="cursor: pointer;">
            </div>
        `;
    }

    // 2. Render Food Image Grid
    if (food.items && food.items.length > 0) {
        html += '<div class="food-grid-simple">';
        html += food.items.map(src => `
            <div class="food-item-simple" 
                 style="background-image: url('${src}')" 
                 onclick="openLightbox('${src}')">
            </div>
        `).join('');
        html += '</div>';
    }

    container.innerHTML = html;
}

function renderGallery() {
    const container = document.getElementById('gallery-container');
    container.innerHTML = CONFIG.images.map((img, index) => {
        const isVideo = img.type === 'video';
        const bgUrl = isVideo ? img.poster : img.src;
        const iconHtml = isVideo ? '<div class="play-icon"><i class="fas fa-play-circle"></i></div>' : '';

        const onClick = isVideo
            ? `openLightbox('${img.src}', 'video')`
            : `openLightbox('${img.src}')`;

        // For videos, add a data attribute with video src for thumbnail generation
        const dataAttr = isVideo ? `data-video-src="${img.src}" data-index="${index}"` : '';

        return `
        <div class="gallery-item ${isVideo ? 'video-item' : ''}" 
             style="background-image: url('${bgUrl}')" 
             onclick="${onClick}"
             ${dataAttr}>
             ${iconHtml}
        </div>
    `}).join('');

    // Auto-generate thumbnails for videos
    generateVideoThumbnails();
}

// Function to auto-generate video thumbnails from first frame
function generateVideoThumbnails() {
    const videoItems = document.querySelectorAll('.gallery-item[data-video-src]');

    videoItems.forEach(item => {
        const videoSrc = item.getAttribute('data-video-src');

        // Create hidden video element
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.preload = 'auto';

        // Add to DOM temporarily (helps with some browsers)
        video.style.display = 'none';
        document.body.appendChild(video);

        video.addEventListener('loadedmetadata', function () {
            // Seek to 0.5 seconds for better thumbnail
            video.currentTime = 0.5;
        });

        video.addEventListener('seeked', function () {
            // Small delay to ensure frame is ready
            setTimeout(() => {
                // Create canvas and capture frame
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth || 640;
                canvas.height = video.videoHeight || 360;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Set as background
                try {
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    if (dataUrl && dataUrl !== 'data:,') {
                        item.style.backgroundImage = `url('${dataUrl}')`;
                    }
                } catch (e) {
                    console.log('Could not generate thumbnail:', e);
                }

                // Clean up
                video.remove();
            }, 100);
        });

        video.addEventListener('error', function () {
            console.log('Could not load video for thumbnail:', videoSrc);
            video.remove();
        });

        // Set source and load
        video.src = videoSrc;
        video.load();
    });
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    container.innerHTML = CONFIG.faqs.map((item, index) => `
        <div class="faq-item" onclick="toggleFAQ(this)">
            <div class="faq-question">
                ${item.q}
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">${item.a}</div>
        </div>
    `).join('');
}

function renderFooter() {
    document.getElementById('footer-address').textContent = CONFIG.info.address;
    document.getElementById('footer-phone').textContent = CONFIG.info.phone;
    document.getElementById('footer-email').textContent = CONFIG.info.email;
    document.getElementById('footer-fb').href = CONFIG.info.facebook;
}

// --- INTERACTION LOGIC ---

// Expose openLightbox to window for onclick events
window.openLightbox = (src, type = 'image') => {
    const lightbox = document.getElementById('lightbox');
    const contentContainer = document.querySelector('.lightbox-content-wrapper') || lightbox;

    // Clear previous content (important for video stop)
    // Actually we need a container structure change in HTML to handle video/img swap better?
    // Let's modify DOM on the fly.

    // Check if we need to restructure lightbox inner HTML
    // Current HTML:
    // <div id="lightbox" ...>
    //    <span class="close-lightbox">&times;</span>
    //    <img class="lightbox-content" id="lightbox-img">
    // </div>

    // We'll replace the inner content logic
    const img = document.getElementById('lightbox-img');

    if (type === 'video') {
        if (img) img.style.display = 'none';
        let vid = document.getElementById('lightbox-video');
        if (!vid) {
            vid = document.createElement('video');
            vid.id = 'lightbox-video';
            vid.className = 'lightbox-content';
            vid.controls = true;
            lightbox.appendChild(vid);
        }
        vid.src = src;
        vid.style.display = 'block';
        vid.play();
    } else {
        const vid = document.getElementById('lightbox-video');
        if (vid) {
            vid.pause();
            vid.style.display = 'none';
        }
        if (img) {
            img.src = src;
            img.style.display = 'block';
        }
    }

    lightbox.classList.add('active');
}

// Close Lightbox
document.querySelector('.close-lightbox').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    const vid = document.getElementById('lightbox-video');
    if (vid) {
        vid.pause();
        vid.currentTime = 0;
    }
});

// Close lightbox on click outside
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        document.getElementById('lightbox').classList.remove('active');
        const vid = document.getElementById('lightbox-video');
        if (vid) {
            vid.pause();
            vid.currentTime = 0;
        }
    }
});

// FAQ Toggle
window.toggleFAQ = (element) => {
    element.classList.toggle('active');
}

// Mobile Menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    requestAnimationFrame(() => mobileMenu.classList.add('active'));
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    setTimeout(() => mobileMenu.style.display = 'none', 300);
});

// Click on menu item closes menu
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        setTimeout(() => mobileMenu.style.display = 'none', 300);
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderVideo();
    renderNearbyAttractions();
    renderAmenities();
    renderFood();
    renderGallery();
    renderFAQ();
    renderFooter();

    // Update Map Link
    const mapLink = document.getElementById('map-link');
    if (mapLink && CONFIG.info.mapLink) {
        mapLink.href = CONFIG.info.mapLink;
        mapLink.target = '_blank';
    }

    // Random Viewer Count for Hot Badge (creates urgency)
    const viewerCount = document.getElementById('viewer-count');
    if (viewerCount) {
        const randomCount = Math.floor(Math.random() * 8) + 5; // 5-12 người
        viewerCount.textContent = randomCount;

        // Update randomly every 30-60 seconds
        setInterval(() => {
            const newCount = Math.floor(Math.random() * 8) + 5;
            viewerCount.textContent = newCount;
        }, (30 + Math.random() * 30) * 1000);
    }
});
