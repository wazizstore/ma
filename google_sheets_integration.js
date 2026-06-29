// ========================================
// Google Sheets Integration for Orders
// ========================================

// استبدل هذا بـ URL نقطة نهاية Google Apps Script الخاصة بك
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbeHRCJb24OZOeoYDzW2uqKuYmx9aPh_gMx0jVg81IbXRyLCbBrVhVTaCxE1sVfSZg/exec'; // مثال: https://script.google.com/macros/s/AKfycb.../exec

/**
 * إرسال الطلب إلى Google Sheets عبر Google Apps Script
 * @param {Object} orderData - بيانات الطلب
 * @returns {Promise<boolean>} - true إذا نجح الإرسال، false إذا فشل
 */
async function sendOrderToGoogleSheets(orderData) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData),
      mode: 'no-cors' // مهم: يسمح بـ CORS من GitHub Pages
    });

    // لأن mode: 'no-cors' لا يسمح بقراءة الاستجابة، نفترض النجاح إذا لم يحدث خطأ
    return true;
  } catch (error) {
    console.error('Error sending order to Google Sheets:', error);
    return false;
  }
}

/**
 * دالة بديلة باستخدام image beacon (أكثر موثوقية مع no-cors)
 * @param {Object} orderData - بيانات الطلب
 * @returns {Promise<boolean>}
 */
async function sendOrderToGoogleSheetsBeacon(orderData) {
  try {
    // تحويل البيانات إلى Base64 لتمريرها في URL
    const encodedData = btoa(JSON.stringify(orderData));
    
    // استخدام navigator.sendBeacon للموثوقية العالية
    if (navigator.sendBeacon) {
      const formData = new FormData();
      formData.append('data', encodedData);
      navigator.sendBeacon(GOOGLE_APPS_SCRIPT_URL, formData);
      return true;
    } else {
      // الرجوع إلى fetch إذا لم يكن sendBeacon متاحاً
      return await sendOrderToGoogleSheets(orderData);
    }
  } catch (error) {
    console.error('Error sending order via beacon:', error);
    return false;
  }
}
