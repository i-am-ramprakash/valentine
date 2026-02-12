# 💕 Valentine's 2025 — A Modern Love Story

A **bold, luxury editorial** Valentine's Day website with dramatic 3D elements, cinematic animations, and unforgettable visual impact.

## ✨ What Makes This Special

### 🎬 **NEW: Cinematic Loading Experience**
- **3-2-1 Countdown**: Dramatic countdown with pulsing numbers
- **Beating Heart**: White heart animation during loading
- **Falling Card**: Beautiful card that falls and lands with physics
- **Ground Shadow**: Realistic shadow effect as card lands
- **Custom Message**: Personalized invitation card

### 🎨 **Bold Design Philosophy**
- **Dark Luxury Theme**: Sophisticated black background with dramatic accent colors
- **Custom Cursor**: Interactive cursor that responds to your movements
- **Heart Particle System**: 50+ floating hearts created with Canvas API
- **3D Floating Shapes**: Animated gradient orbs that create depth
- **Film Grain Texture**: Authentic editorial magazine aesthetic
- **Distinctive Typography**: Italiana display font + Cormorant Garamond serif + DM Sans

### 💌 **NEW: Typewriter Love Letter**
- **Real-time Typing**: Letter "writes" itself as you scroll
- **Blinking Cursor**: Authentic typewriter cursor animation
- **Sequential Paragraphs**: Each paragraph types after the previous completes
- **Smooth Timing**: Natural 30ms typing speed for realistic effect

### ⚡ **Eye-Catching Features**
- **Cinematic Hero**: Split-screen layout with staggered text reveals
- **Image Reveal Animations**: Color-wipe transitions on scroll
- **Asymmetric Grid Gallery**: Pinterest-style masonry layout
- **Interactive Lightbox**: Full-screen image viewing with keyboard nav
- **Confetti Explosion**: Physics-based particle system for the surprise
- **Smooth Parallax**: Depth-based scrolling effects

### 🎭 **Modern Interactions**
- **Loading Sequence**: 3-2-1 countdown → heart beat → falling card
- **Heart Particles**: Canvas-based floating hearts throughout site
- **Typewriter Letter**: Auto-typing love letter on scroll
- **Custom cursor trail** (desktop)
- **Scroll-triggered animations**
- **Hover states with scale transforms**
- **Sound toggle with animated bars**
- **One-page smooth scroll navigation**
- **Easter egg: Konami code** (↑↑↓↓←→←→BA)

## 🎬 Feature Breakdown

### Loading Screen Journey
1. **Countdown (3 seconds)**: Numbers pulse and fade with glow effect
2. **Heart Beat (2 seconds)**: White heart pulses with "Get Ready..." text
3. **Card Fall (2 seconds)**: Card drops from top with rotation and bounce
4. **Card Land (1.5 seconds)**: Card settles with shadow appearing beneath
5. **Fade to Site**: Smooth transition to main Valentine's experience

### Heart Particle System
- **50 floating hearts** rendered on HTML5 Canvas
- **Continuous upward movement** with random horizontal drift
- **Fade effect** as particles rise
- **Auto-regeneration** for endless animation
- **Performance optimized** with requestAnimationFrame
- **Responsive** to window resize

### Typewriter Love Letter
- **Sequential typing**: Paragraphs type one after another
- **Blinking cursor**: Authentic terminal-style cursor
- **Scroll-triggered**: Activates when letter section is visible
- **Natural pacing**: 30ms per character for readability
- **Cursor hides** after each paragraph completes

## 🚀 Quick Deploy to GitHub Pages

### 1. Upload to GitHub

```bash
# Create a new repo on github.com first, then:
git init
git add .
git commit -m "Add Valentine's 2025 website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/valentine-2025.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repo **Settings**
2. Click **Pages** in sidebar
3. Select **main** branch
4. Click **Save**
5. Your site: `https://YOUR-USERNAME.github.io/valentine-2025/`

### 3. View Locally

Just open `index.html` in your browser, or:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

