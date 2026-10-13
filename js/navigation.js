/**
 * Vision Tech Security - Shared Navigation, Header, Search & Footer
 */

const Navigation = {
  init(activePage = "") {
    this.renderHeader(activePage);
    this.renderMobileNav();
    this.renderSearchModal();
    this.renderStickyBottomBar();
    this.renderFooter();
    this.bindEvents();
    Cart.updateBadges();
  },

  renderHeader(activePage) {
    const header = document.getElementById("main-header");
    if (!header) return;

    header.innerHTML = `
      <div class="top-announcement-bar">
        <div class="container announcement-inner">
          <div class="announcement-left">
            <span class="pulse-dot"></span>
            <span>Professional CCTV & Security Solutions in Peshawar</span>
          </div>
          <div class="announcement-right">
            <a href="tel:03199982061" class="top-contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>03199982061</span>
            </a>
            <span class="sep">|</span>
            <a href="mailto:Visiontechsecurityoffical@gmail.com" class="top-contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Visiontechsecurityoffical@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <nav class="navbar">
        <div class="container nav-container">
          <!-- Logo -->
          <a href="index.html" class="brand-logo" aria-label="Vision Tech Security Home">
            <div class="logo-icon-wrap" style="background:transparent;border:none;box-shadow:none;padding:0;width:54px;height:54px;border-radius:10px;overflow:hidden;flex-shrink:0;">
              <img src="images/images/website profile picture.jpeg" alt="Vision Tech Security Logo" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.style.display='none'">
            </div>
            <div class="logo-text-group">
              <span class="logo-title">VISION TECH</span>
              <span class="logo-subtitle">SECURITY SOLUTIONS</span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <ul class="nav-menu">
            <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
            <li class="nav-dropdown">
              <a href="products.html" class="nav-link dropdown-toggle ${activePage === 'products' ? 'active' : ''}">
                Products
                <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              <div class="dropdown-menu">
                <a href="products.html" class="dropdown-item">All Products Catalog</a>
                <a href="cctv-cameras.html" class="dropdown-item">CCTV Cameras (Bullet, Dome, PTZ)</a>
                <a href="dvr-nvr.html" class="dropdown-item">DVR & NVR Recording Units</a>
                <a href="hard-drives.html" class="dropdown-item">Surveillance Hard Drives</a>
                <a href="networking.html" class="dropdown-item">Cat6 & Networking Gear</a>
                <a href="accessories.html" class="dropdown-item">Connectors, Power Supplies & Mounts</a>
              </div>
            </li>
            <li><a href="cctv-cameras.html" class="nav-link ${activePage === 'cctv-cameras' ? 'active' : ''}">CCTV Cameras</a></li>
            <li><a href="dvr-nvr.html" class="nav-link ${activePage === 'dvr-nvr' ? 'active' : ''}">DVR/NVR</a></li>
            <li><a href="packages.html" class="nav-link ${activePage === 'packages' ? 'active' : ''}">Packages</a></li>
            <li><a href="special-deals.html" class="nav-link ${activePage === 'special-deals' ? 'active' : ''}" style="color:#ff3c3c;font-weight:700;">🔥 Special Deals</a></li>
            <li><a href="installation.html" class="nav-link ${activePage === 'installation' ? 'active' : ''}">Installation</a></li>
            <li><a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a></li>
            <li><a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
          </ul>

          <!-- Nav Right Action Controls -->
          <div class="nav-actions">
            <!-- Search Trigger -->
            <button type="button" class="action-btn search-trigger-btn" id="openSearchBtn" aria-label="Search Products">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            <!-- Cart Trigger -->
            <a href="cart.html" class="action-btn cart-nav-btn ${activePage === 'cart' ? 'active' : ''}" aria-label="View Shopping Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span class="cart-badge-count hidden">0</span>
            </a>

            <!-- WhatsApp Header CTA -->
            <a href="https://wa.me/923199982061" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp header-wa-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.17 8.17 0 0 1-5.82 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.76 2.68 4.26 3.76.59.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/></svg>
              <span>Order on WhatsApp</span>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button type="button" class="mobile-toggle-btn" id="mobileMenuBtn" aria-label="Open Navigation Menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
          </div>
        </div>
      </nav>
    `;
  },

  renderMobileNav() {
    const existing = document.getElementById("mobileDrawer");
    if (existing) existing.remove();

    const drawer = document.createElement("div");
    drawer.id = "mobileDrawer";
    drawer.className = "mobile-drawer";
    drawer.innerHTML = `
      <div class="mobile-drawer-overlay" id="mobileDrawerOverlay"></div>
      <div class="mobile-drawer-content">
        <div class="mobile-drawer-header">
          <div style="display:flex;align-items:center;gap:12px;">
            <img src="images/images/website profile picture.jpeg" alt="Vision Tech Security" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;">
            <div class="logo-text-group">
              <span class="logo-title">VISION TECH</span>
              <span class="logo-subtitle">PESHAWAR, KPK</span>
            </div>
          </div>
          <button type="button" class="drawer-close-btn" id="closeDrawerBtn" aria-label="Close Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div class="drawer-quick-search">
          <form action="products.html" method="GET" class="drawer-search-form">
            <input type="text" name="search" placeholder="Search CCTV, DVR, NVR..." required>
            <button type="submit" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
          </form>
        </div>

        <ul class="drawer-menu-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">All Products Catalog</a></li>
          <li><a href="cctv-cameras.html">CCTV Cameras (Hikvision, Dahua, EZVIZ)</a></li>
          <li><a href="dvr-nvr.html">DVR & NVR Recorders</a></li>
          <li><a href="hard-drives.html">Surveillance Hard Drives</a></li>
          <li><a href="networking.html">Cat6 Cables & PoE Switches</a></li>
          <li><a href="accessories.html">Accessories & Power Supplies</a></li>
          <li><a href="packages.html">Complete CCTV Packages</a></li>
          <li><a href="special-deals.html" style="color:#ff3c3c;font-weight:700;">🔥 Special Deals &amp; Offers</a></li>
          <li><a href="installation.html">Installation Services (Peshawar)</a></li>
          <li><a href="about.html">About Vision Tech</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="faq.html">FAQs</a></li>
          <li><a href="cart.html">View Shopping Cart</a></li>
        </ul>

        <div class="drawer-footer-info">
          <p class="drawer-phone"><a href="tel:03199982061">📞 03199982061</a></p>
          <p class="drawer-email"><a href="mailto:Visiontechsecurityoffical@gmail.com">✉️ Visiontechsecurityoffical@gmail.com</a></p>
          <a href="https://wa.me/923199982061" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-block">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
  },

  renderSearchModal() {
    const existing = document.getElementById("searchModal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "searchModal";
    modal.className = "search-modal-backdrop";
    modal.innerHTML = `
      <div class="search-modal-box">
        <div class="search-modal-header">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" id="liveSearchInput" placeholder="Search CCTV cameras, Hikvision, EZVIZ, DVR, PoE..." autocomplete="off">
          <button type="button" class="close-search-btn" id="closeSearchModalBtn" aria-label="Close Search">✕</button>
        </div>
        <div class="search-modal-results" id="liveSearchResults">
          <div class="search-hint">Type keywords to search live catalog or press Enter to view all...</div>
        </div>
        <div class="search-modal-footer">
          <span>Quick Tags:</span>
          <button type="button" class="quick-tag" data-tag="Hikvision">Hikvision</button>
          <button type="button" class="quick-tag" data-tag="EZVIZ">EZVIZ</button>
          <button type="button" class="quick-tag" data-tag="Dahua">Dahua</button>
          <button type="button" class="quick-tag" data-tag="ColorVu">Color Night Vision</button>
          <button type="button" class="quick-tag" data-tag="PoE">PoE Switches</button>
          <button type="button" class="quick-tag" data-tag="DVR">DVR/NVR</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  renderStickyBottomBar() {
    const existing = document.getElementById("mobileStickyBar");
    if (existing) existing.remove();

    const bar = document.createElement("div");
    bar.id = "mobileStickyBar";
    bar.className = "mobile-sticky-bar";
    bar.innerHTML = `
      <a href="https://wa.me/923199982061" target="_blank" rel="noopener noreferrer" class="sticky-bar-item whatsapp-item" aria-label="WhatsApp Us">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.17 8.17 0 0 1-5.82 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.76 2.68 4.26 3.76.59.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/></svg>
        <span>WhatsApp</span>
      </a>
      <a href="tel:03199982061" class="sticky-bar-item call-item" aria-label="Call Now">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span>Call</span>
      </a>
      <a href="cart.html" class="sticky-bar-item cart-item" aria-label="Cart">
        <div class="sticky-cart-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span class="cart-badge-count hidden">0</span>
        </div>
        <span>Cart</span>
      </a>
      <a href="installation.html" class="sticky-bar-item booking-item" aria-label="Book Installation">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        <span>Install</span>
      </a>
    `;
    document.body.appendChild(bar);

    // Add floating WhatsApp button for mobile
    const existingWaBtn = document.getElementById("whatsappFloatBtn");
    if (existingWaBtn) existingWaBtn.remove();

    const waBtn = document.createElement("a");
    waBtn.id = "whatsappFloatBtn";
    waBtn.href = "https://wa.me/923199982061?text=Hi%20Vision%20Tech%20Security%2C%20I%20have%20a%20query.";
    waBtn.target = "_blank";
    waBtn.rel = "noopener noreferrer";
    waBtn.className = "whatsapp-float-btn";
    waBtn.setAttribute("aria-label", "Chat on WhatsApp");
    waBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.17 8.17 0 0 1-5.82 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.76 2.68 4.26 3.76.59.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/></svg>`;
    document.body.appendChild(waBtn);
  },

  renderFooter() {
    const footer = document.getElementById("main-footer");
    if (!footer) return;

    footer.innerHTML = `
      <div class="footer-top-accent"></div>
      <div class="container footer-container">
        <div class="footer-grid">
          <!-- Col 1: About & Info -->
          <div class="footer-col brand-col">
            <div class="brand-logo footer-logo">
              <div class="logo-icon-wrap">
                <svg class="logo-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <circle cx="12" cy="11" r="3" stroke-width="2"></circle>
                </svg>
              </div>
              <div class="logo-text-group">
                <span class="logo-title">VISION TECH</span>
                <span class="logo-subtitle">SECURITY SOLUTIONS</span>
              </div>
            </div>
            <p class="footer-desc">
              Professional CCTV & Security Solutions in Peshawar. We supply genuine CCTV equipment, DVR/NVR recorders, surveillance hard drives, and provide reliable turnkey installation across Peshawar, Khyber Pakhtunkhwa.
            </p>
            <div class="footer-social-links">
              <a href="https://www.facebook.com/share/1CREuJxSsD/" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/visiontechsecurityoffical/" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://wa.me/923199982061" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.17 8.17 0 0 1-5.82 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.76 2.68 4.26 3.76.59.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/></svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Navigation & Services -->
          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">All Products</a></li>
              <li><a href="packages.html">CCTV Packages</a></li>
              <li><a href="installation.html">CCTV Installation</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="faq.html">FAQ</a></li>
            </ul>
          </div>

          <!-- Col 3: Product Categories -->
          <div class="footer-col">
            <h4 class="footer-heading">Product Categories</h4>
            <ul class="footer-links">
              <li><a href="cctv-cameras.html">CCTV Cameras</a></li>
              <li><a href="dvr-nvr.html">DVR & NVR Units</a></li>
              <li><a href="hard-drives.html">Surveillance Hard Drives</a></li>
              <li><a href="networking.html">Cat6 & PoE Networking</a></li>
              <li><a href="accessories.html">Connectors & Power Supplies</a></li>
              <li><a href="cart.html">Shopping Cart</a></li>
            </ul>
          </div>

          <!-- Col 4: Brands & Direct Contact -->
          <div class="footer-col">
            <h4 class="footer-heading">Contact & Service Area</h4>
            <div class="footer-contact-info">
              <p><strong>Service Area:</strong> Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
              <p><strong>Phone / WhatsApp:</strong> <a href="tel:03199982061">03199982061</a></p>
              <p><strong>Email:</strong> <a href="mailto:Visiontechsecurityoffical@gmail.com">Visiontechsecurityoffical@gmail.com</a></p>
              <p><strong>Support Hours:</strong> Mon - Sat (9:00 AM - 9:00 PM)</p>
            </div>

            <div class="footer-brands-pills">
              <span class="brand-pill">Hikvision</span>
              <span class="brand-pill">EZVIZ</span>
              <span class="brand-pill">Imou</span>
              <span class="brand-pill">Dahua</span>
              <span class="brand-pill">V380</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-inner">
            <p>&copy; ${new Date().getFullYear()} Vision Tech Security. All Rights Reserved. Peshawar, KPK, Pakistan.</p>
            <div class="footer-legal-links">
              <a href="privacy-policy.html">Privacy Policy</a>
              <span class="dot">•</span>
              <a href="terms.html">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  bindEvents() {
    // Mobile Drawer Toggle
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const drawer = document.getElementById("mobileDrawer");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const overlay = document.getElementById("mobileDrawerOverlay");

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener("click", () => {
        drawer.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    }

    const closeDrawer = () => {
      if (drawer) {
        drawer.classList.remove("open");
        document.body.style.overflow = "";
      }
    };

    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (overlay) overlay.addEventListener("click", closeDrawer);

    // Search Modal
    const searchModal = document.getElementById("searchModal");
    const openSearchBtn = document.getElementById("openSearchBtn");
    const closeSearchModalBtn = document.getElementById("closeSearchModalBtn");
    const liveSearchInput = document.getElementById("liveSearchInput");
    const liveSearchResults = document.getElementById("liveSearchResults");

    const openSearch = () => {
      if (searchModal) {
        searchModal.classList.add("active");
        if (liveSearchInput) {
          liveSearchInput.focus();
        }
      }
    };

    const closeSearch = () => {
      if (searchModal) {
        searchModal.classList.remove("active");
      }
    };

    if (openSearchBtn) openSearchBtn.addEventListener("click", openSearch);
    if (closeSearchModalBtn) closeSearchModalBtn.addEventListener("click", closeSearch);

    if (searchModal) {
      searchModal.addEventListener("click", (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }

    // Keyboard ESC to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeSearch();
        closeDrawer();
      }
    });

    // Live search input handling
    if (liveSearchInput && liveSearchResults) {
      liveSearchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 2) {
          liveSearchResults.innerHTML = `<div class="search-hint">Type keywords to search live catalog or press Enter...</div>`;
          return;
        }

        const matches = PRODUCTS_DATA.filter(p => {
          return p.name.toLowerCase().includes(query) ||
                 p.brand.toLowerCase().includes(query) ||
                 p.model.toLowerCase().includes(query) ||
                 p.category.toLowerCase().includes(query) ||
                 (p.resolution && p.resolution.toLowerCase().includes(query)) ||
                 (p.cameraType && p.cameraType.some(t => t.toLowerCase().includes(query)));
        });

        if (matches.length === 0) {
          liveSearchResults.innerHTML = `
            <div class="search-no-results">
              <p>No products found matching "<strong>${query}</strong>".</p>
              <a href="https://wa.me/923199982061?text=${encodeURIComponent('Hi Vision Tech Security, I am looking for: ' + query)}" class="btn btn-sm btn-whatsapp">Inquire on WhatsApp</a>
            </div>
          `;
          return;
        }

        liveSearchResults.innerHTML = `
          <div class="search-results-list">
            ${matches.slice(0, 6).map(p => `
              <a href="product-details.html?id=${p.id}" class="search-result-item">
                <img src="${p.image}" alt="${p.name}" class="search-item-thumb" onerror="this.src='images/placeholder-camera.svg'">
                <div class="search-item-info">
                  <div class="search-item-brand">${p.brand} • ${p.model}</div>
                  <div class="search-item-name">${p.name}</div>
                  <div class="search-item-price">${Cart.formatPKR(p.price)}</div>
                </div>
              </a>
            `).join("")}
          </div>
          <div class="search-view-all">
            <a href="products.html?search=${encodeURIComponent(query)}" class="search-view-all-link">View all matching products &rarr;</a>
          </div>
        `;
      });

      liveSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const query = liveSearchInput.value.trim();
          if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
          }
        }
      });
    }

    // Quick tag clicks in search modal
    document.querySelectorAll(".quick-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const query = tag.getAttribute("data-tag");
        if (liveSearchInput) {
          liveSearchInput.value = query;
          liveSearchInput.dispatchEvent(new Event("input"));
        }
      });
    });
  }
};
