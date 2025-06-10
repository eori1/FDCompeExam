// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const searchForm = document.querySelector('.search-form');
const newsletterForm = document.querySelector('.newsletter-form');

// Mobile Navigation Toggle
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Event Listeners
navToggle.addEventListener('click', toggleMobileNav);

// Close mobile menu when clicking on a link
navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Search Form Handler
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = searchForm.querySelector('.search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Add loading state
        const searchBtn = searchForm.querySelector('.search-btn');
        const originalHTML = searchBtn.innerHTML;
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Simulate search (replace with actual search functionality)
        setTimeout(() => {
            alert(`Searching for: "${query}"`);
            searchBtn.innerHTML = originalHTML;
            searchInput.value = '';
        }, 1000);
    }
});

// Newsletter Form Handler
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showNotification('Please enter your email address', 'error');
        return;
    }
    
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Add loading state
    const submitBtn = newsletterForm.querySelector('.newsletter-btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Simulate subscription (replace with actual API call)
    setTimeout(() => {
        showNotification('Successfully subscribed to newsletter!', 'success');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        emailInput.value = '';
    }, 1500);
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.article-card, .featured-article, .footer-section');
    animatedElements.forEach(el => observer.observe(el));
    
    // Initialize article navigation
    initArticleLinks();
});

// Article data
const articlesData = {
    1: {
        id: 1,
        category: 'Breaking',
        date: 'June 9, 2025',
        title: 'OSA to revise Univ student handbook by summer',
        subtitle: 'The University\'s Office of Student Affairs (OSA) Dean Dr. Ma. Pilar Malata has announced the revision of the student handbook this upcoming summer break.',
        content: `
            <p>During the University Recognition Program for non-academic awards, Malata revealed that the process will involve a thorough examination and revision of all award guidelines and criteria to make sure they are "clearly defined and easily understood."</p>
            
            <p>"We will be focusing on quality and not the quantity of activities conducted by student councils and organizations," Malata stated.</p>
            
            <p>The OSA dean also announced the addition of recognizing the Outstanding Initiative or Innovative Project, which cites having a "profound impact" on the students' experiences.</p>
            
            <p>Moreover, an adviser will also be honored who demonstrates "extraordinary commitment" in supporting the activities of student councils or organizations.</p>
        `,
        image: 'Pictures/Breaking.jpg',
        caption: 'OSA Dean Dr. Ma. Pilar Malata'
    },
    2: {
        id: 2,
        category: 'PANGINBULAHAN',
        date: 'June 9, 2025',
        title: 'PANGINBULAHAN',
        subtitle: 'Forum-Dimensions extends its warmest congratulations to Nove Joy Losbañes, Editor-in-Chief for academic year 2024-2025, for being this year\'s recipient of the esteemed Esteban Javellana Award for Excellence in the Field of Creative Writing.',
        content: `
            <p>Forum-Dimensions extends its warmest congratulations to Nove Joy Losbañes, Editor-in-Chief for academic year 2024-2025, for being this year's recipient of the esteemed Esteban Javellana Award for Excellence in the Field of Creative Writing.</p>
            
            <p>The award recognizes outstanding achievement in creative writing and literary excellence among student publications.</p>
            
            <p>Losbañes has demonstrated exceptional leadership and creative vision throughout her tenure as Editor-in-Chief.</p>
        `,
        image: 'Pictures/Panginbulahan.jpg',
        caption: 'Nove Joy Losbañes receiving the award'
    },
    3: {
        id: 3,
        category: 'NEWS UPDATE',
        date: 'June 7, 2025',
        title: 'Graduating students urged to secure Alumni ID before graduation',
        subtitle: 'Graduating students at the University were encouraged to register for their alumni identification cards prior to this year\'s Commencement Exercises on June 13.',
        content: `
            <p>The alumni ID card will be used during the graduates' oath taking-ceremony to induct them as an official alumnus of the University.</p>
            
            <p>Students can register at the Alumni Affairs Office located at the University Administration Building.</p>
            
            <p>The process includes completing application forms and providing necessary documentation.</p>
        `,
        image: 'Pictures/NewsUpdate.jpg',
        caption: 'Graduation ceremony preparation'
    },
    4: {
        id: 4,
        category: '#FROMTHEARCHIVES',
        date: 'May 11, 2025',
        title: 'Nanay for Hire: Ang kwento ng mga babaeng naging propesyon na ang pagiging ina',
        subtitle: '"Hindi pangkaraniwang trabaho ang mayroon sila. Sapagkat bukod sa punan ang tungkulin ng isang ina, binubuhay din nila ang pag-asa ng minsan nang naglaho sa..."',
        content: `
            <p>"Hindi pangkaraniwang trabaho ang mayroon sila. Sapagkat bukod sa punan ang tungkulin ng isang ina, binubuhay din nila ang pag-asa ng minsan nang naglaho sa puso ng mga batang naging kliyente nila."</p>
            
            <p>Ang mga kababaihang ito ay naglilingkod bilang substitute mothers para sa mga batang nangangailangan ng maternal care.</p>
            
            <p>Ang kanilang mga kwento ay nagpapakita ng dedikasyon at pagmamahal sa kabila ng mga hamon sa buhay.</p>
        `,
        image: 'Pictures/FromTheArchives.webp',
        caption: 'Mga nanay na naglilingkod sa iba'
    }
};

// Make articles clickable
function initArticleLinks() {
    // Remove the JavaScript event handlers since we're using HTML onclick attributes
    // This prevents conflicts with the direct navigation
    console.log('Article links initialized - using HTML onclick handlers');
}

// Open article function
function openArticle(articleId) {
    const article = articlesData[articleId];
    if (article) {
        // Save article data to localStorage
        localStorage.setItem(`article_${articleId}`, JSON.stringify(article));
        // Navigate to article page
        window.location.href = `article.html?id=${articleId}`;
    }
}

// Social Media Link Handlers
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').classList[1].split('-')[1];
        showNotification(`Opening ${platform.charAt(0).toUpperCase() + platform.slice(1)} page`, 'info');
    });
});

// Reading Progress Indicator (for future implementation)
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--accent-red);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    });
}

// Initialize reading progress
createReadingProgress();

// Loading Screen (optional enhancement)
function showLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">Forum-Dimensions</div>
            <div class="loading-spinner"></div>
            <div class="loading-text">Loading latest news...</div>
        </div>
    `;
    
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10002;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Hide loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

// Uncomment to enable loading screen
// showLoadingScreen();

// Back to Top Button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-blue);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.background = 'var(--secondary-blue)';
        backToTop.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.background = 'var(--primary-blue)';
        backToTop.style.transform = 'scale(1)';
    });
}

// Initialize back to top button
createBackToTopButton();

// Print-friendly styles (for Figma transfer consideration)
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

console.log('Forum-Dimensions News Website Loaded Successfully! 📰');
console.log('Ready for Figma transfer - all styles are well-structured and commented.'); 