## 🎨 Customization Guide

### Customize the Loading Card Message

Edit the falling card message in `index.html` around line 27:

```html
<div class="card-face card-front">
    <h2 class="card-title">You Are Invited</h2>
    <p class="card-message">
        To a journey through our love story.<br>
        Every moment, every memory,<br>
        crafted just for you.
    </p>
</div>
```

**Ideas for card messages:**
- "Happy Valentine's Day, [Name]"
- "For My One True Love"
- "Our Story Begins Here"
- "You Make My Heart Skip a Beat"
- "Forever Starts Today"

### Adjust Loading Speed

Change timing in `script.js` around line 25:

```javascript
// Countdown speed (currently 1 second per number)
}, 1000); // Change to 800 for faster, 1500 for slower

// Heart display duration
setTimeout(() => {
    // ...
}, 2000); // Time heart shows before card

// Card land duration
setTimeout(() => {
    // ...
}, 3500); // Total time before main site shows
```

### Customize Typewriter Speed

Edit `script.js` around line 157:

```javascript
const speed = 30; // Milliseconds per character
// 20 = fast, 30 = natural, 50 = slow
```

### Adjust Heart Particle Density

In `script.js` around line 87:

```javascript
// Create particles
for (let i = 0; i < 50; i++) { // Change 50 to desired number
    particles.push(new HeartParticle());
}
```

**Recommendations:**
- 30 particles: Light, subtle effect
- 50 particles: Balanced (default)
- 80 particles: Dense, romantic atmosphere
- 100+ particles: May impact performance on slower devices

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-bg: #0a0a0a;           /* Main background */
    --color-accent: #ff0055;       /* Primary accent (pink/red) */
    --color-gold: #ffd700;         /* Secondary accent (gold) */
    --color-text: #ffffff;         /* Text color */
}
```

**Color Scheme Ideas:**
- **Royal Purple**: `#8b5cf6` + `#fbbf24`
- **Ocean Blue**: `#0ea5e9` + `#f59e0b`
- **Forest Green**: `#10b981` + `#f59e0b`
- **Crimson Red**: `#dc2626` + `#fbbf24`

### Replace Images

All images use Unsplash placeholders. Replace with your photos:

```html
<!-- Find these in index.html and replace URLs -->
<img data-src="YOUR-IMAGE-URL.jpg" alt="Description">
```

**Recommended Sizes:**
- Hero image: 1200x800px
- Timeline images: 800x500px
- Gallery images: 600x600px

### Edit Content

#### Hero Section (Line ~36)
```html
<h1 class="hero-title">
    <span class="title-word highlight" data-word="Sarah">Sarah</span>
    <!-- Change the name -->
</h1>
```

#### Timeline Stories (Line ~73)
```html
<h3 class="timeline-title">When Stars Aligned</h3>
<p class="timeline-text">
    Your actual story here...
</p>
```

#### Love Letter (Line ~186)
```html
<div class="letter-body">
    <p class="letter-para">
        Write your personal love letter here...
    </p>
</div>

<p class="signature-name">Your Name</p>
```

#### Reasons (Line ~230)
```html
<div class="reason-item">
    <h3 class="reason-title">Your Smile</h3>
    <p class="reason-text">Why you love this quality...</p>
</div>
```

### Add Background Music

1. Add music file to your project (MP3/OGG format)
2. Edit `script.js` around line 265:

```javascript
function initSoundToggle() {
    const soundToggle = document.getElementById('soundToggle');
    const soundBars = soundToggle.querySelector('.sound-bars');
    
    // Add your audio file
    const audio = new Audio('music/your-song.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    
    let isPlaying = false;
    
    soundToggle.addEventListener('click', () => {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            soundBars.classList.add('active');
            audio.play();
        } else {
            soundBars.classList.remove('active');
            audio.pause();
        }
    });
}
```

**Music Suggestions:**
- Romantic instrumentals from YouTube Audio Library
- "All of Me" (instrumental version)
- Piano covers of love songs
- Keep it subtle (volume ~0.3)

