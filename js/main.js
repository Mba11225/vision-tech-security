/**
 * Vision Tech Security - Main Frontend Logic & Interactions
 * Peshawar, Khyber Pakhtunkhwa, Pakistan
 * WhatsApp: 03199982061
 */

const App = {
  // Utility: Generate HTML for a single product card
  createProductCardHtml(product) {
    const specsPreview = product.resolution ? `<span class="spec-pill">${product.resolution}</span>` : '';
    const typePreview = product.type 
      ? `<span class="spec-pill">${product.type}</span>` 
      : (product.subCategory ? `<span class="spec-pill">${product.subCategory}</span>` : '');

    return `
      <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-brand="${product.brand}" data-resolution="${product.resolution || ''}">
        <div class="product-card-thumb">
          <a href="product-details.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name} - Vision Tech Security Peshawar" loading="lazy" onerror="this.src='images/placeholder-default.svg'">
          </a>
          <div class="product-badge-group">
            <span class="stock-badge">${product.availability || 'Contact for Availability'}</span>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-brand-line">
            <span class="product-brand">${product.brand}</span>
            <span class="product-sku">${product.sku}</span>
          </div>
          <h3 class="product-title">
            <a href="product-details.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-key-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>${product.keyFeature || product.type || product.category}</span>
          </div>
          <div class="product-pill-specs">
            ${specsPreview}
            ${typePreview}
          </div>
          <div class="product-price-row">
            <div class="product-price-box-card">
              <span class="product-price">Request Price</span>
              <span class="product-price-note">Contact for today's rate</span>
            </div>
          </div>
          <div class="product-card-actions">
            <a href="product-details.html?id=${product.id}" class="btn btn-outline btn-sm">View Details</a>
            <a href="${Cart.getPriceRequestWhatsAppUrl(product.id)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Request Price</a>
            <a href="${Cart.getSingleProductWhatsAppUrl(product.id)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm product-wa-btn-full">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.17 8.17 0 0 1-5.82 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.76 2.68 4.26 3.76.59.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z"/></svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // Render a specific category or all products
  renderProductsList(containerId, filterFn = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let items = PRODUCTS_DATA;
    if (filterFn) {
      items = items.filter(filterFn);
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          <h3 style="font-size: 1.3rem; margin-bottom: 10px;">No matching products found</h3>
          <p style="color: var(--text-muted); margin-bottom: 20px;">Contact us on WhatsApp for custom orders or availability in Peshawar.</p>
          <a href="https://wa.me/923199982061" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">Inquire on WhatsApp</a>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(p => this.createProductCardHtml(p)).join("");
  },

  // Filter System for Products & CCTV Cameras pages
  initFilters(categoryFilter = null) {
    const grid = document.getElementById("catalogProductGrid");
    const countEl = document.getElementById("catalogProductCount");
    const searchInput = document.getElementById("filterSearchInput");
    const sortSelect = document.getElementById("catalogSortSelect");
    const resetBtn = document.getElementById("resetFiltersBtn");

    const getSelectedCheckboxes = (name) => {
      const checked = document.querySelectorAll(`input[name="${name}"]:checked`);
      return Array.from(checked).map(c => c.value.toLowerCase());
    };

    const applyFilters = () => {
      const selectedBrands = getSelectedCheckboxes("filterBrand");
      const selectedResolutions = getSelectedCheckboxes("filterResolution");
      const selectedTypes = getSelectedCheckboxes("filterType");
      const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";

      let filtered = PRODUCTS_DATA.filter(p => {
        // Base category filter
        if (categoryFilter && p.category !== categoryFilter) {
          return false;
        }

        // Search text
        if (searchQuery) {
          const matchSearch = p.name.toLowerCase().includes(searchQuery) ||
                              p.brand.toLowerCase().includes(searchQuery) ||
                              (p.model && p.model.toLowerCase().includes(searchQuery)) ||
                              (p.description && p.description.toLowerCase().includes(searchQuery));
          if (!matchSearch) return false;
        }

        // Brand filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand.toLowerCase())) {
          return false;
        }

        // Resolution filter
        if (selectedResolutions.length > 0) {
          if (!p.resolution || !selectedResolutions.includes(p.resolution.toLowerCase())) {
            return false;
          }
        }

        // Camera Type filter
        if (selectedTypes.length > 0) {
          const matchesType = (p.cameraType && p.cameraType.some(t => selectedTypes.includes(t.toLowerCase()))) ||
                              (p.type && selectedTypes.some(st => p.type.toLowerCase().includes(st)));
          if (!matchesType) return false;
        }

        return true;
      });

      // Sorting
      if (sortSelect) {
        const val = sortSelect.value;
        if (val === "name-asc") {
          filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (val === "name-desc") {
          filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else if (val === "brand") {
          filtered.sort((a, b) => a.brand.localeCompare(b.brand));
        }
      }

      if (countEl) {
        countEl.textContent = `Showing ${filtered.length} products`;
      }

      if (grid) {
        if (filtered.length === 0) {
          grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
              <h3 style="font-size: 1.3rem; margin-bottom: 10px;">No products match your selected filters</h3>
              <p style="color: var(--text-muted); margin-bottom: 20px;">Try adjusting your filters or message us on WhatsApp to check availability.</p>
              <button type="button" class="btn btn-outline" onclick="document.getElementById('resetFiltersBtn').click()">Reset Filters</button>
            </div>
          `;
        } else {
          grid.innerHTML = filtered.map(p => this.createProductCardHtml(p)).join("");
        }
      }
    };

    // Attach listeners
    document.querySelectorAll(".filter-sidebar input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", applyFilters);
    });

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", applyFilters);
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        document.querySelectorAll(".filter-sidebar input[type='checkbox']").forEach(cb => {
          cb.checked = false;
        });
        if (searchInput) searchInput.value = "";
        if (sortSelect) sortSelect.selectedIndex = 0;
        applyFilters();
      });
    }

    // Check URL params for initial search or brand filter
    const urlParams = new URLSearchParams(window.location.search);
    const initialSearch = urlParams.get("search");
    const initialBrand = urlParams.get("brand");

    if (initialSearch && searchInput) {
      searchInput.value = initialSearch;
    }
    if (initialBrand) {
      const matchCb = document.querySelector(`input[name="filterBrand"][value="${initialBrand}"]`);
      if (matchCb) matchCb.checked = true;
    }

    applyFilters();
  },

  // Dynamic Product Details Page loader
  initProductDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "cam-hik-01";
    const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

    // Page title and breadcrumbs
    document.title = `${product.name} | Vision Tech Security Peshawar`;
    const breadcrumbCurrent = document.getElementById("detailBreadcrumbCurrent");
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

    // Media
    const mainImg = document.getElementById("detailMainImage");
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = `${product.name} - Vision Tech Security Peshawar`;
    }

    // Details Content
    const brandEl = document.getElementById("detailBrand");
    if (brandEl) brandEl.textContent = `${product.brand} • ${product.type || product.category}`;

    const titleEl = document.getElementById("detailTitle");
    if (titleEl) titleEl.textContent = product.name;

    const skuEl = document.getElementById("detailSku");
    if (skuEl) skuEl.textContent = `SKU: ${product.sku}`;

    const availabilityEl = document.getElementById("detailAvailability");
    if (availabilityEl) availabilityEl.textContent = product.availability || "Contact for Availability";

    const priceEl = document.getElementById("detailPrice");
    if (priceEl) priceEl.textContent = "Request Price";

    const oldPriceEl = document.getElementById("detailOldPrice");
    if (oldPriceEl) oldPriceEl.classList.add("hidden");

    const descEl = document.getElementById("detailDesc");
    if (descEl) descEl.textContent = product.description;

    // Basic Product Info / Highlights list
    const featuresList = document.getElementById("detailFeaturesList");
    if (featuresList) {
      const items = product.basicInfo || [product.keyFeature || product.name];
      featuresList.innerHTML = items.map(f => `
        <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 0.95rem; color: #cbd5e1;">
          <svg style="width: 18px; height: 18px; color: var(--accent-cyan); flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${f}</span>
        </li>
      `).join("");
    }

    // Basic Technical Information Table (Verified Facts Only)
    const specsTable = document.getElementById("detailSpecsTable");
    if (specsTable) {
      const specs = [
        ["Brand", product.brand],
        ["Model", product.model || "Standard Model"],
        ["Product Type", product.type || product.category],
        ["Category", product.category.replace("-", " ").toUpperCase()],
        ["Availability", product.availability || "Contact for Availability"],
        ["Price", "Request Price (Daily Market Confirmation)"]
      ];
      if (product.resolution) {
        specs.push(["Resolution", product.resolution]);
      }
      specsTable.innerHTML = specs.map(([key, val]) => `
        <tr>
          <td>${key}</td>
          <td>${val}</td>
        </tr>
      `).join("");
    }

    // Product Packaging / Contents Note
    const boxList = document.getElementById("detailBoxList");
    if (boxList) {
      boxList.innerHTML = `
        <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #94a3b8; margin-bottom: 6px;">
          <span style="color: var(--accent-cyan);">✔</span>
          <span>1x Genuine ${product.name} (Factory Packaging)</span>
        </li>
        <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #94a3b8; margin-bottom: 6px;">
          <span style="color: var(--accent-cyan);">✔</span>
          <span>Manufacturer standard mounting/connection accessories as supplied</span>
        </li>
        <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: #94a3b8;">
          <span style="color: var(--accent-cyan);">✔</span>
          <span>Professional on-site installation available across Peshawar</span>
        </li>
      `;
    }

    // Buttons actions
    const addCartBtn = document.getElementById("detailAddCartBtn");
    if (addCartBtn) {
      addCartBtn.onclick = () => {
        const qtyInput = document.getElementById("detailQtyInput");
        const qty = qtyInput ? parseInt(qtyInput.value, 10) : 1;
        Cart.addItem(product.id, qty);
      };
    }

    const priceReqBtn = document.getElementById("detailPriceRequestBtn");
    if (priceReqBtn) {
      priceReqBtn.href = Cart.getPriceRequestWhatsAppUrl(product.id);
    }

    const buyNowBtn = document.getElementById("detailBuyNowBtn");
    if (buyNowBtn) {
      buyNowBtn.onclick = () => {
        const qtyInput = document.getElementById("detailQtyInput");
        const qty = qtyInput ? parseInt(qtyInput.value, 10) : 1;
        Cart.addItem(product.id, qty);
        window.location.href = "checkout.html";
      };
    }

    const waBtn = document.getElementById("detailWhatsAppBtn");
    if (waBtn) {
      waBtn.href = Cart.getSingleProductWhatsAppUrl(product.id);
    }

    // Related Products
    const relatedContainer = document.getElementById("relatedProductsGrid");
    if (relatedContainer) {
      const related = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
      if (related.length > 0) {
        relatedContainer.innerHTML = related.map(p => this.createProductCardHtml(p)).join("");
      } else {
        const other = PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 4);
        relatedContainer.innerHTML = other.map(p => this.createProductCardHtml(p)).join("");
      }
    }
  },

  // Cart Page Renderer
  initCartPage() {
    const tableBody = document.getElementById("cartItemsBody");
    const subtotalEl = document.getElementById("cartSubtotal");
    const totalEl = document.getElementById("cartTotal");
    const emptyState = document.getElementById("cartEmptyState");
    const contentWrap = document.getElementById("cartContentWrapper");

    const render = () => {
      const items = Cart.getItems();

      if (items.length === 0) {
        if (contentWrap) contentWrap.classList.add("hidden");
        if (emptyState) emptyState.classList.remove("hidden");
        return;
      }

      if (contentWrap) contentWrap.classList.remove("hidden");
      if (emptyState) emptyState.classList.add("hidden");

      if (tableBody) {
        tableBody.innerHTML = items.map(item => `
          <tr>
            <td>
              <div class="cart-product-info">
                <img src="${item.image}" alt="${item.name}" class="cart-thumb" onerror="this.src='images/placeholder-default.svg'">
                <div>
                  <div class="cart-prod-model">${item.brand} • ${item.model || ''}</div>
                  <div class="cart-prod-name">${item.name}</div>
                  <div style="font-size: 0.8rem; color: var(--text-dim);">SKU: ${item.sku}</div>
                </div>
              </div>
            </td>
            <td><strong>Request Price</strong></td>
            <td>
              <div class="qty-counter">
                <button type="button" class="qty-btn" onclick="Cart.updateQty('${item.id}', ${item.qty - 1})">-</button>
                <span class="qty-number">${item.qty}</span>
                <button type="button" class="qty-btn" onclick="Cart.updateQty('${item.id}', ${item.qty + 1})">+</button>
              </div>
            </td>
            <td><strong style="color: #38bdf8;">Price on Request</strong></td>
            <td>
              <button type="button" class="remove-item-btn" onclick="Cart.removeItem('${item.id}')" title="Remove Item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </td>
          </tr>
        `).join("");
      }

      if (subtotalEl) subtotalEl.textContent = "Price on Request";
      if (totalEl) totalEl.textContent = "Price on Request";
    };

    window.addEventListener("cart-updated", render);
    render();
  },

  // Checkout Page Logic
  initCheckoutPage() {
    const checkoutSummaryBody = document.getElementById("checkoutSummaryBody");
    const checkoutTotalEl = document.getElementById("checkoutTotal");
    const checkoutForm = document.getElementById("checkoutForm");
    const orderModal = document.getElementById("orderSuccessModal");
    const modalWaBtn = document.getElementById("modalWhatsAppRedirectBtn");

    const items = Cart.getItems();
    if (items.length === 0) {
      const checkoutContainer = document.getElementById("checkoutMainContainer");
      if (checkoutContainer) {
        checkoutContainer.innerHTML = `
          <div style="text-align: center; padding: 80px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle); max-width: 600px; margin: 40px auto;">
            <h2 style="font-size: 1.8rem; margin-bottom: 12px;">Your Cart is Empty</h2>
            <p style="color: var(--text-muted); margin-bottom: 24px;">Please add products to your cart before requesting an order.</p>
            <a href="products.html" class="btn btn-primary">Browse CCTV Products</a>
          </div>
        `;
        return;
      }
    }

    // Render Order Items Review
    if (checkoutSummaryBody) {
      checkoutSummaryBody.innerHTML = items.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 0.9rem; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.04);">
          <div>
            <div style="font-weight: 600; color: #ffffff;">${item.name}</div>
            <div style="font-size: 0.78rem; color: var(--text-dim);">${item.brand} (Qty: ${item.qty})</div>
          </div>
          <div style="font-weight: 700; color: var(--accent-cyan);">Price on Request</div>
        </div>
      `).join("");
    }

    if (checkoutTotalEl) checkoutTotalEl.textContent = "Price on Request";

    // Form Submission
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
          fullName: document.getElementById("orderFullName").value.trim(),
          phone: document.getElementById("orderPhone").value.trim(),
          whatsApp: document.getElementById("orderWhatsApp").value.trim(),
          address: document.getElementById("orderAddress").value.trim(),
          city: document.getElementById("orderCity").value.trim(),
          installationRequired: document.getElementById("orderInstallation").checked,
          notes: document.getElementById("orderNotes").value.trim(),
          items: items
        };

        const waUrl = Cart.generateOrderWhatsAppUrl(formData);

        // Open Modal
        if (orderModal) {
          orderModal.classList.add("active");
          if (modalWaBtn) {
            modalWaBtn.href = waUrl;
          }
        }

        // Clear cart
        Cart.clearCart();
      });
    }
  },

  // Installation Page Form & WhatsApp
  initInstallationPage() {
    const form = document.getElementById("installationForm");
    const areaSelect = document.getElementById("installAreaSelect");

    // Populate Peshawar service areas
    if (areaSelect && PESHAWAR_AREAS) {
      PESHAWAR_AREAS.forEach(area => {
        const opt = document.createElement("option");
        opt.value = area;
        opt.textContent = area;
        areaSelect.appendChild(opt);
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = {
          name: document.getElementById("installName").value.trim(),
          phone: document.getElementById("installPhone").value.trim(),
          location: document.getElementById("installAreaSelect").value,
          propertyType: document.getElementById("installPropertyType").value,
          cameraCount: document.getElementById("installCameraCount").value,
          preferredDate: document.getElementById("installDate").value,
          message: document.getElementById("installMessage").value.trim()
        };

        const waUrl = Cart.getInstallationWhatsAppUrl(formData);
        Cart.showToast("Opening WhatsApp with your installation details...");
        window.open(waUrl, "_blank");
      });
    }
  },

  // FAQ Accordion
  initFAQ() {
    document.querySelectorAll(".faq-question-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isActive = item.classList.contains("active");

        // Close all others
        document.querySelectorAll(".faq-item").forEach(other => {
          other.classList.remove("active");
        });

        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  },

  // Package Customizer Modal
  openPackageModal(packageId) {
    const pkg = CCTV_PACKAGES.find(p => p.id === packageId);
    if (!pkg) return;

    let modal = document.getElementById("packageModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "packageModal";
      modal.className = "search-modal-backdrop";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="search-modal-box" style="max-width: 620px;">
        <div class="search-modal-header">
          <span style="font-weight: 800; font-size: 1.15rem; color: #fff;">Customize & Request Quote: ${pkg.name}</span>
          <button type="button" class="close-search-btn" onclick="document.getElementById('packageModal').classList.remove('active')">✕</button>
        </div>
        <div style="padding: 24px; max-height: 75vh; overflow-y: auto;">
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">${pkg.tagline}</p>
          
          <div class="form-group">
            <label class="form-label">Number of Cameras Required:</label>
            <select class="form-control" id="pkgCamCount">
              <option value="2 Cameras">2 Cameras</option>
              <option value="4 Cameras" selected>4 Cameras</option>
              <option value="6 Cameras">6 Cameras</option>
              <option value="8 Cameras">8 Cameras</option>
              <option value="16 Cameras">16 Cameras (Commercial)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Installation Location in Peshawar:</label>
            <input type="text" class="form-control" id="pkgLocation" placeholder="e.g. University Road, Hayatabad, Saddar...">
          </div>

          <div class="form-group">
            <label class="form-label">Special Requirements / Notes:</label>
            <textarea class="form-control" id="pkgCustomNote" placeholder="Any specific requirements (e.g. audio recording, night color, specific brand)?"></textarea>
          </div>

          <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-md); padding: 14px; margin-bottom: 20px; font-size: 0.85rem; color: #cbd5e1;">
            💡 <strong>Direct Rate Guarantee:</strong> We do not invent arbitrary package prices. We calculate genuine hardware rates + cable measurement + installation in Peshawar on WhatsApp.
          </div>

          <button type="button" class="btn btn-whatsapp btn-block" id="sendPkgQuoteBtn">
            Request Quote on WhatsApp (03199982061)
          </button>
        </div>
      </div>
    `;

    modal.classList.add("active");

    const sendBtn = document.getElementById("sendPkgQuoteBtn");
    if (sendBtn) {
      sendBtn.addEventListener("click", () => {
        const cams = document.getElementById("pkgCamCount").value;
        const loc = document.getElementById("pkgLocation").value.trim();
        const note = document.getElementById("pkgCustomNote").value.trim();
        const fullNote = `${loc ? `Location: ${loc}. ` : ""}${note}`;

        const url = Cart.getPackageWhatsAppUrl(pkg.name, cams, fullNote);
        window.open(url, "_blank");
        modal.classList.remove("active");
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
};
