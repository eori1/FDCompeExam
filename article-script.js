// Article page functionality
document.addEventListener('DOMContentLoaded', () => {
    loadArticleContent();
    initScrollFollowImage();
    initMobileNavigation();
    initDropdownNavigation();
    loadTopStories();
});

// Article data (same as in main script)
const articlesData = {
    1: {
        id: 1,
        category: '#FROMTHEARCHIVES',
        date: 'May 11, 2025',
        title: 'Global Climate Summit Reaches Historic Agreement on Carbon Reduction Targets',
        subtitle: 'World leaders unite in landmark decision that could reshape international environmental policy for the next decade.',
        content: `
            <p>World leaders unite in landmark decision that could reshape international environmental policy for the next decade. The agreement includes binding commitments from over 190 countries.</p>
            
            <p>The historic agreement represents a significant step forward in global efforts to combat climate change, with participating nations committing to ambitious carbon reduction targets that will guide environmental policy for years to come.</p>
            
            <p>Key provisions of the agreement include a 50% reduction in carbon emissions by 2030, increased investment in renewable energy infrastructure, and the establishment of a global climate monitoring system to ensure accountability.</p>
            
            <p><strong>International Cooperation</strong></p>
            
            <p>The summit demonstrated unprecedented international cooperation, with developed and developing nations working together to find common ground on one of the most pressing issues of our time.</p>
            
            <p>Environmental experts have praised the agreement as a crucial turning point in the fight against climate change, noting that the binding nature of the commitments represents a significant departure from previous voluntary agreements.</p>
            
            <p><strong>Implementation Timeline</strong></p>
            
            <p>The agreement will be implemented in phases over the next decade, with regular review sessions to assess progress and adjust targets as needed. A dedicated international body will oversee compliance and provide support to nations struggling to meet their commitments.</p>
        `,
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        caption: 'World leaders at the climate summit'
    },
    2: {
        id: 2,
        category: 'TECHNOLOGY',
        date: 'December 14, 2024',
        title: 'AI Revolution: New Breakthrough in Machine Learning Changes Everything',
        subtitle: 'Scientists develop revolutionary algorithm that could transform how artificial intelligence processes human language.',
        content: `
            <p>Scientists develop revolutionary algorithm that could transform how artificial intelligence processes human language and understands complex human interactions.</p>
            
            <p>The breakthrough represents a quantum leap in artificial intelligence capabilities, with potential applications spanning from healthcare and education to business communications and creative industries.</p>
            
            <p><strong>Technical Innovation</strong></p>
            
            <p>The new algorithm utilizes advanced neural network architectures that more closely mimic human cognitive processes, allowing for more nuanced understanding of context, emotion, and intent in human communication.</p>
            
            <p>Researchers have reported significant improvements in accuracy and efficiency compared to existing AI systems, with the algorithm demonstrating unprecedented ability to understand subtle linguistic nuances and cultural contexts.</p>
            
            <p><strong>Industry Impact</strong></p>
            
            <p>Tech industry leaders predict that this advancement could accelerate the development of more sophisticated AI assistants, improve automated translation services, and enhance human-computer interaction across multiple platforms.</p>
            
            <p>The research team plans to make their findings available to the broader scientific community, fostering collaboration and accelerating further developments in the field.</p>
        `,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        caption: 'AI research laboratory'
    },
    3: {
        id: 3,
        category: 'BUSINESS',
        date: 'December 13, 2024',
        title: 'Market Surge: Tech Stocks Rally Following Positive Economic Indicators',
        subtitle: 'Wall Street sees unprecedented growth as technology sector leads the charge.',
        content: `
            <p>Wall Street sees unprecedented growth as technology sector leads the charge in this quarter's financial performance, with major tech companies reporting record-breaking earnings.</p>
            
            <p>The rally was driven by strong quarterly earnings reports from major technology companies, positive consumer sentiment data, and optimistic projections for the coming fiscal year.</p>
            
            <p><strong>Market Performance</strong></p>
            
            <p>Leading technology stocks saw gains of up to 15% in a single trading session, with the NASDAQ composite index reaching new all-time highs. Investor confidence has been bolstered by strong revenue growth across multiple tech sectors.</p>
            
            <p>Financial analysts attribute the surge to increased demand for digital services, cloud computing solutions, and emerging technologies such as artificial intelligence and blockchain applications.</p>
            
            <p><strong>Economic Outlook</strong></p>
            
            <p>Economic indicators suggest continued growth in the technology sector, with consumer spending on digital products and services showing no signs of slowing down despite global economic uncertainties.</p>
            
            <p>Investment experts recommend cautious optimism while noting the importance of diversified portfolios in navigating potential market volatility in the coming months.</p>
        `,
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        caption: 'Stock market trading floor'
    },
    4: {
        id: 4,
        category: 'HEALTH',
        date: 'December 12, 2024',
        title: 'Medical Breakthrough: New Treatment Shows Promise for Rare Diseases',
        subtitle: 'Clinical trials reveal significant improvements in patient outcomes using innovative gene therapy.',
        content: `
            <p>Clinical trials reveal significant improvements in patient outcomes using innovative gene therapy techniques, offering new hope for patients with previously untreatable conditions.</p>
            
            <p>The groundbreaking treatment utilizes advanced gene editing technology to target the root causes of rare genetic disorders, representing a paradigm shift in personalized medicine.</p>
            
            <p><strong>Clinical Results</strong></p>
            
            <p>Phase III clinical trials involving over 500 patients demonstrated remarkable success rates, with 85% of participants showing significant improvement in their condition within six months of treatment.</p>
            
            <p>The therapy targets specific genetic mutations responsible for a group of rare diseases that affect approximately 200,000 people worldwide, conditions for which no effective treatments previously existed.</p>
            
            <p><strong>Future Implications</strong></p>
            
            <p>Medical researchers believe this breakthrough could pave the way for similar treatments targeting other rare diseases, potentially benefiting millions of patients globally.</p>
            
            <p>The treatment is expected to receive regulatory approval within the next 18 months, with plans for expanded clinical trials and broader patient access programs already in development.</p>
        `,
        image: 'https://images.unsplash.com/photo-1594736797933-d0ef501ba2fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        caption: 'Medical research laboratory'
    },
    5: {
        id: 5,
        category: 'EDUCATION',
        date: 'December 11, 2024',
        title: 'University Initiative: New Scholarship Program Supports Student Innovation',
        subtitle: 'West Visayas State University launches comprehensive funding program to support student research and entrepreneurship.',
        content: `
            <p>West Visayas State University launches comprehensive funding program to support student research and entrepreneurship projects, marking a significant investment in student innovation and academic excellence.</p>
            
            <p>The new scholarship program allocates over ₱50 million annually to support undergraduate and graduate students pursuing innovative research projects across various disciplines.</p>
            
            <p><strong>Program Benefits</strong></p>
            
            <p>Selected students will receive full tuition coverage, research grants up to ₱500,000, mentorship from industry professionals, and access to state-of-the-art research facilities.</p>
            
            <p>The program particularly encourages projects in emerging fields such as sustainable technology, digital innovation, healthcare solutions, and social entrepreneurship.</p>
            
            <p><strong>Application Process</strong></p>
            
            <p>Students can apply through a competitive process that evaluates academic performance, project proposals, and potential for real-world impact. The first cohort of 100 students will begin their projects in the upcoming semester.</p>
            
            <p>University officials expect the program to foster innovation, enhance research capabilities, and strengthen the institution's reputation as a leading center for academic excellence in the region.</p>
        `,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        caption: 'University campus and students'
    }
};

