/**
 * SUNITHA ENTERPRISES // Architectural Fenestration
 * Quiet Luxury Script Logic
 */

// ============================================================================
// 1. DATA: 3-PERSPECTIVE TRIADS FOR EACH WINDOW SYSTEM
// ============================================================================
const WINDOW_DATA = {
  sliding: {
    title: 'Sliding Window Systems',
    desc: 'Engineered for panoramic glass apertures. Sashes glide effortlessly on concealed tandem bogie carriers along heavy-duty tracks.',
    render: '/images/product-sliding-windows.png',
    profile: '/images/profile-sliding.png',
    installed: '/images/installed-sliding-windows.png',
    specs: [
      { label: 'Profile Depth', val: '60 mm & 70 mm' },
      { label: 'Wall Thickness', val: '2.3 mm (Class A)' },
      { label: 'Acoustic Rating', val: '38 dB' },
      { label: 'Tracks', val: '2, 2.5 & 3 Track' }
    ]
  },

  casement: {
    title: 'Casement Window Systems',
    desc: 'Hinged at the side to compress firmly against continuous vulcanized EPDM seals, delivering maximum ventilation and acoustic cutoff.',
    render: '/images/product-casement-windows.png',
    profile: '/images/profile-casement.png',
    installed: '/images/installed-casement-windows.png',
    specs: [
      { label: 'Profile Depth', val: '54 mm & 70 mm' },
      { label: 'Acoustic Rating', val: '45 dB (Class 4)' },
      { label: 'Glazing', val: 'Up to 39 mm Triple' },
      { label: 'Weather Tightness', val: 'Class 9A (600 Pa)' }
    ]
  },

  villa: {
    title: 'Villa Window Systems',
    desc: 'An integrated 3-in-1 architectural assembly uniting an insulated glass sash, marine-grade SS 304 mosquito wire mesh, and an internal steel security grill.',
    render: '/images/product-villa-windows.png',
    profile: '/images/profile-villa.png',
    installed: '/images/villa-windows.jpg',
    specs: [
      { label: 'Protection Layers', val: 'Glass + Mesh + Grill' },
      { label: 'Wire Mesh', val: 'SS 304 High-Tensile' },
      { label: 'Security Core', val: 'Solid Galvanized Steel' },
      { label: 'Warranty', val: '10 Years' }
    ]
  },

  'tilt-turn': {
    title: 'Tilt & Turn Window Systems',
    desc: 'German dual-axis fenestration. A single ergonomic handle tilts the sash 15° inward for rain-safe ventilation, or opens 90° for safe indoor cleaning.',
    render: '/images/product-tilt-turn-windows.png',
    profile: '/images/profile-ideal-4000.png',
    installed: '/images/tilt-turn-windows.jpg',
    specs: [
      { label: 'Dual Axis', val: 'Tilt 15° / Turn 90°' },
      { label: 'Chambers', val: '5-Chamber German Core' },
      { label: 'Burglar Rating', val: 'EN 1627 RC2' },
      { label: 'Sound Rating', val: '45 dB Reduction' }
    ]
  },

  arch: {
    title: 'Arch & Curved Window Systems',
    desc: 'Automated thermal profile curving forms smooth, continuous semi-circular and Gothic arches while preserving internal chamber insulation.',
    render: '/images/product-arch-windows.png',
    profile: '/images/profile-ideal-2000.png',
    installed: '/images/installed-arch-windows.png',
    specs: [
      { label: 'Curvature', val: 'Down to R = 350 mm' },
      { label: 'Internal Core', val: 'Bent Galvanized Box' },
      { label: 'Corner Joints', val: 'Hermetic Thermal Welds' },
      { label: 'Aesthetics', val: 'Vintage & Heritage' }
    ]
  },

  combination: {
    title: 'Combination Window Facades',
    desc: 'Modular architectural facades uniting wide panoramic fixed picture panes, operable sliding doors, and casements coupled with heavy structural steel mullions.',
    render: '/images/product-combination-windows.png',
    profile: '/images/profile-vario-slide.png',
    installed: '/images/installed-combination-windows.png',
    specs: [
      { label: 'Assembly', val: 'Fixed + Sliding + Casement' },
      { label: 'Coupling', val: 'Heavy Steel Box Mullion' },
      { label: 'Wind Resistance', val: '&gt; 3000 Pa Deflection' },
      { label: 'Elevation', val: 'Floor-to-Ceiling Glass' }
    ]
  }
};

