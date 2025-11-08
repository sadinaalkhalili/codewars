import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";

import apple_products_image from "./apple_products_image.png";
import samsung_products_image from "./samsung_products_image.png";
import cases_covers_image from "./cases_covers_image.png";
import audio_wearables_image from "./audio_wearables_image.png";
import chargers_image from "./chargers_image.png";
import tablets_image from "./tablets_image.png";
import warranty_icon from "./warranty_icon.svg";
import price_tag_icon from "./price_tag_icon.svg";

// ✅ Active Product Image Imports
import iphone_15_pro_max_image from "./iphone_15_pro_max_image.png";
import ipad_air_m2_image from "./ipad_air_m2_image.png";

import samsung_s24_ultra_image from "./samsung_s24_ultra_image.png";
import samsung_a55_image from "./samsung_a55_image.png";
import samsung_fold5_image from "./samsung_fold5_image.png";

import anker_45w_image from "./anker_45w_image.png";
//import apple_20w_adapter_image from "./apple_20w_adapter_image.png";
//import samsung_25w_charger_image from "./samsung_25w_charger_image.png";

import galaxy_buds2_pro_image from "./galaxy_buds2_pro_image.png";
import airpods_3_image from "./airpods_3_image.png";

import iphone15_silicone_case_image from "./iphone15_silicone_case_image.png";

import ipad_pro_m4_image from "./ipad_pro_m4_image.png";

// 💤 Commented / Optional Future Imports
// import macbook_air_m3_image from "./macbook_air_m3_image.png";
// import apple_watch_series9_image from "./apple_watch_series9_image.png";
// import airpods_pro_2_image from "./airpods_pro_2_image.png";

// import samsung_tab_s9_image from "./samsung_tab_s9_image.png";
// import samsung_watch6_image from "./samsung_watch6_image.png";

// import magsafe_charger_image from "./magsafe_charger_image.png";
// import baseus_3in1_station_image from "./baseus_3in1_station_image.png";

// import beats_studio_pro_image from "./beats_studio_pro_image.png";
// import sony_wh1000xm5_image from "./sony_wh1000xm5_image.png";
// import fitbit_charge6_image from "./fitbit_charge6_image.png";

// import s24_clear_case_image from "./s24_clear_case_image.png";
// import otterbox_defender_image from "./otterbox_defender_image.png";
// import fold5_leather_case_image from "./fold5_leather_case_image.png";
// import a55_shockproof_case_image from "./a55_shockproof_case_image.png";

// import samsung_tab_a9_image from "./samsung_tab_a9_image.png";
// import ipad_mini_6_image from "./ipad_mini_6_image.png";
// import lenovo_tab_p12_image from "./lenovo_tab_p12_image.png";
// import xiaomi_pad6_image from "./xiaomi_pad6_image.png";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "Apple Collection",
    path: "Apple",
    image: apple_products_image,
    bgColor: "#E8EBF5", // subtle cool gray-blue
  },
  {
    text: "Samsung Devices",
    path: "Samsung",
    image: samsung_products_image,
    bgColor: "#E6F0FA", // cool clean blue tone
  },
  {
    text: "Cases & Covers",
    path: "Cases",
    image: cases_covers_image,
    bgColor: "#ECECEC", // light neutral gray, perfect for white cases
  },
  {
    text: "Chargers & Power",
    path: "Chargers",
    image: chargers_image,
    bgColor: "#E3E9F2", // soft bluish-gray to give charger details contrast
  },
  {
    text: "Audio & Wearables",
    path: "Audio",
    image: audio_wearables_image,
    bgColor: "#FFF4D8", // warm ivory with a golden undertone for variation
  },
  {
    text: "Tablets & iPads",
    path: "Tablets",
    image: tablets_image,
    bgColor: "#E7EDF3", // balanced blue-gray
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fast & Secure Delivery",
    description: "Get your devices delivered safely and on time.",
  },
  {
    icon: warranty_icon,
    title: "Official Warranty",
    description: "All products come with verified brand warranty.",
  },

  {
    icon: price_tag_icon,
    title: "Best Price Guarantee",
    description: "Top deals on Apple, Samsung, and more.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Tech Lovers",
    description: "Proudly serving thousands of satisfied customers.",
  },
];