// Load article content dynamically
function loadArticleContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        const articleData = localStorage.getItem(`article_${articleId}`);
        if (articleData) {
            const article = JSON.parse(articleData);
            populateArticle(article);
        } else {
            // Fallback to articlesData if localStorage is empty
            const article = articlesData[articleId];
            if (article) {
                populateArticle(article);
            } else {
                loadDefaultArticle();
            }
        }
    } else {
        loadDefaultArticle();
    }
}

// Populate article with data
function populateArticle(article) {
    document.getElementById('article-category').textContent = article.category;
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-subtitle').textContent = article.subtitle;
    document.getElementById('article-content').innerHTML = article.content;
    document.getElementById('article-image').src = article.image;
    document.getElementById('image-caption').textContent = article.caption;
    
    // Update page title
    document.title = `${article.title} - Forum-Dimensions`;
}

// Load default article for direct access
function loadDefaultArticle() {
    const defaultArticle = {
        category: '#FROMTHEARCHIVES',
        date: 'May 11, 2025',
        title: 'Global Climate Summit Reaches Historic Agreement on Carbon Reduction Targets',
        subtitle: 'World leaders unite in landmark decision that could reshape international environmental policy for the next decade.',
        content: `
            <p>World leaders unite in landmark decision that could reshape international environmental policy for the next decade. The agreement includes binding commitments from over 190 countries.</p>
            
            <p>The historic agreement represents a significant step forward in global efforts to combat climate change, with participating nations committing to ambitious carbon reduction targets that will guide environmental policy for years to come.</p>
            
            <p>Key provisions of the agreement include a 50% reduction in carbon emissions by 2030, increased investment in renewable energy infrastructure, and the establishment of a global climate monitoring system to ensure accountability.</p>
            
            <p><strong>International Cooperation</strong></p>
            
            <p>The summit demonstrated unprecedented international cooperation, with developed and developing nations working together to find common ground on one of the most pressing issues of our time.</p>
            
            <p>Environmental experts have praised the agreement as a crucial turning point in the fight against climate change, noting that the binding nature of the commitments represents a significant departure from previous voluntary agreements.</p>
            
            <p><strong>Implementation Timeline</strong></p>
            
            <p>The agreement will be implemented in phases over the next decade, with regular review sessions to assess progress and adjust targets as needed. A dedicated international body will oversee compliance and provide support to nations struggling to meet their commitments.</p>
        `,
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        caption: 'World leaders at the climate summit'
    };
    
    populateArticle(defaultArticle);
}

