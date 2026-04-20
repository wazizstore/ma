
/* ════════════════════════════════════════
   🔌  ELECTRONICS — الإلكترونيات
   أضف / احذف إلكترونيات هنا
════════════════════════════════════════ */
const ELECTRONICS = [{
  id: 20,
  name: "جهاز ترطيب الهواء المحمول",
  price: 199,
  originalPrice: 230,
  description: "7 ألوان, وشاحن USB , خزان مياه قوي 600 مل يمكنك ضبط سرعة الرياح والتحكم بما يناسبك",
  cat: "electronics",
  images: [
    "1X8jzYJwRgyOlpuhinq48qebrFdKjZG6bsek7Qdw (1).jpg",
    "tJPPPVdCfuNpmzz3m1f78blaxPn0Sedyx3ZgfCG6.jpg",
    "gFbbyMd9n6vClVVe2a12YMwkeiidUF1KBPfploni.jpg"
  ],
  colors: [],
  sizes: [],
  noSizes: true,
  inStock: true
}];/* ════════════════════════════════════════════════════════════════
   shared_data.js  —  WAZIZ SHOP
   ────────────────────────────────────────────────────────────────
   هذا الملف هو المكان الوحيد الذي تعدّل فيه المنتجات.
   لإضافة منتج: ضع الكائن الجديد في القسم المناسب أسفله.
   لحذف منتج:  احذف كامل كائنه {} من القسم المناسب.
   ────────────────────────────────────────────────────────────────
   هيكل كل منتج:
   {
     id:            رقم فريد لا يتكرر مطلقاً,
     name:          "اسم المنتج",
     price:         "السعر الحالي",
     originalPrice: "السعر الأصلي (قبل الخصم)",
     description:   "وصف قصير",
     cat:           "clothes" | "watches" | "bags" | "electronics",
     images:        ["صورة1.webp", "صورة2.webp", ...],
     colors: [
       { name:"الاسم", class:"black", inStock:true }
       // الألوان: black, white, grey, red, green, vert,
       //   blue, darkblue, lightblue, brown, marron,
       //   marron-clair, lightbrown, argent, beige, pink
     ],
     sizes:    ["m","l","xl"],  // [] = لا قياسات
     noSizes:  true,            // أضفها فقط إذا لا قياسات
     noColors: true,            // أضفها فقط إذا لا ألوان
     inStock:  true             // false = نفد المخزون
   }
════════════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════
   🧥  CLOTHES — الملابس
   أضف / احذف منتجات الملابس هنا
════════════════════════════════════════ */
const CLOTHES = [
  {
    id: 12,
    name: "Ensemble likra mkhtat",
    price: "219", originalPrice: "259",
    description: "اونصوبل ليكرا توب مليح",
    cat: "clothes",
    images: ["Untitled design (6).webp","Untitled design (7).webp"],
    colors: [
      {name:"أسود", class:"black", inStock:true},
      {name:"أبيض", class:"white", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
  {
    id: 18,
    name: "Ensemble t-shirt en SARWAL rido",
    price: "219", originalPrice: "299",
    description: "Ensemble t-shirt en SARWAL rido - جودة عالية وتصميم عصري",
    cat: "clothes",
    images: [
      "photo_2026-03-27_23-27-34.webp",
      "photo_2026-03-27_23-27-39.webp",
      "photo_2026-03-27_23-27-47.webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock:true},
      {name:"أبيض", class:"white", inStock:false},
      {name:"بني",  class:"brown", inStock:false},
      {name:"أزرق", class:"blue",  inStock:false}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
  {
    id: 17,
    name: "ENSEMBLE RIDO BLA JIB (SHOMIS & chort)",
    price: "199", originalPrice: "299",
    description: "SHOMIS & chort",
    cat: "clothes",
    images: [
      "Gemini_Generated_Image_tkom7utkom7utkom.webp",
      "Gemini_Generated_Image_3o2t5k3o2t5k3o2t.webp",
      "Gemini_Generated_Image_viswvyviswvyvisw.webp"
    ],
    colors: [
      {name:"أسود", class:"black",  inStock:true},
      {name:"أبيض", class:"white",  inStock:true},
      {name:"بني",  class:"brown",  inStock:true},
      {name:"فضي",  class:"argent", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
  {
    id: 10,
    name: "Ensemble swid",
    price: "219", originalPrice: "249",
    description: "اونصومبل توب غليض تاع البرد .",
    cat: "clothes",
    images: [
      "WhatsApp Image 2026-03-02 at 02.46.23.webp",
      "WhatsApp Image 2026-03-02 at 02.49.27.webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock:false},
      {name:"أبيض", class:"white", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
  {
    id: 6,
    name: "Sweet nike",
    price: "199", originalPrice: "299",
    description: "المليح ثوب مونطوني مقطن.",
    cat: "clothes",
    images: [
      "Gemini_Generated_Image_o3s4y2o3s4y2o3s4.webp",
      "Gemini_Generated_Image_rk9k64rk9k64rk9k.webp",
      "Gemini_Generated_Image_dhbtp9dhbtp9dhbt.webp",
      "Gemini_Generated_Image_3vprbh3vprbh3vpr.webp"
    ],
    colors: [
      {name:"Vert", class:"vert",  inStock:true},
      {name:"Noir", class:"black", inStock:false}
    ],
    sizes: ["m","l","xl"], inStock: false
  },
  {
    id: 9,
    name: "Ensemble Rédou b sensla",
    price: "229", originalPrice: "299",
    description: "اونصومبل توب غليض تاع البرد بالسنسلة مزيانة فيه جياب.",
    cat: "clothes",
    images: [
      "1760905019_IMG_0375.webp",
      "Untitled design (29).webp",
      "Untitled design (30).webp"
    ],
    colors: [
      {name:"Noir",         class:"black",        inStock:true},
      {name:"Marron clair", class:"marron-clair",  inStock:true},
      {name:"Blanc",        class:"white",         inStock:true}
    ],
    sizes: ["m","l","xl","xxl"], inStock: true
  },
  {
    id: 13,
    name: "Ensemble rido shomis et srwal",
    price: "199", originalPrice: "259",
    description: "Ensemble rido shomis et srwal",
    cat: "clothes",
    images: [
      "1754474745_WhatsApp Image 2025-08-05 at 23.47.53 (2).webp",
      "1754474745_WhatsApp Image 2025-08-05 at 23.47.53.webp",
      "1754474745_WhatsApp Image 2025-08-05 at 23.47.53 (1).webp"
    ],
    colors: [
      {name:"أسود", class:"black", inStock:true},
      {name:"أبيض", class:"white", inStock:true},
      {name:"بني",  class:"brown", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
  {
    id: 14,
    name: "Ensemble sweet likra simple",
    price: "219", originalPrice: "299",
    description: "سويت ليكرا مليح.",
    cat: "clothes",
    images: ["3.webp","1.webp","2.webp"],
    colors: [
      {name:"رمادي", class:"grey",  inStock:true},
      {name:"أبيض",  class:"white", inStock:true},
      {name:"أسود",  class:"black", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
  {
    id: 1,
    name: "Ensemble nike",
    price: "219", originalPrice: "299",
    description: "اونسومبل NIKE صيفي لرجال 💥 التوب مونطوني مقطن",
    cat: "clothes",
    images: [
      "1757028183_instagram-1756553237064.webp",
      "1757028183_IMG_20250830_122844_404 (1).webp"
    ],
    colors: [
      {name:"أخضر", class:"green", inStock:true},
      {name:"أسود",  class:"black", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: false
  }
  /* ↑↑↑ أضف ملابس جديدة هنا ↑↑↑
  ,{
    id: 20,
    name: "اسم المنتج",
    price: "200", originalPrice: "280",
    description: "وصف المنتج",
    cat: "clothes",
    images: ["img.webp"],
    colors: [{name:"أسود",class:"black",inStock:true}],
    sizes: ["m","l","xl"], inStock: true
  }
  */
];


/* ════════════════════════════════════════
   ⌚  WATCHES — الساعات
   أضف / احذف منتجات الساعات هنا
════════════════════════════════════════ */
const WATCHES = [
  {
    id: 15,
    name: "ساعة رجالية Casio",
    price: "199", originalPrice: "230",
    description: "✅ مصنوعة من مواد قوية مقاومة للصدمات والتآكل ✅ أناقة 💼 + مقاومة للماء 💧 + جودة عالية 🔋 ✅ مثالية للرجال",
    cat: "watches",
    images: [
      "photo_2025-10-25_21-42-52 (5).webp",
      "photo_2026-03-20_16-48-35.webp",
      "photo_2025-10-25_21-42-52 (2).webp",
      "photo_2025-10-25_21-42-52 (3).webp",
      "photo_2025-10-25_21-42-52 (4).webp"
    ],
    colors: [
      {name:"أزرق غامق", class:"darkblue",  inStock:true},
      {name:"أزرق فاتح", class:"lightblue", inStock:true},
      {name:"أبيض",      class:"white",     inStock:true},
      {name:"أسود",      class:"black",     inStock:true},
      {name:"أخضر",      class:"green",     inStock:true}
    ],
    sizes: [], noSizes: true, inStock: true
  }
  /* ↑↑↑ أضف ساعات جديدة هنا ↑↑↑
  ,{
    id: 30,
    name: "ساعة كلاسيك",
    price: "350", originalPrice: "450",
    description: "وصف الساعة",
    cat: "watches",
    images: ["watch.webp"],
    colors: [{name:"ذهبي",class:"argent",inStock:true}],
    sizes: [], noSizes: true, inStock: true
  }
  */
];


/* ════════════════════════════════════════
   👜  BAGS — الحقائب
   أضف / احذف منتجات الحقائب هنا
════════════════════════════════════════ */
const BAGS = [
  /* ↑↑↑ أضف حقائب جديدة هنا ↑↑↑
  {
    id: 50,
    name: "حقيبة ظهر مضادة للسرقة USB",
    price: "299", originalPrice: "399",
    description: "حقيبة عصرية مضادة للسرقة مع منفذ USB",
    cat: "bags",
    images: ["bag1.webp","bag2.webp"],
    colors: [
      {name:"أسود",  class:"black", inStock:true},
      {name:"رمادي", class:"grey",  inStock:true}
    ],
    sizes: [], noSizes: true, inStock: true
  }
  */
];


/* ════════════════════════════════════════
   🔌  ELECTRONICS — الإلكترونيات
   أضف / احذف إلكترونيات هنا
════════════════════════════════════════ */



/* ════════════════════════════════════════════════════════════
   دمج الكل — لا تعدّل هذا السطر أبداً
════════════════════════════════════════════════════════════ */
const products = [...CLOTHES, ...WATCHES, ...BAGS, ...ELECTRONICS];
