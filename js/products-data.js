/**
 * Vision Tech Security - Products & Packages Data Store
 * Location: Peshawar, Khyber Pakhtunkhwa, Pakistan
 * WhatsApp / Phone: 03199982061
 * Note: Product prices and current stock availability are confirmed on WhatsApp.
 */

const PRODUCTS_DATA = [
  // --- CCTV CAMERAS ---
  {
    id: "cam-imou-01",
    name: "Imou Ranger 2 2MP Smart Indoor Wi-Fi Camera",
    brand: "Imou",
    model: "IPC-A22EP-L",
    category: "cctv-cameras",
    type: "Smart Indoor Wi-Fi Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-IMOU-RNG2",
    resolution: "2MP",
    cameraType: ["PTZ", "Indoor", "Wi-Fi", "IP Camera"],
    keyFeature: "Indoor Wi-Fi Smart Coverage",
    basicInfo: [
      "Imou Indoor Pan & Tilt Camera",
      "2MP 1080p Resolution",
      "Wi-Fi Wireless Connectivity",
      "Mobile App Remote Monitoring"
    ],
    description: "Imou Ranger 2 indoor smart Wi-Fi camera designed for compact residential and shop surveillance.",
    image: "images/imou ranger/imou-ranger-2.jpg"
  },
  {
    id: "cam-imou-02",
    name: "Imou Cruiser SC 5MP Outdoor Wi-Fi PTZ Camera",
    brand: "Imou",
    model: "IPC-S6DP-5M0WEB",
    category: "cctv-cameras",
    type: "Outdoor Wi-Fi PTZ Bullet Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-IMOU-CSC5",
    resolution: "5MP",
    cameraType: ["PTZ", "Bullet", "Outdoor", "Wi-Fi", "IP Camera"],
    keyFeature: "5MP Outdoor Smart PTZ Wi-Fi",
    basicInfo: [
      "Imou Cruiser SC Outdoor Camera",
      "5MP Pro Resolution",
      "Smart Pan & Tilt Motor",
      "AI Human & Vehicle Detection",
      "Color Night Vision",
      "Wi-Fi Wireless Connectivity"
    ],
    description: "Imou Cruiser SC 5MP outdoor smart Wi-Fi PTZ camera with AI detection, color night vision and weatherproof housing for perimeter security.",
    image: "images/imou camera/imou-cruiser-sc-5mp.jpg"
  },
  {
    id: "cam-imou-03",
    name: "Imou Cruiser SC 3MP Outdoor Wi-Fi PTZ Camera",
    brand: "Imou",
    model: "IPC-S3DP-3M0WEB",
    category: "cctv-cameras",
    type: "Outdoor Wi-Fi PTZ Bullet Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-IMOU-CSC3",
    resolution: "3MP",
    cameraType: ["PTZ", "Bullet", "Outdoor", "Wi-Fi", "IP Camera"],
    keyFeature: "3MP Outdoor Smart PTZ Wi-Fi",
    basicInfo: [
      "Imou Cruiser SC Outdoor Camera",
      "3MP 2K Resolution",
      "Smart Pan & Tilt Motor",
      "AI Human Detection Alerts",
      "Infrared Night Vision",
      "Wi-Fi Wireless Connectivity"
    ],
    description: "Imou Cruiser SC 3MP outdoor smart Wi-Fi PTZ camera with AI motion detection and infrared night vision for home and shop surveillance.",
    image: "images/imou camera/imou-cruiser-sc-3mp.jpg"
  },
  {
    id: "cam-imou-04",
    name: "Imou Versa 2MP Indoor Wi-Fi Dome Camera",
    brand: "Imou",
    model: "IPC-F22FEP-D",
    category: "cctv-cameras",
    type: "Smart Indoor Wi-Fi Dome Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-IMOU-VRS2",
    resolution: "2MP",
    cameraType: ["Dome", "Indoor", "Wi-Fi", "IP Camera"],
    keyFeature: "2MP Indoor Smart Dome Wi-Fi",
    basicInfo: [
      "Imou Versa Indoor Dome Camera",
      "2MP 1080p Full HD Resolution",
      "180° Wide-Angle Lens",
      "AI Human Detection",
      "Two-Way Audio",
      "Wi-Fi Wireless Connectivity"
    ],
    description: "Imou Versa 2MP indoor Wi-Fi dome camera with 180° wide-angle lens, AI human detection and two-way audio for home and shop monitoring.",
    image: "images/imou camera/imou-versa-2mp.jpg"
  },
  // --- HIKVISION CAMERAS ---
  {
    id: "cam-hik-5mp",
    name: "Hikvision 5MP Fixed Bullet Camera",
    brand: "Hikvision",
    model: "DS-2CE17H0T-IT5F",
    category: "cctv-cameras",
    type: "Analog HD Bullet Camera",
    subCategory: "Analog Bullet",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-HIK-5MP-BUL",
    resolution: "5MP",
    cameraType: ["Bullet", "Outdoor", "Analog Camera"],
    keyFeature: "5MP Digital WDR Outdoor Bullet",
    basicInfo: [
      "Hikvision 5MP Fixed Bullet Camera",
      "5 Megapixel HD Resolution",
      "Digital WDR Technology",
      "IP67 Weatherproof Body",
      "Long-Range Infrared Night Vision"
    ],
    description: "Hikvision DS-2CE17H0T-IT5F 5MP fixed bullet camera with Digital WDR and IP67 weatherproof rating for high-resolution outdoor surveillance.",
    image: "images/images/hikvision color 5mp.jpeg"
  },
  {
    id: "cam-hik-colorvu-2mp",
    name: "Hikvision ColorVu 2MP Outdoor Bullet Camera",
    brand: "Hikvision",
    model: "DS-2CE10DF0T-PF",
    category: "cctv-cameras",
    type: "ColorVu Analog Bullet Camera",
    subCategory: "Analog Bullet",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-HIK-CVU-2MP",
    resolution: "2MP",
    cameraType: ["Bullet", "Outdoor", "Analog Camera"],
    keyFeature: "Full Color Night Vision 24/7",
    basicInfo: [
      "Hikvision ColorVu Bullet Camera",
      "2MP Full HD Resolution",
      "Full Color 24/7 Night Vision",
      "IP67 Weatherproof Rated",
      "F1.0 Super Aperture Lens"
    ],
    description: "Hikvision ColorVu 2MP outdoor bullet camera with F1.0 super-aperture lens for vivid full-color video even in complete darkness.",
    image: "images/images/hikvision color vu 2mp.jpeg"
  },

  // --- DAHUA CAMERAS ---
  {
    id: "cam-dahua-fullcolor-2mp",
    name: "Dahua 2MP Full-Color IP Bullet Camera",
    brand: "Dahua",
    model: "DH-IPC-B1E29-A-IL",
    category: "cctv-cameras",
    type: "Full-Color IP Bullet Camera",
    subCategory: "IP Bullet",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-DAH-FC-2MP",
    resolution: "2MP",
    cameraType: ["Bullet", "Outdoor", "IP Camera"],
    keyFeature: "2MP Full-Color Night Vision + Built-in Mic",
    basicInfo: [
      "Dahua 2MP Full-Color IP Bullet",
      "Full Color Night Vision",
      "Built-in Microphone",
      "Smart Motion Detection",
      "IP67 Waterproof Rated"
    ],
    description: "Dahua DH-IPC-B1E29-A-IL 2MP full-color IP bullet camera with built-in mic, smart motion detection and IP67 waterproof for outdoor installation.",
    image: "images/images/dahua color 2mp and 5mp.jpeg"
  },

  // --- EZVIZ CAMERAS ---
  {
    id: "cam-ezviz-c6n",
    name: "EZVIZ C6N 2MP Smart Wi-Fi Pan & Tilt Camera",
    brand: "EZVIZ",
    model: "CS-C6N-A0-1C2WFR",
    category: "cctv-cameras",
    type: "Smart Wi-Fi Pan & Tilt Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-EZV-C6N",
    resolution: "2MP",
    cameraType: ["PTZ", "Indoor", "Wi-Fi", "IP Camera"],
    keyFeature: "360° Smart Wi-Fi Pan & Tilt Indoor",
    basicInfo: [
      "EZVIZ C6N Indoor Smart Camera",
      "2MP 1080p Full HD Resolution",
      "Motorized Pan & Tilt Coverage",
      "Smart Night Vision",
      "Mobile App Remote Control",
      "Wi-Fi Wireless Connectivity"
    ],
    description: "EZVIZ C6N indoor 2MP smart Wi-Fi pan & tilt camera with 360° motorized coverage, smart night vision and mobile app live view.",
    image: "images/images/ezviz c6n model 1080p 2mp.jpeg"
  },
  {
    id: "cam-ezviz-h8c",
    name: "EZVIZ H8c 1080P Outdoor Pan & Tilt Wi-Fi Camera",
    brand: "EZVIZ",
    model: "CS-H8c-R100-1K3WKFL",
    category: "cctv-cameras",
    type: "Outdoor Wi-Fi Pan & Tilt Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-EZV-H8C",
    resolution: "2MP",
    cameraType: ["PTZ", "Outdoor", "Wi-Fi", "IP Camera"],
    keyFeature: "Outdoor Smart Tracking Pan & Tilt",
    basicInfo: [
      "EZVIZ H8c Outdoor Smart Camera",
      "1080P HD Resolution",
      "360° Panoramic Pan & Tilt",
      "Smart Tracking Technology",
      "Active Defense Alert",
      "IP65 Weatherproof"
    ],
    description: "EZVIZ H8c outdoor 1080P pan & tilt camera with 360° panoramic view, smart auto-tracking and weatherproof housing for perimeter security.",
    image: "images/images/ezviz h8c 2k outdore model.jpeg"
  },

  // --- V380 CAMERAS ---
  {
    id: "cam-v380-duallens",
    name: "V380 Pro 4MP Dual-Lens Wi-Fi Outdoor Camera",
    brand: "V380",
    model: "V380-4MP-DL",
    category: "cctv-cameras",
    type: "4MP Dual-Lens Outdoor Wi-Fi Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-V380-4MP-DL",
    resolution: "4MP",
    cameraType: ["Outdoor", "Wi-Fi", "PTZ", "IP Camera"],
    keyFeature: "4MP Dual-Lens 4G+WiFi Outdoor PTZ",
    basicInfo: [
      "V380 Pro 4MP Dual-Lens Camera",
      "4MP Ultra HD Resolution",
      "Dual Lens Wide + PT Coverage",
      "4G LTE + Wi-Fi Connectivity",
      "Color Night Vision",
      "V380 Pro Mobile App"
    ],
    description: "V380 Pro 4MP dual-lens outdoor Wi-Fi camera with 4G LTE support, wide-angle and PTZ dual perspective for maximum coverage.",
    image: "images/images/v380 dual lens.jpeg"
  },

  // --- IMOU NEW MODELS ---
  {
    id: "cam-imou-ranger-mini",
    name: "Imou Ranger Mini 2K Indoor Wi-Fi Camera",
    brand: "Imou",
    model: "IPC-A22FP-D",
    category: "cctv-cameras",
    type: "Smart Indoor Wi-Fi Camera",
    subCategory: "Wi-Fi Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-IMOU-RNG-MINI",
    resolution: "2K",
    cameraType: ["PTZ", "Indoor", "Wi-Fi", "IP Camera"],
    keyFeature: "2K Quad HD Smart Indoor Wi-Fi",
    basicInfo: [
      "Imou Ranger Mini 2K QHD Camera",
      "2K Quad HD Resolution",
      "Smart Human Detection",
      "Full-Color Night Vision",
      "Two-Way Talk",
      "Google Home & Alexa Support"
    ],
    description: "Imou Ranger Mini 2K indoor Wi-Fi camera with human detection, full-color night vision and smart home integration for home and shop security.",
    image: "images/images/WhatsApp Image 2026-10-08 at 12.28.16 PM (2).jpeg"
  },
  {
    id: "cam-imou-aov-solar",
    name: "Imou AOV Dual Solar 4G+Wi-Fi 3K Camera",
    brand: "Imou",
    model: "IPC-F46FEP-D",
    category: "cctv-cameras",
    type: "Solar Dual-Lens Outdoor 4G+Wi-Fi Camera",
    subCategory: "Solar Camera",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-IMOU-AOV-SOL",
    resolution: "3K",
    cameraType: ["Outdoor", "Wi-Fi", "4G", "Solar", "IP Camera"],
    keyFeature: "Wire-Free Solar Dual-Lens 3K 4G+WiFi",
    basicInfo: [
      "Imou AOV Dual Solar Camera",
      "3K Ultra HD Resolution",
      "Solar Powered — No Wiring Needed",
      "4G LTE + Wi-Fi Dual Connection",
      "12X Digital Zoom",
      "Color Night Vision",
      "IP66 Weatherproof"
    ],
    description: "Imou AOV dual solar outdoor camera with 3K resolution, 4G+Wi-Fi, 12x zoom and always-on solar power — perfect for farms, gates and remote locations.",
    image: "images/images/WhatsApp Image 2026-10-08 at 12.28.14 PM (1).jpeg"
  },

  // --- DVR & NVR RECORDING UNITS ---
  {
    id: "dvr-hik-4ch",
    name: "Hikvision 4-Channel Turbo HD DVR (Up to 5MP)",
    brand: "Hikvision",
    model: "iDS-7204HQHI-M1/E",
    category: "dvr-nvr",
    type: "4-Channel HD DVR",
    subCategory: "Turbo HD DVR",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-DVR-HIK-4CH",
    resolution: "5MP",
    cameraType: ["DVR", "Analog / HD-TVI"],
    keyFeature: "4-Channel Turbo HD DVR up to 5MP",
    basicInfo: [
      "Hikvision 4-Channel Turbo HD DVR",
      "Supports Up to 5MP Resolution",
      "H.265 Pro Video Compression",
      "5-in-1 Signal Input (TVI/AHD/CVI/CVBS/IP)",
      "Mobile App Live View",
      "1x SATA Hard Drive Port"
    ],
    description: "Hikvision 4-channel Turbo HD DVR supporting up to 5MP cameras with H.265 Pro compression and mobile live view for homes and small shops.",
    image: "images/images/hikvison 4channel dvr uptp 5mp.jpeg"
  },
  {
    id: "dvr-hik-8ch",
    name: "Hikvision 8-Channel 1080p 5MP Supported DVR",
    brand: "Hikvision",
    model: "iDS-7208HUHI-M1/E",
    category: "dvr-nvr",
    type: "8-Channel AcuSense DVR",
    subCategory: "Turbo HD DVR",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-DVR-HIK-8CH",
    resolution: "5MP",
    cameraType: ["DVR", "Analog / HD-TVI"],
    keyFeature: "8-Channel 5MP Turbo HD DVR",
    basicInfo: [
      "Hikvision 8-Channel DVR",
      "Supports Up to 8 Cameras (5MP)",
      "H.265 Pro Video Compression",
      "HDMI + VGA Dual Output",
      "Mobile App Remote Access",
      "1x SATA Hard Drive Slot"
    ],
    description: "Hikvision 8-channel 5MP supported Turbo HD DVR for medium shops, offices and residential security systems in Peshawar.",
    image: "images/images/hikvivion 8 channel dvr upto5mp.jpeg"
  },

  // --- SURVEILLANCE HARD DRIVES ---
  {
    id: "hdd-wd-1tb",
    name: "Western Digital Purple 1TB Surveillance Hard Drive",
    brand: "Western Digital",
    model: "WD10PURZ",
    category: "hard-drives",
    type: "Surveillance Hard Drive (1TB)",
    subCategory: "Surveillance HDD",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-HDD-WD-1TB",
    keyFeature: "1TB 24/7 Surveillance Storage",
    basicInfo: [
      "Western Digital Purple Series",
      "1TB Storage Capacity",
      "Engineered for 24/7 Surveillance Recording",
      "SATA 6 Gb/s Interface",
      "3.5-inch Internal Form Factor"
    ],
    description: "Western Digital Purple 1TB hard drive engineered specifically for 24/7 video surveillance DVR and NVR recorders.",
    image: "images/images/westurn digital 1tb hard drive.jpeg"
  },
  {
    id: "hdd-wd-2tb",
    name: "Western Digital Purple 2TB Surveillance Hard Drive",
    brand: "Western Digital",
    model: "WD22PURZ",
    category: "hard-drives",
    type: "Surveillance Hard Drive (2TB)",
    subCategory: "Surveillance HDD",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-HDD-WD-2TB",
    keyFeature: "2TB 24/7 Surveillance Storage",
    basicInfo: [
      "Western Digital Purple Series",
      "2TB Storage Capacity",
      "Engineered for 24/7 Surveillance Recording",
      "SATA 6 Gb/s Interface",
      "3.5-inch Internal Form Factor"
    ],
    description: "Western Digital Purple 2TB surveillance hard drive for extended video retention on multi-camera security systems.",
    image: "images/images/western digital 2tb hard drive.jpeg"
  },
  {
    id: "hdd-seagate-4tb",
    name: "Seagate SkyHawk 4TB Surveillance Hard Drive",
    brand: "Seagate",
    model: "ST4000VX016",
    category: "hard-drives",
    type: "Surveillance Hard Drive (4TB)",
    subCategory: "Surveillance HDD",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-HDD-SEA-4TB",
    keyFeature: "4TB High Capacity Surveillance Storage",
    basicInfo: [
      "Seagate SkyHawk Series",
      "4TB Storage Capacity",
      "Optimized for 24/7 Video Streaming",
      "SATA 6 Gb/s Interface",
      "3.5-inch Internal Form Factor"
    ],
    description: "Seagate SkyHawk 4TB surveillance hard drive for long-term video archival on high channel CCTV and NVR systems.",
    image: "images/images/seagate 4tb haeddrive.jpeg"
  },

  // --- NETWORKING & POE ---
  {
    id: "net-cat6-spool",
    name: "Pure Copper Cat6 UTP Cable Roll (305m)",
    brand: "D-Link",
    model: "NCB-C6UBLUR-305",
    category: "networking",
    type: "Cat6 UTP Cable (305m Roll)",
    subCategory: "Network Cable",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-NET-CAT6-305",
    keyFeature: "305m Pure Copper Cat6 Roll",
    basicInfo: [
      "Pure Copper Cat6 UTP Cable",
      "305 Meter Spool / Box",
      "High-Speed Gigabit Transmission",
      "Suitable for IP Cameras & PoE Run"
    ],
    description: "Dahua pure copper Cat6 UTP cable 305m roll for dependable IP camera wiring, PoE transmission, and office networking.",
    image: "images/images/cat6 upt cable 305m.jpeg"
  },
  {
    id: "net-rj59-coax",
    name: "RJ59 Coaxial CCTV Cable Roll (100m)",
    brand: "Vision Tech",
    model: "VTS-RJ59-100M",
    category: "networking",
    type: "RJ59 Coaxial Cable (100m Roll)",
    subCategory: "Network Cable",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-NET-RJ59-100",
    keyFeature: "100m RJ59 Coaxial Siamese Cable",
    basicInfo: [
      "RJ59 Siamese Coaxial CCTV Cable",
      "100 Meter Roll",
      "Dual-Core Power + Video Combined",
      "For Analog & HD-TVI Cameras",
      "Low Signal Loss Construction"
    ],
    description: "RJ59 siamese coaxial CCTV cable for clean analog HD camera installation — carries both video and power in one cable run.",
    image: "images/images/rj59 cable.jpeg"
  },
  {
    id: "net-poe-sw-8",
    name: "Tenda 8-Port 10/100M PoE Switch with 2 Gigabit Uplink",
    brand: "Tenda",
    model: "TEF1110P-8-102W",
    category: "networking",
    type: "8-Port PoE Switch",
    subCategory: "PoE Switch",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-NET-POE-8P",
    keyFeature: "8 PoE Ports + 2 Gigabit Uplink",
    basicInfo: [
      "Tenda 8-Port PoE Switch",
      "8x 10/100M PoE Ports",
      "2x Gigabit Uplink Ports",
      "Powers IP Cameras over Single Cat6 Cable"
    ],
    description: "Tenda 8-port PoE switch with dual Gigabit uplink ports for simplified IP security camera power and data transmission.",
    image: "images/images/poe switch 1000mbps 8port.jpeg"
  },
  {
    id: "net-poe-sw-16",
    name: "16-Port Gigabit 1000Mbps PoE Switch",
    brand: "Vision Tech",
    model: "VTS-POE-16G",
    category: "networking",
    type: "16-Port Gigabit PoE Switch",
    subCategory: "PoE Switch",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-NET-POE-16P",
    keyFeature: "16 Gigabit PoE Ports 1000Mbps",
    basicInfo: [
      "16-Port Gigabit PoE Network Switch",
      "1000Mbps Full Gigabit Ports",
      "Powers Up to 16 IP Cameras",
      "SFP Fiber Uplink Ports",
      "Industrial Grade Metal Housing"
    ],
    description: "16-port Gigabit 1000Mbps PoE switch with SFP uplink for large-scale IP camera deployments in commercial and industrial CCTV systems.",
    image: "images/images/poe swetch 1000mbps 16ports.jpeg"
  },
  {
    id: "net-poe-ext-4",
    name: "4-Channel Gigabit PoE++ Extender (250m)",
    brand: "Cudy",
    model: "POE40",
    category: "networking",
    type: "4-Port Gigabit PoE Extender",
    subCategory: "PoE Switch",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-NET-POE-EXT4",
    keyFeature: "4-Port PoE++ Extender up to 250m",
    basicInfo: [
      "Cudy 4-Channel Gigabit PoE Extender",
      "1000Mbps Gigabit Speed",
      "Extends PoE Signal up to 250 Meters",
      "802.3af/at/bt Standard",
      "Plug and Play — No Configuration"
    ],
    description: "Cudy 4-port Gigabit PoE++ extender extending camera power and data up to 250 meters over Cat6 — ideal for large properties and warehouses.",
    image: "images/images/poe switch 1000mbps 4 port.jpeg"
  },
  {
    id: "net-router-tplink",
    name: "TP-Link 300Mbps Wireless N Router",
    brand: "TP-Link",
    model: "TL-WR840N",
    category: "networking",
    type: "300Mbps Wireless N Router",
    subCategory: "Wi-Fi Router",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-NET-TPL-840N",
    keyFeature: "300Mbps Wireless N Wi-Fi Router",
    basicInfo: [
      "TP-Link 300Mbps Wi-Fi Router",
      "2.4GHz Wireless N Speed",
      "Dual External Antennas",
      "4x Fast Ethernet LAN Ports",
      "Easy Setup for CCTV Remote Viewing"
    ],
    description: "TP-Link 300Mbps wireless N router for reliable home and shop Wi-Fi connectivity and smooth CCTV mobile live viewing.",
    image: "images/images/tp link 300mbps wireless extndrad router.jpeg"
  },

  // --- ACCESSORIES & POWER ---

  {
    id: "acc-bnc-pack",
    name: "Pure Copper BNC Video Connectors (Pack of 10)",
    brand: "Vision Tech",
    model: "VTS-BNC-CU-10",
    category: "accessories",
    type: "BNC Video Connectors (Pack)",
    subCategory: "Connectors",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-ACC-BNC-10",
    keyFeature: "Pack of 10 Pure Copper BNCs",
    basicInfo: [
      "Pure Copper BNC Video Connectors",
      "Pack of 10 Units",
      "Low Signal Loss Connection",
      "Standard Coaxial Cable Fit"
    ],
    description: "Pure copper BNC video connectors for crisp analog HD video transmission without signal noise or flickering.",
    image: "images/images/bnc connectors pack of 10.jpeg"
  },
  {
    id: "acc-dc-pack",
    name: "12V DC Male & Female Power Connectors (Pack of 10)",
    brand: "Vision Tech",
    model: "VTS-DC-10PK",
    category: "accessories",
    type: "12V DC Power Connectors (Pack)",
    subCategory: "Connectors",
    priceDisplay: "Request Price",
    availability: "Contact for Availability",
    sku: "VTS-ACC-DC-10",
    keyFeature: "Pack of 10 Male & Female DC Plugs",
    basicInfo: [
      "12V DC Power Plugs (Male & Female)",
      "Pack of 10 Units",
      "Screw Terminal Screw-Down Blocks",
      "Standard 2.1mm x 5.5mm CCTV Size"
    ],
    description: "Heavy-duty 12V DC screw-terminal power connectors for reliable camera power distribution.",
    image: "images/images/dc pins male female pack of 10.jpeg"
  }
];

