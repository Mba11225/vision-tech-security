/**
 * Vision Tech Security - Cart & WhatsApp Order Management
 * LocalStorage synchronized cart system
 * WhatsApp / Phone: 03199982061
 */

const CART_STORAGE_KEY = "vts_cart_items";
const WHATSAPP_NUMBER = "923199982061"; // 03199982061 in international format

const Cart = {
  getItems() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading cart from localStorage", e);
      return [];
    }
  },

  saveItems(items) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      this.updateBadges();
      window.dispatchEvent(new CustomEvent("cart-updated", { detail: items }));
    } catch (e) {
      console.error("Error saving cart to localStorage", e);
    }
  },

  addItem(productId, qty = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) {
      alert("Product not found");
      return false;
    }

    const items = this.getItems();
    const existingIndex = items.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      items[existingIndex].qty += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        model: product.model,
        category: product.category,
        type: product.type || product.category,
        priceDisplay: product.priceDisplay || "Request Price",
        image: product.image,
        sku: product.sku,
        qty: qty
      });
    }

    this.saveItems(items);
    this.showToast(`"${product.name}" added to cart!`);
    return true;
  },

  updateQty(productId, newQty) {
    const items = this.getItems();
    const index = items.findIndex(item => item.id === productId);
    if (index > -1) {
      if (newQty <= 0) {
        items.splice(index, 1);
      } else {
        items[index].qty = parseInt(newQty, 10);
      }
      this.saveItems(items);
    }
  },

  removeItem(productId) {
    let items = this.getItems();
    items = items.filter(item => item.id !== productId);
    this.saveItems(items);
    this.showToast("Item removed from cart");
  },

  clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    this.updateBadges();
    window.dispatchEvent(new CustomEvent("cart-updated", { detail: [] }));
  },

  getCount() {
    const items = this.getItems();
    return items.reduce((total, item) => total + item.qty, 0);
  },

  getSubtotalDisplay() {
    return "Request Price";
  },

  updateBadges() {
    const count = this.getCount();
    const badges = document.querySelectorAll(".cart-badge-count");
    badges.forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove("hidden");
      } else {
        badge.classList.add("hidden");
      }
    });
  },

  showToast(message) {
    let toast = document.getElementById("vts-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "vts-toast";
      toast.className = "vts-toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <div class="toast-content">
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
      </div>
    `;
    toast.classList.add("active");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove("active");
    }, 3200);
  },

  formatPrice(val) {
    if (!val || val === "Request Price") return "Request Price";
    if (typeof val === "number") return "PKR " + Number(val).toLocaleString("en-PK");
    return val;
  },

  formatPKR(num) {
    if (!num || num === 0 || isNaN(num) || num === "Request Price") return "Request Price";
    return "PKR " + Number(num).toLocaleString("en-PK");
  },

  // Generates direct WhatsApp URL to request price for a specific product
  getPriceRequestWhatsAppUrl(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return `https://wa.me/${WHATSAPP_NUMBER}`;

    const text = 
`Assalam-o-Alaikum Vision Tech Security Peshawar,

I would like to request the price & availability for:
*Product:* ${product.name}
*Brand / Model:* ${product.brand} (${product.model})
*Category:* ${product.type || product.category}
*SKU:* ${product.sku}

Please share your latest rate and availability in Peshawar.
Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  },

  // Generates direct WhatsApp URL to order or inquire about a specific product
  getSingleProductWhatsAppUrl(productId, customNote = "") {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return `https://wa.me/${WHATSAPP_NUMBER}`;

    const text = 
`Assalam-o-Alaikum Vision Tech Security Peshawar,

I want to inquire / place an order for:
*Product:* ${product.name}
*Brand / Model:* ${product.brand} (${product.model})
*Category:* ${product.type || product.category}
*SKU:* ${product.sku}
${customNote ? `*Note:* ${customNote}\n` : ""}
Please confirm stock availability and current pricing.
Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  },

  // Generates checkout order WhatsApp message
  generateOrderWhatsAppUrl(orderData) {
    const itemsList = orderData.items.map((item, idx) => 
      `${idx + 1}. *${item.name}* (${item.brand}) - Qty: ${item.qty} [Price: Request Price]`
    ).join("\n");

    const text = 
`Assalam-o-Alaikum Vision Tech Security Peshawar,

*NEW ORDER / INQUIRY REQUEST*
----------------------------------------
*Customer Name:* ${orderData.fullName}
*Phone / Contact:* ${orderData.phone}
*WhatsApp:* ${orderData.whatsApp || orderData.phone}
*Address:* ${orderData.address}
*City / Area:* ${orderData.city} (Peshawar)
*Installation Required:* ${orderData.installationRequired ? "YES (Needs Professional Installation)" : "NO (Equipment Only)"}

*REQUESTED ITEMS:*
${itemsList}

*Estimated Total:* Price on Request (To be confirmed by Vision Tech Security)
${orderData.notes ? `\n*Additional Notes:* ${orderData.notes}` : ""}
----------------------------------------
Please confirm equipment availability and share invoice/quotation details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  },

  // Generates package inquiry WhatsApp URL
  getPackageWhatsAppUrl(packageName, camerasCount, customNotes = "") {
    const text = 
`Assalam-o-Alaikum Vision Tech Security Peshawar,

I am interested in your *${packageName}* (${camerasCount}).

*Location:* Peshawar, KPK
${customNotes ? `*Custom Requirements:* ${customNotes}\n` : ""}
Please share the price quotation, cable estimate, and installation schedule.
Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  },

  // Generates installation request WhatsApp URL
  getInstallationWhatsAppUrl(formData) {
    const text = 
`Assalam-o-Alaikum Vision Tech Security Peshawar,

*CCTV INSTALLATION SERVICE REQUEST*
----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Location / Area in Peshawar:* ${formData.location}
*Property Type:* ${formData.propertyType}
*Number of Cameras:* ${formData.cameraCount}
*Preferred Date:* ${formData.preferredDate || "Earliest Available"}
${formData.message ? `*Notes / Requirements:* ${formData.message}` : ""}
----------------------------------------
Please provide a site survey / installation quotation.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Cart.updateBadges();
});
