/* ============================================
   MODERN VALENTINE'S WEBSITE - JAVASCRIPT
   Bold Luxury Interactions & Animations
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initLoadingSequence();
    initHeartParticles();
    initCustomCursor();
    initLazyLoading();
    initScrollAnimations();
    initNavigation();
    initLightbox();
    initSurprise();
    initSoundToggle();
    initTypewriter();

    // New Interactive Features
    initMemoryVault();
    initPolaroidWall();
    initMemoryMatch();
    initQuiz();
    initSecretEnvelope();
    initFutureLetters();
    initPrivateMode();
    initSoundMemories();
});

// ============================================
// LOADING SEQUENCE
// ============================================

function initLoadingSequence() {
    const loadingScreen = document.getElementById('loadingScreen');
    const countdownNumber = document.getElementById('countdownNumber');
    const heartLoader = document.querySelector('.heart-beat-loader');
    const loadingText = document.querySelector('.loading-text');
    const cardContainer = document.getElementById('cardContainer');

    // Prevent scrolling during loading
    document.body.classList.add('loading');

    let count = 3;

    // Countdown sequence
    const countdownInterval = setInterval(() => {
        countdownNumber.style.animation = 'none';
        setTimeout(() => {
            countdownNumber.style.animation = 'countdownPulse 1s ease-out forwards';
        }, 30);

        count--;

        if (count > 0) {
            countdownNumber.textContent = count;
        } else {
            clearInterval(countdownInterval);

            // Show heart and "Get Ready"
            countdownNumber.style.display = 'none';
            heartLoader.classList.add('active');
            loadingText.classList.add('active');

            // After 2 seconds, show the falling card
            setTimeout(() => {
                heartLoader.style.display = 'none';
                loadingText.style.display = 'none';
                cardContainer.classList.add('active');

                // Remove loading screen after card lands
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    document.body.classList.remove('loading');

                    // Remove from DOM after transition
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 1000);
                }, 5500); // Wait for card animation to complete
            }, 3000);
        }
    }, 2000);
}

// ============================================
// HEART PARTICLES CANVAS
// ============================================

function initHeartParticles() {
    const canvas = document.getElementById('heartParticles');
    const ctx = canvas.getContext('2d');

    let particles = [];
    let animationId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class HeartParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 20;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 0.5 + 0.2;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.life = 0;
            this.maxLife = Math.random() * 300 + 200;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            this.life++;

            // Fade out as it rises
            this.opacity = Math.max(0, 0.8 - (this.life / this.maxLife));

            // Reset when particle is off screen or life is over
            if (this.y < -20 || this.life >= this.maxLife) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#ff0055';

            // Draw heart shape
            const x = this.x;
            const y = this.y;
            const size = this.size;

            ctx.beginPath();
            ctx.moveTo(x, y + size * 0.3);
            ctx.bezierCurveTo(x, y, x - size * 0.5, y - size * 0.5, x - size, y + size * 0.3);
            ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.7, x, y + size * 2);
            ctx.bezierCurveTo(x, y + size * 1.7, x + size, y + size, x + size, y + size * 0.3);
            ctx.bezierCurveTo(x + size * 0.5, y - size * 0.5, x, y, x, y + size * 0.3);
            ctx.fill();

            ctx.restore();
        }
    }

    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push(new HeartParticle());
        // Stagger initial positions
        particles[i].y = Math.random() * canvas.height;
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Pause animation when page is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// ============================================
// TYPEWRITER EFFECT
// ============================================

function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                typeText(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    typewriterElements.forEach(el => observer.observe(el));
}

function typeText(element) {
    const text = element.getAttribute('data-text');
    const textSpan = element.querySelector('.typewriter-text');
    const cursor = element.querySelector('.typewriter-cursor');

    if (!text || !textSpan || !cursor) return;

    let index = 0;
    const speed = 30; // Typing speed in milliseconds

    function type() {
        if (index < text.length) {
            textSpan.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Finished typing this paragraph
            element.classList.add('typed');

            // Keep cursor visible for a moment
            setTimeout(() => {
                cursor.classList.add('hidden');

                // Start next paragraph if exists
                const nextElement = element.nextElementSibling;
                if (nextElement && nextElement.classList.contains('typewriter') && !nextElement.classList.contains('typed')) {
                    setTimeout(() => {
                        typeText(nextElement);
                    }, 300);
                }
            }, 500);
        }
    }

    type();
}

// ============================================
// CUSTOM CURSOR
// ============================================

function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Smooth follow for outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .moment-card, .surprise-unopened');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(2)';
            cursorOutline.style.transform = 'scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// LAZY LOADING
// ============================================

function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '100px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        animationObserver.observe(item);
    });

    // Observe moment cards
    document.querySelectorAll('.moment-card').forEach(card => {
        animationObserver.observe(card);
    });

    // Observe reason items
    document.querySelectorAll('.reason-item').forEach(item => {
        animationObserver.observe(item);
    });
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Scroll spy
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => scrollObserver.observe(section));

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// LIGHTBOX
// ============================================

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    const momentCards = document.querySelectorAll('.moment-card');
    const images = [];
    let currentIndex = 0;

    // Collect all images
    momentCards.forEach((card, index) => {
        const img = card.querySelector('img');
        const src = img.getAttribute('data-src') || img.src;
        images.push(src);

        card.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex];
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex];
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
}

// ============================================
// SURPRISE SECTION
// ============================================

function initSurprise() {
    const surpriseBox = document.getElementById('surpriseBox');
    const surpriseReveal = document.getElementById('surpriseReveal');

    surpriseBox.addEventListener('click', () => {
        surpriseBox.style.display = 'none';
        surpriseReveal.classList.add('active');
        triggerConfetti();
    });
}

// ============================================
// CONFETTI ANIMATION
// ============================================

function triggerConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff0055', '#ff4081', '#ffd700', '#ffffff', '#ff6b9d'];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 4 - 2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.shape = Math.random() > 0.5 ? 'circle' : 'square';
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            this.speedY += 0.1; // Gravity
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;

            if (this.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            }

            ctx.restore();
        }
    }

    // Create particles
    for (let i = 0; i < 200; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let activeParticles = 0;

        particles.forEach(particle => {
            if (particle.y < canvas.height + 50) {
                particle.update();
                particle.draw();
                activeParticles++;
            }
        });

        if (activeParticles > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// ============================================
// SOUND TOGGLE
// ============================================

function initSoundToggle() {
    const soundToggle = document.getElementById('soundToggle');
    const soundBars = soundToggle.querySelector('.sound-bars');
    
    // Create audio element with your file from assets folder
    const audio = new Audio('../asset/romantic-music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    let isPlaying = false;
    
    soundToggle.addEventListener('click', () => {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            soundBars.classList.add('active');
            audio.play().catch(err => {
                console.log('Audio playback failed:', err);
                // Reset state if playback fails
                isPlaying = false;
                soundBars.classList.remove('active');
            });
        } else {
            soundBars.classList.remove('active');
            audio.pause();
        }
    });
    
    // Optional: Add fade in/out effect
    soundToggle.addEventListener('click', () => {
        if (isPlaying) {
            // Fade in
            audio.volume = 0;
            const fadeIn = setInterval(() => {
                if (audio.volume < 0.3) {
                    audio.volume = Math.min(0.3, audio.volume + 0.05);
                } else {
                    clearInterval(fadeIn);
                }
            }, 100);
        } else {
            // Fade out
            const fadeOut = setInterval(() => {
                if (audio.volume > 0) {
                    audio.volume = Math.max(0, audio.volume - 0.05);
                } else {
                    clearInterval(fadeOut);
                    audio.pause();
                }
            }, 100);
        }
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Parallax for hero background text
    const heroBgText = document.querySelector('.hero-bg-text');
    if (heroBgText) {
        heroBgText.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    // Parallax for floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
const handleResize = debounce(() => {
    const canvas = document.getElementById('confetti');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}, 250);

window.addEventListener('resize', handleResize);

// ============================================
// PAGE VISIBILITY
// ============================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is hidden
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations
        document.body.style.animationPlayState = 'running';
    }
});

// ============================================
// SMOOTH SECTION TRANSITIONS
// ============================================

const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.3
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 1s ease-out';
    sectionObserver.observe(section);
});

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        triggerEasterEgg();
    }
});

function triggerEasterEgg() {
    // Create hearts explosion
    const heartsCount = 50;
    for (let i = 0; i < heartsCount; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 50);
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.cssText = `
        position: fixed;
        font-size: ${Math.random() * 30 + 20}px;
        left: ${Math.random() * 100}vw;
        bottom: -50px;
        pointer-events: none;
        z-index: 9999;
        animation: floatUp 3s ease-out forwards;
    `;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c💕 Happy Valentine\'s Day! 💕',
    'color: #ff0055; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 0, 85, 0.5);');
console.log('%cMade with love and code ❤️',
    'color: #ffd700; font-size: 16px; font-style: italic;');

// ============================================
// PRELOAD CRITICAL IMAGES
// ============================================

window.addEventListener('load', () => {
    const criticalImages = document.querySelectorAll('img[loading="eager"]');

    criticalImages.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// ============================================
// NEW INTERACTIVE FEATURES
// ============================================

// 1. MEMORY VAULT
function initMemoryVault() {
    const vaultDoor = document.getElementById('vaultDoor');
    const unlockBtn = document.getElementById('vaultUnlockBtn');

    if (!vaultDoor || !unlockBtn) return;

    unlockBtn.addEventListener('click', () => {
        // Add a small delay for dramatic effect
        unlockBtn.textContent = 'Unlocking...';

        setTimeout(() => {
            vaultDoor.classList.add('open');
            // Play unlock sound if sound is enabled (optional)
        }, 800);
    });
}

// 2. POLAROID WALL
function initPolaroidWall() {
    const polaroids = document.querySelectorAll('.polaroid-item');

    polaroids.forEach(item => {
        // Random rotation between -10 and 10 degrees
        const rotation = Math.random() * 20 - 10;
        item.style.setProperty('--rot', `${rotation}deg`);

        // Random slight margin adjustments for "messiness"
        const top = Math.random() * 20;
        item.style.marginTop = `${top}px`;
    });
}

// 3. MEMORY MATCH GAME
function initMemoryMatch() {
    const memoryGrid = document.getElementById('memoryGrid');
    const winMsg = document.getElementById('memoryWinMsg');

    if (!memoryGrid) return;

    // Game Data - Pairs (Image + Caption or Icon)
    const cardsData = [
        { id: 1, content: '☕', type: 'icon' },
        { id: 1, content: 'First Date', type: 'text' },
        { id: 2, content: '🌧️', type: 'icon' },
        { id: 2, content: 'Rainy Night', type: 'text' },
        { id: 3, content: '✈️', type: 'icon' },
        { id: 3, content: 'Travels', type: 'text' },
        { id: 4, content: '🏠', type: 'icon' },
        { id: 4, content: 'Moving In', type: 'text' }
    ];

    // Shuffle
    const shuffledCards = cardsData.sort(() => 0.5 - Math.random());

    // Generate HTML
    memoryGrid.innerHTML = '';
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.dataset.id = card.id;

        cardElement.innerHTML = `
            <div class="memory-front"></div>
            <div class="memory-back">${card.content}</div>
        `;

        memoryGrid.appendChild(cardElement);
    });

    // Game Logic
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchCount = 0;

    const cards = document.querySelectorAll('.memory-card');

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.id === secondCard.dataset.id;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        firstCard.classList.add('matched');
        secondCard.classList.add('matched');

        resetBoard();
        matchCount++;

        if (matchCount === cardsData.length / 2) {
            setTimeout(() => {
                winMsg.classList.add('active');
                triggerConfetti();
            }, 500);
        }
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    cards.forEach(card => card.addEventListener('click', flipCard));
}

// 4. RELATIONSHIP QUIZ
function initQuiz() {
    const quizContent = document.getElementById('quizContent');
    const quizProgress = document.getElementById('quizProgress');
    const startBtn = document.getElementById('startQuizBtn');

    if (!quizContent) return;

    const questions = [
        {
            q: "Who said 'I love you' first?",
            options: ["Me", "You", "It was mutual at the same time"],
            msg: "And I've meant it every second since."
        },
        {
            q: "What is my favorite thing about you?",
            options: ["Your smile", "Your kindness", "Everything"],
            msg: "Truth is, I can't pick just one. I love it all."
        },
        {
            q: "Where is our favorite spot?",
            options: ["The Park", "Home", "That cafe"],
            msg: "Anywhere with you is my favorite place."
        }
    ];

    let currentQ = 0;

    if (startBtn) {
        startBtn.addEventListener('click', () => loadQuestion(0));
    }

    function loadQuestion(index) {
        if (index >= questions.length) {
            showResult();
            return;
        }

        const q = questions[index];
        quizProgress.style.width = `${((index + 1) / questions.length) * 100}%`;

        let html = `<div class="quiz-question">${q.q}</div>`;
        q.options.forEach(opt => {
            html += `<button class="quiz-option-btn">${opt}</button>`;
        });

        quizContent.innerHTML = html;

        // Add listeners to new buttons
        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Show love message briefly
                quizContent.innerHTML = `<div class="quiz-question" style="font-size: 1.5rem; color: var(--color-accent);">${q.msg}</div>`;

                setTimeout(() => {
                    loadQuestion(index + 1);
                }, 2000);
            });
        });
    }

    function showResult() {
        quizContent.innerHTML = `
            <div class="quiz-question">You know us perfectly.</div>
            <p>You are the expert on my heart.</p>
            <div style="font-size: 3rem; margin-top: 1rem;">❤️</div>
        `;
        triggerConfetti();
    }
}

// 5. SECRET ENVELOPE
function initSecretEnvelope() {
    const checkBtn = document.getElementById('checkDateBtn');
    const dateInput = document.getElementById('secretDateInput');
    const envelope = document.querySelector('.envelope');
    const lockHint = document.getElementById('lockHint');
    const secretMessage = document.getElementById('secretMessage');
    const closeSecretBtn = document.getElementById('closeSecretBtn');
    const waxSeal = document.getElementById('waxSeal');

    // HARDCODED DATE (YYYY-MM-DD) - Change this!
    const SECRET_DATE = "2021-04-08";
    const DOB = "1999-07-03";

    if (!checkBtn) return;

    checkBtn.addEventListener('click', () => {
        const inputDate = dateInput.value;

        if (inputDate === SECRET_DATE) {
            // Success
            lockHint.textContent = "Unlocking...";
            lockHint.style.color = "var(--color-accent)";

            // Open envelope animation
            envelope.classList.add('open');
            waxSeal.classList.add('broken');

            // Show message modal after delay
            setTimeout(() => {
                secretMessage.classList.add('active');
            }, 1000);

        } else if (inputDate == DOB) {
            // Date of Birth
            lockHint.textContent = "I know you will keep this but the date is more special.";
            lockHint.style.color = "var(--color-text-muted)";

            // Shake effect
            checkBtn.style.transform = "translateX(5px)";
            setTimeout(() => {
                checkBtn.style.transform = "translateX(0)";
            }, 100);
        } else {
            // Wrong date
            lockHint.textContent = "Not yet... but our time is forever.";
            lockHint.style.color = "var(--color-text-muted)";

            // Shake effect
            checkBtn.style.transform = "translateX(5px)";
            setTimeout(() => {
                checkBtn.style.transform = "translateX(0)";
            }, 100);
        }
    });

    // Also click wax seal to open if date is already correct (optional logic) or just as flourish
    waxSeal.addEventListener('click', () => {
        // Just a flourish if not unlocked
        waxSeal.style.transform = "scale(1.1)";
        setTimeout(() => waxSeal.style.transform = "translate(-50%, -80%)", 200);
    });

    if (closeSecretBtn) {
        closeSecretBtn.addEventListener('click', () => {
            secretMessage.classList.remove('active');
        });
    }
}

// 6. FUTURE LETTERS
function initFutureLetters() {
    const capsules = document.querySelectorAll('.capsule-card');
    const modals = document.querySelectorAll('.capsule-modal');
    const closeBtns = document.querySelectorAll('.modal-close');

    capsules.forEach(capsule => {
        capsule.addEventListener('click', () => {
            const modalId = capsule.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(m => m.classList.remove('active'));
        });
    });

    // Close on background click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

// 7. PRIVATE MODE
function initPrivateMode() {
    const toggle = document.getElementById('privateModeToggle');

    if (!toggle) return;

    let isPrivate = false;

    toggle.addEventListener('click', () => {
        isPrivate = !isPrivate;

        if (isPrivate) {
            document.body.classList.add('private-mode-active');
            toggle.innerHTML = '<span class="icon-eye-off">🙈</span>';
        } else {
            document.body.classList.remove('private-mode-active');
            toggle.innerHTML = '<span class="icon-eye">👁️</span>';
        }
    });
}

// 8. SOUND MEMORIES
function initSoundMemories() {
    const soundImages = document.querySelectorAll('img[data-sound]');

    soundImages.forEach(img => {
        const soundPath = img.getAttribute('data-sound');
        if (!soundPath) return;

        const audio = new Audio(soundPath);
        audio.volume = 0.5;

        // Visual indicator
        const indicator = document.createElement('div');
        indicator.innerHTML = '🔊';
        indicator.style.cssText = 'position:absolute; top:10px; right:10px; font-size:1.5rem; opacity:0.7; pointer-events:none;';
        img.parentNode.appendChild(indicator);

        img.parentNode.addEventListener('mouseenter', () => {
            audio.play().catch(e => console.log('Audio play blocked until interaction'));
            indicator.style.opacity = '1';
            indicator.style.transform = 'scale(1.2)';
        });

        img.parentNode.addEventListener('mouseleave', () => {
            audio.pause();
            audio.currentTime = 0;
            indicator.style.opacity = '0.7';
            indicator.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// INITIALIZATION COMPLETE
// ============================================

console.log('✨ Valentine\'s website initialized successfully!');