## 🎯 Advanced Customization

### Add More Timeline Chapters

Copy this block in `index.html`:

```html
<div class="timeline-item" data-animate>
    <div class="timeline-image">
        <div class="image-reveal">
            <img data-src="your-image.jpg" alt="Description">
        </div>
    </div>
    <div class="timeline-content">
        <span class="timeline-date">Chapter Four</span>
        <h3 class="timeline-title">Your Title</h3>
        <p class="timeline-text">
            Your memory description...
        </p>
    </div>
</div>
```

**Note:** Alternate between normal and `.reverse` class for left/right layout

### Change Typography

The site uses distinctive Google Fonts. To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts (need 3: display, heading, body)
3. Update in `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-DISPLAY&family=YOUR-HEADING&family=YOUR-BODY&display=swap" rel="stylesheet">
```

4. Update in `styles.css`:

```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-heading: 'Your Heading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

**Current Fonts:**
- Display: Italiana (elegant serif for titles)
- Heading: Cormorant Garamond (classic editorial)
- Body: DM Sans (modern geometric sans)

### Customize Animations

Speed up/slow down animations in `styles.css`:

```css
/* Find these and adjust duration */
.title-word {
    animation: revealWord 1.2s ... /* Change to 0.8s for faster */
}

.timeline-item {
    transition: all 1s ... /* Change to 1.5s for slower */
}
```

### Change Section Order

Reorder `<section>` blocks in `index.html`:

```html
<!-- Move sections around -->
<section id="hero">...</section>
<section id="letter">...</section>  <!-- Swap with timeline -->
<section id="timeline">...</section>
<section id="moments">...</section>
<!-- etc. -->
```

Update navigation links accordingly!

## 📱 Responsive Behavior

The design is fully responsive:

- **Desktop (1024px+)**: Full split-screen layouts, custom cursor
- **Tablet (768-1024px)**: Stacked layouts, simplified grids
- **Mobile (<768px)**: Single column, optimized touch interactions

Test on multiple devices or use Chrome DevTools (F12 → Toggle Device Toolbar)

## 🎁 Creative Delivery Ideas

### 1. **QR Code Gift Card**
- Generate QR code at [qr-code-generator.com](https://www.qr-code-generator.com/)
- Print on a beautiful Valentine's card
- She scans to discover the website

### 2. **Custom Domain**
- Buy domain: `ourstory2025.com` or `sarah-and-yourname.com`
- Use Netlify/Vercel for free hosting with custom domain
- Much more impressive than github.io URL!

### 3. **Email Reveal**
- Send email on Valentine's Day morning
- Subject: "I made something special for you..."
- Include link with sweet message

### 4. **Progressive Reveal**
- Send link to just the hero section first
- Add sections throughout the day
- Final surprise section at midnight

### 5. **Printed Book**
- Take screenshots of each section
- Create a physical photobook at Shutterfly/Snapfish
- Give both digital and physical versions

## 🔧 Troubleshooting

### Loading screen stays forever
- Check JavaScript console (F12) for errors
- Ensure all script is loading properly
- Verify `initLoadingSequence()` is being called
- Clear browser cache and reload

### Heart particles not showing
- Verify Canvas API is supported (all modern browsers)
- Check if `heartParticles` canvas element exists
- Look for JavaScript errors in console
- Try reducing particle count if performance is low

### Typewriter effect not working
- Ensure you're scrolling to the letter section
- Check that `data-text` attribute contains the text
- Verify Intersection Observer is supported
- Test scroll speed (scroll slowly to trigger)

### Card animation choppy
- Reduce particle count in heart system
- Close other browser tabs
- Test on a different device
- Disable hardware acceleration in browser settings

### Images not loading
- Check file paths are correct
- Ensure `data-src` attributes are set
- Open browser console (F12) for errors
- Verify images are publicly accessible

### Animations not working
- Clear browser cache (Ctrl+Shift+Delete)
- Check JavaScript console for errors
- Ensure JavaScript is enabled
- Try different browser (Chrome/Firefox/Safari)

### Custom cursor not showing
- Works on desktop only
- May not work on touchscreen devices
- Check if `cursor: none` is being overridden
- Verify cursor elements exist in HTML

### Mobile layout broken
- Check viewport meta tag is present
- Test in actual mobile device, not just browser resize
- Verify media queries are working
- Check for overflow-x issues

## 🌟 Performance Tips

### Canvas Optimization
The heart particle system uses Canvas API efficiently:
- **RequestAnimationFrame**: Syncs with display refresh rate
- **Particle recycling**: Particles reset instead of creating new ones
- **Conditional rendering**: Pauses when tab is hidden
- **Optimized drawing**: Simple heart shapes, minimal fill operations

### Loading Screen Best Practices
- Preload critical fonts before loading screen
- Keep countdown images minimal
- Card renders with CSS only (no images)
- Loading screen removes itself from DOM after use

### Typewriter Performance
- Uses native JavaScript (no heavy libraries)
- Activates only when visible (Intersection Observer)
- Minimal DOM manipulation
- Sequential loading prevents blocking

### General Optimization
1. **Compress images** using [TinyPNG](https://tinypng.com/)
2. **Lazy loading** already implemented for all images
3. **Debounced resize handlers** prevent performance issues
4. **CSS animations** preferred over JavaScript when possible

### If Performance is Slow
```javascript
// Reduce particles (script.js line 87)
for (let i = 0; i < 30; i++) { // Reduced from 50

// Speed up typewriter (script.js line 157)
const speed = 20; // Faster than default 30

// Simplify card animation (styles.css line 161)
animation: cardFall 1.5s ease-out forwards; // Faster from 2s
```

### Optimize Images
1. Use [TinyPNG](https://tinypng.com/) to compress
2. Recommended formats: WebP > JPG > PNG
3. Max dimensions: 1920px wide for hero, 800px for others
4. Keep file size under 500KB per image

### Lazy Loading
- Already implemented via `data-src`
- Images load as you scroll
- Improves initial page load time

### Hosting Recommendations
- **GitHub Pages**: Free, easy, perfect for static sites
- **Netlify**: Free, custom domains, auto-deploy from Git
- **Vercel**: Free, fast CDN, great performance
- **Cloudflare Pages**: Free, global CDN

## 🎨 Design Credits

**Color Inspiration:**
- Bold dark luxury editorial design
- High-fashion magazine aesthetics
- Film noir lighting

**Animation Philosophy:**
- Smooth, intentional movements
- Staggered reveals for drama
- Physics-based particles
- Scroll-triggered choreography

**Typography:**
- Italiana: Editorial elegance
- Cormorant Garamond: Romantic serif
- DM Sans: Modern clarity

## 💝 Final Touches Checklist

Before sharing:

- [ ] Replace all placeholder images with real photos
- [ ] Customize all text content (names, stories, dates)
- [ ] Update signature with your name
- [ ] Add background music (optional)
- [ ] Test on mobile device
- [ ] Test all animations
- [ ] Check lightbox works
- [ ] Verify navigation links
- [ ] Proofread all text
- [ ] Test surprise section
- [ ] Get someone to review

## 🚀 Launch Day Tips

1. **Test everything** one final time
2. **Send in the morning** so she has all day to enjoy it
3. **Be available** to see her reaction
4. **Add a personal message** with the link
5. **Consider following up** with a physical gift
6. **Save the website** for future anniversaries
7. **Update it yearly** with new memories

---

## 📞 Support

Having issues? Common fixes:

**Black screen:** Clear cache, check JavaScript console
**Animations choppy:** Reduce motion in browser settings
**Images broken:** Verify URLs are publicly accessible
**Music not playing:** User interaction required to start audio

---

**Made with ❤️ and modern web technologies**

This is more than a website — it's a digital love letter that she can revisit forever. Make it personal, make it meaningful, and watch her smile.

**Happy Valentine's Day! 💕**