// ============================================================================
// 2. MATERIALS & FINISHES DATA (11 Physical Samples)
// ============================================================================
const FINISHES = [
  { id: 'aludec-traffic-white', name: 'Aludec Traffic White', category: 'ALUDEC METALLIC', hex: '#e8e9eb', thumb: '/images/textures/texture-aludec-traffic-white.jpg' },
  { id: 'aludec-window-grey', name: 'Aludec Window Grey', category: 'ALUDEC METALLIC', hex: '#8c8e90', thumb: '/images/textures/texture-aludec-window-grey.jpg' },
  { id: 'aludec-umbra-grey', name: 'Aludec Umbra Grey', category: 'ALUDEC METALLIC', hex: '#463f3a', thumb: '/images/textures/texture-aludec-umbra-grey.jpg' },
  { id: 'aludec-basalt-grey', name: 'Aludec Basalt Grey', category: 'ALUDEC METALLIC', hex: '#3a3f41', thumb: '/images/textures/texture-aludec-basalt-grey.jpg' },
  { id: 'aludec-jet-black', name: 'Aludec Jet Black', category: 'ALUDEC METALLIC', hex: '#0e0f11', thumb: '/images/textures/texture-aludec-jet-black.jpg' },
  { id: 'aludec-db703', name: 'Aludec DB703 Mica', category: 'ALUDEC METALLIC', hex: '#434749', thumb: '/images/textures/texture-aludec-db703.jpg' },
  { id: 'aludec-anthracite-grey', name: 'Aludec Anthracite Grey', category: 'ALUDEC METALLIC', hex: '#2b2d30', thumb: '/images/textures/texture-aludec-anthracite-grey.jpg' },
  { id: 'woodec-sheffield-oak-alpine', name: 'Sheffield Oak Alpine', category: 'WOODEC TIMBER', hex: '#cfc6b8', thumb: '/images/textures/texture-woodec-sheffield-oak-alpine.jpg' },
  { id: 'woodec-sheffield-oak-concrete', name: 'Sheffield Oak Concrete', category: 'WOODEC TIMBER', hex: '#9e978e', thumb: '/images/textures/texture-woodec-sheffield-oak-concrete.jpg' },
  { id: 'woodec-turner-oak-toffee', name: 'Turner Oak Toffee', category: 'WOODEC TIMBER', hex: '#94663e', thumb: '/images/textures/texture-woodec-turner-oak-toffee.jpg' },
  { id: 'woodec-turner-oak-malt', name: 'Turner Oak Malt', category: 'WOODEC TIMBER', hex: '#7a502e', thumb: '/images/textures/texture-woodec-turner-oak-malt.jpg' }
];

// ============================================================================
// 3. EDITORIAL PHOTOGRAPHY PORTFOLIO
// ============================================================================
const PORTFOLIO = [
  { img: '/images/installed-sliding-windows.png', caption: 'Modern Sliding Balcony Suite' },
  { img: '/images/villa-windows.jpg', caption: 'Villa Residence with Mosquito Mesh' },
  { img: '/images/installed-casement-windows.png', caption: 'Acoustic Casement Glazing' },
  { img: '/images/installed-arch-windows.png', caption: 'Classical Curved Arch Elevation' },
  { img: '/images/installed-combination-windows.png', caption: 'Panoramic Living Room Facade' },
  { img: '/images/tilt-turn-windows.jpg', caption: 'High-Rise Bedroom Tilt & Turn' },
  { img: '/images/sliding-windows.png', caption: 'Anthracite Sliding Terrace Window' },
  { img: '/images/arch-windows.png', caption: 'Twin Heritage Arched Openings' },
  { img: '/images/upvc-hero-luxury.png', caption: 'Luxury Villa Contemporary Elevation' }
];