// Initialize scroll-following image behavior
function initScrollFollowImage() {
    const sidebar = document.querySelector('.article-sidebar');
    const content = document.querySelector('.article-content');
    const image = document.querySelector('.article-image');
    
    if (!sidebar || !content || !image) return;
    
    let ticking = false;
    
    function updateImagePosition() {
        const contentRect = content.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        
        // Calculate if content is in view and how much
        const contentTop = contentRect.top;
        const contentBottom = contentRect.bottom;
        const viewportHeight = window.innerHeight;
        
        // Only apply scroll behavior on desktop
        if (window.innerWidth > 768) {
            // If content top is above viewport and content bottom is below viewport
            if (contentTop < 0 && contentBottom > viewportHeight) {
                // Calculate how far we've scrolled into the content
                const scrollProgress = Math.abs(contentTop) / (contentRect.height - viewportHeight);
                const maxTranslate = contentRect.height - imageRect.height - 40; // 40px padding
                
                if (maxTranslate > 0) {
                    const translateY = Math.min(scrollProgress * maxTranslate, maxTranslate);
                    image.style.transform = `translateY(${translateY}px)`;
                } else {
                    image.style.transform = 'translateY(0)';
                }
            } else if (contentBottom <= viewportHeight) {
                // Content is above viewport - stick image to bottom
                const maxTranslate = contentRect.height - imageRect.height - 40;
                if (maxTranslate > 0) {
                    image.style.transform = `translateY(${maxTranslate}px)`;
                }
            } else {
                // Content is below viewport - stick image to top
                image.style.transform = 'translateY(0)';
            }
        } else {
            // Reset transform on mobile
            image.style.transform = 'translateY(0)';
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateImagePosition);
            ticking = true;
        }
    }
    
    // Initial position
    updateImagePosition();
    
    // Listen for scroll events
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateImagePosition);
}

// Mobile Navigation - Using the working approach from script.js
function initMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle mobile navigation
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
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
}

// Dropdown functionality
function initDropdownNavigation() {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        const dropdownToggle = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
}

// Load top stories (excluding current article)
function loadTopStories() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentArticleId = parseInt(urlParams.get('id')) || 1;
    
    // Get other articles (excluding current one)
    const otherArticles = Object.values(articlesData).filter(article => article.id !== currentArticleId);
    
    // Take first 3 articles
    const topStories = otherArticles.slice(0, 3);
    
    const topStoriesContainer = document.querySelector('.top-stories .articles-grid');
    if (topStoriesContainer && topStories.length > 0) {
        topStoriesContainer.innerHTML = topStories.map(article => `
            <article class="article-card" onclick="navigateToArticle(${article.id})">
                <div class="card-image">
                    <img src="${article.image}" alt="${article.title}" />
                    <div class="card-category">${article.category}</div>
                </div>
                <div class="card-content">
                    <h4 class="card-title">${article.title}</h4>
                    <p class="card-excerpt">${article.subtitle}</p>
                    <div class="card-meta">
                        <span class="date">${article.date}</span>
                    </div>
                </div>
            </article>
        `).join('');
    }
}

// Navigate to article
function navigateToArticle(articleId) {
    const article = articlesData[articleId];
    if (article) {
        localStorage.setItem(`article_${articleId}`, JSON.stringify(article));
        window.location.href = `article.html?id=${articleId}`;
    }
} 