// --- CCTV PACKAGES ---
const CCTV_PACKAGES = [
  {
    id: "pkg-basic-home",
    name: "Basic Home Security Package",
    tagline: "Essential 24/7 Security for Homes, Small Apartments & Shops",
    badge: "Popular Starter",
    camerasCount: "2 or 4 Cameras",
    items: [
      { item: "Cameras", detail: "2 or 4x 2MP Full HD Night Vision Cameras (Hikvision / Dahua)" },
      { item: "DVR Unit", detail: "1x 4-Channel HD Digital Video Recorder with Mobile App" },
      { item: "Storage", detail: "1x 500GB / 1TB Surveillance Hard Drive (Continuous Recording)" },
      { item: "Power Supply", detail: "Centralized 12V CCTV Power Supply Box" },
      { item: "Cabling", detail: "High Quality Cat6 / Coaxial Cable with Ducting Accessories" },
      { item: "Connectors", detail: "Pure Copper BNC & DC Connectors" },
      { item: "Mobile Setup", detail: "Live View App Configuration on Android & iPhone" },
      { item: "Installation", detail: "Professional Neat Installation Across Peshawar" }
    ],
    recommendedFor: "Residential homes, small shops, gates, and small office premises in Peshawar.",
    pricingNote: "Customizable based on camera count & cable length."
  },
  {
    id: "pkg-business-security",
    name: "Business Security Package",
    tagline: "High-Definition 24/7 Color Monitoring for Retail Stores, Plazas & Warehouses",
    badge: "Most Demanded",
    camerasCount: "4 to 8 Cameras",
    items: [
      { item: "Cameras", detail: "4 to 8x 5MP Full-Color Night Vision Cameras with Audio (Hikvision / Dahua)" },
      { item: "DVR/NVR Unit", detail: "1x 8-Channel AcuSense Smart DVR / PoE NVR" },
      { item: "Storage", detail: "1x 2TB Western Digital Purple Surveillance HDD" },
      { item: "Power Supply", detail: "Heavy Duty 12V 10A/20A Centralized Power Supply" },
      { item: "Cabling", detail: "Pure Copper Heavy Gauge Cable Roll with Conduit / Trunking" },
      { item: "Connectors", detail: "All Required Copper BNC, DC & RJ45 Connectors" },
      { item: "AI Alerts", detail: "Human & Vehicle Detection Notification Setup" },
      { item: "Installation", detail: "Complete Professional Turnkey Installation in Peshawar" }
    ],
    recommendedFor: "Retail showrooms, pharmacies, restaurants, schools, and offices in Peshawar.",
    pricingNote: "Customizable based on location layout and camera count."
  },
  {
    id: "pkg-professional-security",
    name: "Professional Security Package",
    tagline: "Ultra HD 4K / IP PoE Infrastructure for Commercial Complexes & Estates",
    badge: "Commercial Grade",
    camerasCount: "8 to 16+ Cameras",
    items: [
      { item: "Cameras", detail: "8 to 16x 4MP / 8MP 4K IP Network PoE Cameras (Indoor Dome + Outdoor Bullet)" },
      { item: "NVR Unit", detail: "1x 16-Channel 4K PoE Network Video Recorder (Dual HDMI/VGA)" },
      { item: "Storage", detail: "Surveillance Grade Hard Drives (SkyHawk / WD Purple)" },
      { item: "PoE Switches", detail: "Gigabit PoE Network Switches with Lightning Protection" },
      { item: "Cat6 Spool", detail: "Full 305m Roll 100% Solid Copper Cat6 UTP Cable" },
      { item: "Smart Features", detail: "AI Perimeter Intrusion, Face Capture & Smart Search" },
      { item: "Networking", detail: "Structured Rack / Enclosure Wiring & Dual WAN Router Integration" },
      { item: "Support", detail: "Priority On-Site Technical Support in Peshawar" }
    ],
    recommendedFor: "Factories, commercial plazas, hotels, hospitals, and large residences.",
    pricingNote: "Custom engineered quotation according to site requirements."
  }
];