export const dummyProducts = [
  {
    _id: "a1",
    name: "iPhone 15 Pro Max",
    category: "Apple",
    price: 1200,
    offerPrice: 1149,
    image: [iphone_15_pro_max_image],
    description: [
      "Titanium design with A17 Pro chip",
      "48MP camera system with 5x zoom",
      "USB-C connectivity",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "a2",
    name: "Apple iPad Air M2",
    category: "Apple",
    price: 699,
    offerPrice: 659,
    image: [ipad_air_m2_image],
    description: [
      "M2 chip with stunning performance",
      "Supports Apple Pencil 2",
      "10.9-inch Liquid Retina display",
    ],
    createdAt: "2025-03-25T07:18:46.018Z",
    updatedAt: "2025-03-25T07:19:13.103Z",
    inStock: true,
  },
  // {
  //   _id: "a3",
  //   name: "MacBook Air M3 13-inch",
  //   category: "Apple",
  //   price: 1299,
  //   offerPrice: 1249,
  //   image: [macbook_air_m3_image],
  //   description: [
  //     "Lightweight aluminum design",
  //     "Up to 18 hours of battery life",
  //     "Silent fanless operation",
  //   ],
  //   createdAt: "2025-03-25T07:19:46.018Z",
  //   updatedAt: "2025-03-25T07:20:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "a4",
  //   name: "Apple Watch Series 9",
  //   category: "Apple",
  //   price: 399,
  //   offerPrice: 369,
  //   image: [apple_watch_series9_image],
  //   description: [
  //     "Double-tap gesture control",
  //     "Advanced health metrics",
  //     "Always-on Retina display",
  //   ],
  //   createdAt: "2025-03-25T07:20:46.018Z",
  //   updatedAt: "2025-03-25T07:21:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "a5",
  //   name: "AirPods Pro 2 (USB-C)",
  //   category: "Apple",
  //   price: 249,
  //   offerPrice: 229,
  //   image: [airpods_pro_2_image],
  //   description: [
  //     "Active Noise Cancellation",
  //     "Transparency and Adaptive Audio modes",
  //     "MagSafe USB-C charging case",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },

  // 📱 SAMSUNG
  {
    _id: "s1",
    name: "Samsung Galaxy S24 Ultra",
    category: "Samsung",
    price: 950,
    offerPrice: 899,
    image: [samsung_s24_ultra_image],
    description: [
      "6.8-inch Dynamic AMOLED 2X display",
      "200MP camera with 8K video recording",
      "S Pen supported for productivity",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "s2",
    name: "Samsung Galaxy A55 5G",
    category: "Samsung",
    price: 400,
    offerPrice: 370,
    image: [samsung_a55_image],
    description: [
      "5G ready smartphone",
      "Bright Super AMOLED display",
      "Long-lasting 5000mAh battery",
    ],
    createdAt: "2025-03-25T07:18:46.018Z",
    updatedAt: "2025-03-25T07:19:13.103Z",
    inStock: true,
  },
  {
    _id: "s3",
    name: "Samsung Galaxy Z Fold5",
    category: "Samsung",
    price: 1799,
    offerPrice: 1699,
    image: [samsung_fold5_image],
    description: [
      "Foldable display design",
      "Powerful Snapdragon 8 Gen 2 chip",
      "120Hz AMOLED main display",
    ],
    createdAt: "2025-03-25T07:19:46.018Z",
    updatedAt: "2025-03-25T07:20:13.103Z",
    inStock: false,
  },
  // {
  //   _id: "s4",
  //   name: "Samsung Galaxy Tab S9",
  //   category: "Samsung",
  //   price: 850,
  //   offerPrice: 799,
  //   image: [samsung_tab_s9_image],
  //   description: [
  //     "High-resolution AMOLED screen",
  //     "Perfect for productivity and entertainment",
  //     "Supports S Pen and DeX mode",
  //   ],
  //   createdAt: "2025-03-25T07:20:46.018Z",
  //   updatedAt: "2025-03-25T07:21:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "s5",
  //   name: "Samsung Galaxy Watch 6",
  //   category: "Samsung",
  //   price: 330,
  //   offerPrice: 299,
  //   image: [samsung_watch6_image],
  //   description: [
  //     "Health tracking and sleep monitoring",
  //     "Sleek and modern design",
  //     "Fast charging and long battery life",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },

  // ⚡ CHARGERS
  {
    _id: "c1",
    name: "Anker 45W Super Fast Charger",
    category: "Chargers",
    price: 49,
    offerPrice: 39,
    image: [anker_45w_image],
    description: [
      "Compatible with Samsung and Apple devices",
      "Compact and travel-friendly design",
      "Includes USB-C cable",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  // {
  //   _id: "c2",
  //   name: "Apple 20W USB-C Power Adapter",
  //   category: "Chargers",
  //   price: 25,
  //   offerPrice: 22,
  //   image: [apple_20w_adapter_image],
  //   description: [
  //     "Original Apple charger",
  //     "Fast charging for iPhone and iPad",
  //     "Lightweight and reliable",
  //   ],
  //   createdAt: "2025-03-25T07:18:46.018Z",
  //   updatedAt: "2025-03-25T07:19:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "c3",
  //   name: "Samsung 25W Super Fast Charger",
  //   category: "Chargers",
  //   price: 29,
  //   offerPrice: 25,
  //   image: [samsung_25w_charger_image],
  //   description: [
  //     "Supports adaptive fast charging",
  //     "USB-C to USB-C cable included",
  //     "Reliable and safe design",
  //   ],
  //   createdAt: "2025-03-25T07:19:46.018Z",
  //   updatedAt: "2025-03-25T07:20:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "c4",
  //   name: "MagSafe Wireless Charger",
  //   category: "Chargers",
  //   price: 59,
  //   offerPrice: 49,
  //   image: [magsafe_charger_image],
  //   description: [
  //     "Fast wireless charging for iPhone",
  //     "Magnetic snap-on design",
  //     "USB-C connector",
  //   ],
  //   createdAt: "2025-03-25T07:20:46.018Z",
  //   updatedAt: "2025-03-25T07:21:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "c5",
  //   name: "Baseus 3-in-1 Charging Station",
  //   category: "Chargers",
  //   price: 69,
  //   offerPrice: 59,
  //   image: [baseus_3in1_station_image],
  //   description: [
  //     "Charges phone, watch, and earbuds simultaneously",
  //     "Sleek modern design",
  //     "Perfect for nightstands",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },

  // 🎧 AUDIO & WEARABLES
  {
    _id: "aw1",
    name: "Samsung Galaxy Buds 2 Pro",
    category: "Audio",
    price: 219,
    offerPrice: 199,
    image: [galaxy_buds2_pro_image],
    description: [
      "Hi-Fi 24-bit audio",
      "Noise cancellation and ambient mode",
      "Compact charging case",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "aw2",
    name: "Apple AirPods 3rd Gen",
    category: "Audio",
    price: 179,
    offerPrice: 159,
    image: [airpods_3_image],
    description: [
      "Spatial Audio with dynamic head tracking",
      "Sweat and water resistant",
      "Long battery life with MagSafe case",
    ],
    createdAt: "2025-03-25T07:18:46.018Z",
    updatedAt: "2025-03-25T07:19:13.103Z",
    inStock: true,
  },
  // {
  //   _id: "aw3",
  //   name: "Beats Studio Pro",
  //   category: "Audio",
  //   price: 349,
  //   offerPrice: 319,
  //   image: [beats_studio_pro_image],
  //   description: [
  //     "Powerful sound with noise cancellation",
  //     "Up to 40 hours of battery life",
  //     "Comfortable over-ear design",
  //   ],
  //   createdAt: "2025-03-25T07:19:46.018Z",
  //   updatedAt: "2025-03-25T07:20:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "aw4",
  //   name: "Sony WH-1000XM5",
  //   category: "Audio",
  //   price: 399,
  //   offerPrice: 359,
  //   image: [sony_wh1000xm5_image],
  //   description: [
  //     "Industry-leading noise cancellation",
  //     "Crystal-clear hands-free calls",
  //     "Up to 30 hours of playtime",
  //   ],
  //   createdAt: "2025-03-25T07:20:46.018Z",
  //   updatedAt: "2025-03-25T07:21:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "aw5",
  //   name: "Fitbit Charge 6",
  //   category: "Audio",
  //   price: 159,
  //   offerPrice: 139,
  //   image: [fitbit_charge6_image],
  //   description: [
  //     "Tracks heart rate, steps, and sleep",
  //     "Water resistant up to 50m",
  //     "Compatible with Android and iOS",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },

  // 🧳 CASES & COVERS
  {
    _id: "cc1",
    name: "iPhone 15 Silicone Case with MagSafe",
    category: "Cases",
    price: 59,
    offerPrice: 49,
    image: [iphone15_silicone_case_image],
    description: [
      "Soft-touch finish with perfect fit",
      "Compatible with MagSafe accessories",
      "Durable and lightweight",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  // {
  //   _id: "cc2",
  //   name: "Samsung S24 Ultra Clear Case",
  //   category: "Cases",
  //   price: 35,
  //   offerPrice: 29,
  //   image: [s24_clear_case_image],
  //   description: [
  //     "Crystal-clear protection",
  //     "Slim and anti-yellow material",
  //     "Supports wireless charging",
  //   ],
  //   createdAt: "2025-03-25T07:18:46.018Z",
  //   updatedAt: "2025-03-25T07:19:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "cc3",
  //   name: "OtterBox Defender for iPhone 14",
  //   category: "Cases",
  //   price: 69,
  //   offerPrice: 59,
  //   image: [otterbox_defender_image],
  //   description: [
  //     "Extreme protection from drops and shocks",
  //     "Built-in screen protector",
  //     "Durable multi-layer design",
  //   ],
  //   createdAt: "2025-03-25T07:19:46.018Z",
  //   updatedAt: "2025-03-25T07:20:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "cc4",
  //   name: "Leather Case for Galaxy Z Fold5",
  //   category: "Cases",
  //   price: 89,
  //   offerPrice: 79,
  //   image: [fold5_leather_case_image],
  //   description: [
  //     "Premium leather craftsmanship",
  //     "Sleek and minimal design",
  //     "Soft microfiber interior",
  //   ],
  //   createdAt: "2025-03-25T07:20:46.018Z",
  //   updatedAt: "2025-03-25T07:21:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "cc5",
  //   name: "Transparent Shockproof Case for A55",
  //   category: "Cases",
  //   price: 25,
  //   offerPrice: 19,
  //   image: [a55_shockproof_case_image],
  //   description: [
  //     "Reinforced corners for protection",
  //     "Transparent and anti-slip grip",
  //     "Supports wireless charging",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },

  // 💻 TABLETS & IPADS
  {
    _id: "t1",
    name: "iPad Pro M4 12.9-inch",
    category: "Tablets",
    price: 1199,
    offerPrice: 1149,
    image: [ipad_pro_m4_image],
    description: [
      "Liquid Retina XDR display",
      "M4 chip with extreme performance",
      "Supports Apple Pencil Pro",
    ],
    createdAt: "2025-03-25T07:21:46.018Z",
    updatedAt: "2025-03-25T07:22:13.103Z",
    inStock: true,
  },
  // {
  //   _id: "t2",
  //   name: "Samsung Galaxy Tab A9+",
  //   category: "Tablets",
  //   price: 299,
  //   offerPrice: 269,
  //   image: [samsung_tab_a9_image],
  //   description: [
  //     "11-inch immersive display",
  //     "Powerful Snapdragon processor",
  //     "Perfect for streaming and study",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "t3",
  //   name: "Apple iPad Mini 6",
  //   category: "Tablets",
  //   price: 499,
  //   offerPrice: 469,
  //   image: [ipad_mini_6_image],
  //   description: [
  //     "Compact and powerful with A15 Bionic chip",
  //     "Supports Apple Pencil 2",
  //     "USB-C fast charging",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "t4",
  //   name: "Lenovo Tab P12",
  //   category: "Tablets",
  //   price: 449,
  //   offerPrice: 429,
  //   image: [lenovo_tab_p12_image],
  //   description: [
  //     "12.7-inch 3K display",
  //     "Dolby Atmos quad speakers",
  //     "Lightweight and durable build",
  //   ],
  //   createdAt: "2025-03-25T07:21:46.018Z",
  //   updatedAt: "2025-03-25T07:22:13.103Z",
  //   inStock: true,
  // },
  // {
  //   _id: "t5",
  //   name: "Xiaomi Pad 6",
  //   category: "Tablets",
  //   price: 399,
  //   offerPrice: 359,
  //   image: [xiaomi_pad6_image],
  //   description: ["WQHD+ 144Hz display", "Snapdragon 870 processor"],
  // },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
