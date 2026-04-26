/* ════════════════════════════════════════════════════════════════
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
     cat:           "clothes" | "watches" | "bags" | "home",
     images:        ["صورة1.webp", "صورة2.webp", ...],
     colors: [
       { name:"الاسم", class:"black", inStock:true }
     ],
     sizes:    ["m","l","xl"],
     noSizes:  true,
     noColors: true,
     inStock:  true
   }
════════════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════
   🧥  CLOTHES — الملابس
════════════════════════════════════════ */
const CLOTHES = [{
    id: 12,
    name: "Ensemble nike",
    price: "219", originalPrice: "259",
    description: "اونصوبل ليكرا توب مليح",
    cat: "clothes",
    images: ["Untitled design (63).png","Untitled design (65).png"],
    colors: [
      {name:"أسود", class:"black", inStock:true},
      {name:"أبيض", class:"white", inStock:true}
    ],
    sizes: ["m","l","xl"], inStock: true
  },
 
  {
    id: 17,
    name: "ENSEMBLE (SHOMIS & chort)",
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
    id: 13, 
    name: "Ensemble shomis",
    price: "219", originalPrice: "259",
    description: "Ensemble rido shomis et srwal",
    cat: "clothes",
    images: [
      "Untitled design (72).png",
      "Untitled design (71).png",
      "Untitled design (70).png"
    ],
    colors: [
      {name:"أسود", class:"black", inStock:true},
      {name:"أبيض", class:"white", inStock:true},
      {name:"بني",  class:"brown", inStock:true}
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
  }
 
];


/* ════════════════════════════════════════
   ⌚  WATCHES — الساعات
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
];


/* ════════════════════════════════════════
   👜  BAGS — الحقائب
════════════════════════════════════════ */
const BAGS = [ 
{
  id: 19,
  name: "حقيبة ظهر مضادة للسرقة USB",
  price: 199,
  originalPrice: 230,
  description: "حقيبة عصرية متعددة الاستعمالات تجمع بين التصميم العملي والأمان العالي وتوفر سعة كبيرة وتنظيما ذكيا لجميع أغراضك...",
  cat: "bags",
  images: [
    "S8a9008ad7c564373819a9484fc75c508p.webp",
    "Sa89a2bf9a08940a5ad4cb9acc46f9fd4m.webp",
    "S0d508506754744ccbf016a04a9451206j.webp"
  ],
  colors: [],
  sizes: [],
  noSizes: true,
  inStock: true
}
];


/* ════════════════════════════════════════
   🏠  HOME — الاجهزة
   أضف / احذف منتجات الاجهزة هنا
════════════════════════════════════════ */
const HOME = [{
  id: 20,
  name: "جهاز ترطيب الهواء المحمول",
  price: 199,
  originalPrice: 230,
  description: "7 ألوان, وشاحن USB , خزان مياه قوي 600 مل يمكنك ضبط سرعة الرياح والتحكم بما يناسبك",
  cat: "home",
  images: [
    "1X8jzYJwRgyOlpuhinq48qebrFdKjZG6bsek7Qdw (1).jpg",
    "tJPPPVdCfuNpmzz3m1f78blaxPn0Sedyx3ZgfCG6.jpg",
    "gFbbyMd9n6vClVVe2a12YMwkeiidUF1KBPfploni.jpg"
  ],
  colors: [],
  sizes: [],
  noSizes: true,
  inStock: true
}];


/* ════════════════════════════════════════════════════════════
   دمج الكل — لا تعدّل هذا السطر أبداً
════════════════════════════════════════════════════════════ */
const products = [...CLOTHES, ...WATCHES, ...BAGS, ...HOME];
