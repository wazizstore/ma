/* ════════════════════════════════════════════════════════════════
   shared_data.js  —  WAZIZ SHOP
   ────────────────────────────────────────────────────────────────
   هذا الملف يحتوي على منتجات الملابس فقط (تم حذف الساعات والحقائب والأجهزة)
════════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════
   🧥  CLOTHES — الملابس (جميع المنتجات)
════════════════════════════════════════ */
const products = [
  {
    id: 12,
    name: "Ensemble Nike Sport",
    price: "219",
    originalPrice: "259",
    description: "طقم رياضي عصري، خامة ليكرا عالية الجودة، مناسب للرياضة والاستخدام اليومي. يتميز بالمرونة والراحة.",
    cat: "clothes",
    images: ["Untitled design (63).png","Untitled design (65).png"],
    colors: [
      {name:"أسود", class:"black", inStock: true},
      {name:"أبيض", class:"white", inStock: true}
    ],
    sizes: ["m","l","xl"],
    inStock: true
  },
 
  {
    id: 17,
    name: "Ensemble Rido Classique",
    price: "199",
    originalPrice: "299",
    description: "طقم أنيق يتكون من قميص وبنطلون، مناسب للمناسبات والاستخدام اليومي. خامات فاخرة وتفصيل محترف.",
    cat: "clothes",
    images: [
      "Gemini_Generated_Image_tkom7utkom7utkom.webp",
      "Gemini_Generated_Image_3o2t5k3o2t5k3o2t.webp",
      "Gemini_Generated_Image_viswvyviswvyvisw.webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock: true},
      {name:"أبيض", class:"white", inStock: true},
      {name:"بني", class:"brown", inStock: true},
      {name:"فضي", class:"argent", inStock: true}
    ],
    sizes: ["m","l","xl"],
    inStock: true
  },
  
  {
    id: 13,
    name: "Ensemble Rido Premium",
    price: "199",
    originalPrice: "259",
    description: "طقم فاخر من قميص وبنطلون، تصميم عصري، مناسب للسهرات والمناسبات الخاصة.",
    cat: "clothes",
    images: [
      "1754474745_WhatsApp Image 2025-08-05 at 23.47.53 (2).webp",
      "1754474745_WhatsApp Image 2025-08-05 at 23.47.53.webp",
      "1754474745_WhatsApp Image 2025-08-05 at 23.47.53 (1).webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock: true},
      {name:"أبيض", class:"white", inStock: true},
      {name:"بني", class:"brown", inStock: true}
    ],
    sizes: ["m","l","xl"],
    inStock: true
  },
 
  {
    id: 10,
    name: "Ensemble Hiver Luxe",
    price: "219",
    originalPrice: "249",
    description: "طقم شتوي دافئ، مناسب لأيام البرد. خامة ثقيلة وعالية الجودة. تصميم أنيق وعصري.",
    cat: "clothes",
    images: [
      "WhatsApp Image 2026-03-02 at 02.46.23.webp",
      "WhatsApp Image 2026-03-02 at 02.49.27.webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock: true},
      {name:"أبيض", class:"white", inStock: true}
    ],
    sizes: ["m","l","xl"],
    inStock: true
  },
 
  {
    id: 9,
    name: "Ensemble Rédou Edition",
    price: "229",
    originalPrice: "299",
    description: "طقم فاخر مع سلسلة، جيوب متعددة، تصميم عصري. مناسب للشباب الباحثين عن الأناقة والراحة.",
    cat: "clothes",
    images: [
      "1760905019_IMG_0375.webp",
      "Untitled design (29).webp",
      "Untitled design (30).webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock: true},
      {name:"بني فاتح", class:"marron-clair", inStock: true},
      {name:"أبيض", class:"white", inStock: true}
    ],
    sizes: ["m","l","xl","xxl"],
    inStock: true
  }
];