// --- BRAND LIST ---
const BRANDS_LIST = [
  { name: "Hikvision", tag: "Global Surveillance Leader", desc: "Industry-leading analog & IP cameras, AcuSense DVRs, and ColorVu night vision systems." },
  { name: "EZVIZ", tag: "Smart Home Security", desc: "User-friendly smart Wi-Fi cameras with 360-degree coverage, two-way audio, and mobile app control." },
  { name: "Imou", tag: "Smart IoT Security", desc: "Intuitive indoor and outdoor Wi-Fi cameras with AI human detection and instant notifications." },
  { name: "Dahua", tag: "Advanced Video Technology", desc: "Renowned Full-Color HDCVI cameras, Starlight IP series, and robust PoE NVR platforms." },
  { name: "V380", tag: "Affordable Wi-Fi Solutions", desc: "Cost-effective plug-and-play dual-lens Wi-Fi cameras for quick home and shop monitoring." },
  { name: "Tenda", tag: "Networking & PoE Switches", desc: "Durable PoE switches, long-distance extend switches, and reliable wireless networking gear." },
  { name: "TP-Link", tag: "Reliable Network Gear", desc: "High-performance dual-band routers, switches, and range extenders for smooth CCTV streams." },
  { name: "D-Link", tag: "Structured Cabling & Switches", desc: "Quality Cat6 pure copper cabling, patch cords, and commercial network infrastructure." }
];

// --- PESHAWAR SERVICE AREAS ---
const PESHAWAR_AREAS = [
  "University Road",
  "Hayatabad (Phase 1 - 7)",
  "Saddar Peshawar",
  "Gulbahar",
  "Warsak Road",
  "Ring Road",
  "Dalazak Road",
  "Kohat Road",
  "Charsadda Road",
  "Dabgari Gardens",
  "Khyber Bazaar",
  "Peshawar Cantt",
  "Shami Road",
  "GT Road",
  "Defense Colony",
  "Regi Model Town",
  "DHA Peshawar",
  "Other Area in Peshawar"
];