// ============================================================================
// 4. WINDOW SHOWCASE RENDERER
// ============================================================================
function renderShowcase(key) {
  const data = WINDOW_DATA[key];
  if (!data) return;

  const display = document.getElementById('showcase-display');
  const strip = document.getElementById('window-editorial-strip');

  if (display) {
    display.innerHTML = `
      <!-- Main Studio Render -->
      <div class="main-perspective-card" onclick="window.openLightbox('${data.render}')">
        <span class="perspective-tag">Studio Design Render</span>
        <img src="${data.render}" alt="${data.title}" />
      </div>

      <!-- Side Duo: Profile & Installed Project -->
      <div class="side-perspectives-stack">
        <div class="side-perspective-card" onclick="window.openLightbox('${data.profile}')">
          <span class="perspective-tag">CAD Profile Cross-Section</span>
          <img src="${data.profile}" alt="${data.title} CAD Profile" />
        </div>
        <div class="side-perspective-card" onclick="window.openLightbox('${data.installed}')">
          <span class="perspective-tag">Real Villa Installation</span>
          <img src="${data.installed}" alt="${data.title} Installation" />
        </div>
      </div>
    `;
  }

  if (strip) {
    strip.innerHTML = `
      <div>
        <h3 class="editorial-name">${data.title}</h3>
        <p class="editorial-sub">${data.desc}</p>
      </div>

      <div class="editorial-specs-list">
        ${data.specs.map(s => `
          <div class="spec-cell">
            <span class="spec-cell-label">${s.label}</span>
            <span class="spec-cell-val">${s.val}</span>
          </div>
        `).join('')}
      </div>

      <div>
        <a href="https://wa.me/919848012345?text=Hello%20Sunitha%20Enterprises,%20I%20am%20interested%20in%20${encodeURIComponent(data.title)}.%20Please%20share%20details." class="btn-minimal" target="_blank" rel="noopener">
          <span>Inquire &rarr;</span>
        </a>
      </div>
    `;
  }
}

window.selectWindow = function(key) {
  const tabs = document.querySelectorAll('.tab-link');
  tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === key));
  renderShowcase(key);

  const sec = document.getElementById('collection');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
};

function setupTabs() {
  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderShowcase(btn.dataset.cat);
    });
  });

  renderShowcase('sliding');
}

// ============================================================================
// 5. MATERIALS PALETTE
// ============================================================================
function setupMaterials() {
  const palette = document.getElementById('materials-palette');
  if (!palette) return;

  palette.innerHTML = '';
  FINISHES.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = `material-swatch-card ${i === 6 ? 'active' : ''}`;
    card.innerHTML = `
      <div class="swatch-photo" style="background-image: url('${f.thumb}');"></div>
      <div class="swatch-name">${f.name}</div>
      <div class="swatch-family">${f.category.replace(' SERIES', '')}</div>
    `;

    card.addEventListener('click', () => {
      document.querySelectorAll('.material-swatch-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const title = document.getElementById('simulated-caption-title');
      const tag = document.getElementById('simulated-caption-tag');
      const layer = document.getElementById('simulated-color-layer');

      if (title) title.textContent = f.name;
      if (tag) tag.textContent = f.category;
      if (layer) layer.style.backgroundColor = f.hex;
    });

    palette.appendChild(card);
  });
}

// ============================================================================
// 6. PORTFOLIO GRID & LIGHTBOX
// ============================================================================
function setupPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  grid.innerHTML = '';
  PORTFOLIO.forEach(item => {
    const card = document.createElement('div');
    card.className = 'portfolio-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.caption}" loading="lazy" />
      <div class="portfolio-overlay">
        <span class="portfolio-caption">${item.caption}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      window.openLightbox(item.img);
    });

    grid.appendChild(card);
  });
}

window.openLightbox = function(src) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (img) img.src = src;
  if (modal) modal.classList.add('active');
};

function setupLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('btn-close-lightbox');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
    });
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// ============================================================================
// 7. 360° ARCHITECTURAL STUDIO CANVAS
// ============================================================================
const TOTAL_FRAMES = 300;
const FRAME_PATH = (i) => `/projectimages/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

const studioState = {
  images: new Array(TOTAL_FRAMES + 1),
  loaded: 0,
  current: 1.0,
  target: 1.0,
  isPlaying: false,
  lastTime: performance.now(),
  isDragging: false,
  dragStartX: 0,
  dragStartFrame: 1
};

const canvas = document.getElementById('stage-canvas');
const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;
const preloader = document.getElementById('preloader-overlay');
const hotspots = document.getElementById('hotspots-layer');

function preloadStudioFrames() {
  if (!canvas) return;
  const BATCH = 15;
  let next = 1;

  function loadBatch() {
    let batchDone = 0;
    const limit = Math.min(TOTAL_FRAMES, next + BATCH - 1);

    for (let i = next; i <= limit; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        studioState.loaded++;
        batchDone++;

        if (studioState.loaded === 1) renderStudio(1);
        if (studioState.loaded >= 25 && preloader) {
          preloader.classList.add('hidden');
        }

        if (batchDone === (limit - next + 1) && limit < TOTAL_FRAMES) {
          next = limit + 1;
          setTimeout(loadBatch, 20);
        }
      };
      img.onerror = () => studioState.loaded++;
      studioState.images[i] = img;
    }
  }

  loadBatch();
}

function renderStudio(idx) {
  if (!ctx) return;
  const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(idx)));
  const img = studioState.images[frame];
  if (!img || !img.complete || img.naturalWidth === 0) return;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const fill = document.getElementById('dock-slider-fill');
  const input = document.getElementById('frame-scrubber');
  const readout = document.getElementById('dock-frame-readout');

  const pct = ((frame - 1) / (TOTAL_FRAMES - 1)) * 100;
  if (fill) fill.style.width = `${pct}%`;
  if (input && document.activeElement !== input) input.value = frame;
  if (readout) readout.textContent = `${String(frame).padStart(3, '0')} / 300`;

  // Scrolly steps
  const steps = [
    { start: 1, end: 45, idx: 0 },
    { start: 46, end: 104, idx: 1 },
    { start: 105, end: 224, idx: 2 },
    { start: 225, end: 300, idx: 3 }
  ];
  const cur = steps.find(s => frame >= s.start && frame <= s.end) || steps[0];
  document.querySelectorAll('.story-step').forEach((st, i) => {
    st.classList.toggle('active', i === cur.idx);
  });

  if (hotspots) {
    hotspots.style.display = (frame >= 46 && frame <= 224) ? 'block' : 'none';
  }
}

function setupStudioControls() {
  const scrubber = document.getElementById('frame-scrubber');
  if (scrubber) {
    scrubber.addEventListener('input', (e) => {
      studioState.isPlaying = false;
      const val = parseInt(e.target.value, 10);
      studioState.target = val;
      studioState.current = val;
      renderStudio(val);
    });
  }

  const playBtn = document.getElementById('dock-btn-play');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      studioState.isPlaying = !studioState.isPlaying;
      const p = playBtn.querySelector('.icon-play');
      const pa = playBtn.querySelector('.icon-pause');
      if (p && pa) {
        p.style.display = studioState.isPlaying ? 'none' : 'block';
        pa.style.display = studioState.isPlaying ? 'block' : 'none';
      }
    });
  }

  // Mouse & Touch Drag
  if (canvas) {
    canvas.addEventListener('mousedown', (e) => {
      studioState.isDragging = true;
      studioState.dragStartX = e.clientX;
      studioState.dragStartFrame = studioState.current;
      studioState.isPlaying = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!studioState.isDragging) return;
      const dx = e.clientX - studioState.dragStartX;
      let nf = (studioState.dragStartFrame + dx * 0.45) % TOTAL_FRAMES;
      if (nf < 1) nf += TOTAL_FRAMES;
      studioState.target = nf;
      studioState.current = nf;
      renderStudio(nf);
    });

    window.addEventListener('mouseup', () => {
      studioState.isDragging = false;
    });

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        studioState.isDragging = true;
        studioState.dragStartX = e.touches[0].clientX;
        studioState.dragStartFrame = studioState.current;
        studioState.isPlaying = false;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!studioState.isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - studioState.dragStartX;
      let nf = (studioState.dragStartFrame + dx * 0.45) % TOTAL_FRAMES;
      if (nf < 1) nf += TOTAL_FRAMES;
      studioState.target = nf;
      studioState.current = nf;
      renderStudio(nf);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      studioState.isDragging = false;
    });
  }

  // Scroll drives 3D
  window.addEventListener('scroll', () => {
    const section = document.getElementById('studio-3d');
    if (!section || studioState.isDragging || studioState.isPlaying) return;
    const r = section.getBoundingClientRect();
    const dist = section.offsetHeight - window.innerHeight;
    const cur = -r.top;
    if (cur >= 0 && cur <= dist) {
      studioState.target = 1 + (cur / dist) * (TOTAL_FRAMES - 1);
    }
  }, { passive: true });

  // Animation Loop
  function loop(now) {
    const dt = (now - studioState.lastTime) / 1000;
    studioState.lastTime = now;

    if (studioState.isPlaying) {
      studioState.target += 28 * dt;
      if (studioState.target > TOTAL_FRAMES) studioState.target = 1;
    }

    const diff = studioState.target - studioState.current;
    if (Math.abs(diff) > 0.01) {
      studioState.current += diff * 0.22;
      renderStudio(studioState.current);
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// Theme Toggle
function setupTheme() {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
}

// Mobile Drawer Navigation
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('drawer-close-btn');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
}

// ============================================================================
// 8. MASTER INIT
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupMaterials();
  setupPortfolio();
  setupLightbox();
  preloadStudioFrames();
  setupStudioControls();
  setupTheme();
  setupMobileMenu();
});

