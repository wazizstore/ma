/**
 * WAZIZ SHOP - Google Sheets Order Handler
 * Uses SpreadsheetApp.openById() with your specific sheet ID
 */

// Your Google Sheet ID - DO NOT CHANGE
const SHEET_ID = '1ZfC3N0JWdV8JuE-KIqUC1WTsrQnI9k7b0Bhq-xtRtGE';
const SHEET_NAME = 'Orders';
const HEADERS = ['الاسم', 'الهاتف', 'المدينة', 'العنوان', 'المنتج', 'اللون', 'المقاس', 'السعر', 'التاريخ'];

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'WAZIZ SHOP Order API is running. Send POST requests to submit orders.',
      sheetId: SHEET_ID
    }, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle POST requests - Main entry point
 */
function doPost(e) {
  try {
    // Parse request body
    let data = {};
    
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      // Try to parse as JSON anyway
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        throw new Error('Invalid request format. Please send JSON.');
      }
    }

    // Validate required fields
    const required = ['name', 'phone', 'city', 'address', 'items'];
    for (const field of required) {
      if (!data[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
      if (typeof data[field] === 'string' && data[field].trim() === '') {
        throw new Error(`Empty field: ${field}`);
      }
    }

    // Validate items
    if (!Array.isArray(data.items) || data.items.length === 0) {
      throw new Error('Items must be a non-empty array');
    }

    // Save order to sheet
    const result = saveOrderToSheet(data);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Order saved successfully',
        orderId: result.orderId,
        timestamp: result.timestamp,
        itemCount: result.itemCount
      }, null, 2))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Order submission error:', error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }, null, 2))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Save order to Google Sheet using openById
 */
function saveOrderToSheet(data) {
  // Open spreadsheet by ID
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setValues([HEADERS]);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f3f4f6');
    sheet.setFrozenRows(1);
    
    // Set column widths
    const widths = [180, 140, 140, 250, 200, 120, 100, 120, 180];
    for (let i = 0; i < widths.length; i++) {
      sheet.setColumnWidth(i + 1, widths[i]);
    }
  }

  // Prepare rows for each item
  const rows = [];
  const timestamp = new Date();
  const formattedDate = Utilities.formatDate(
    timestamp, 
    Session.getScriptTimeZone(), 
    'yyyy-MM-dd HH:mm:ss'
  );
  
  for (const item of data.items) {
    // Handle product name - could be string or object
    let productName = '';
    let color = '';
    let size = '';
    let price = '';
    
    if (typeof item === 'string') {
      // If item is just a string (shouldn't happen but safe)
      productName = item;
    } else if (typeof item === 'object') {
      // Handle all possible item structures
      productName = item.name || item.productName || 'Product';
      color = item.color || '';
      size = item.size || '';
      price = item.price ? String(item.price) + ' درهم' : '';
      
      // If no color/size fields, check for variants
      if (!color && !size) {
        if (item.variant) {
          if (typeof item.variant === 'string') {
            productName = productName + ' (' + item.variant + ')';
          }
        }
      }
    }
    
    const row = [
      String(data.name || '').trim(),
      String(data.phone || '').trim(),
      String(data.city || '').trim(),
      String(data.address || '').trim(),
      productName,
      color,
      size,
      price,
      formattedDate
    ];
    rows.push(row);
  }

  // Append all rows
  if (rows.length > 0) {
    const startRow = sheet.getLastRow() + 1;
    const range = sheet.getRange(startRow, 1, rows.length, HEADERS.length);
    range.setValues(rows);
  }

  return {
    orderId: `ORD-${String(sheet.getLastRow() - 1).padStart(4, '0')}`,
    timestamp: formattedDate,
    itemCount: rows.length
  };
}

/**
 * Test function - Run this manually to verify setup
 */
function testOrder() {
  const testData = {
    name: 'Test Customer',
    phone: '0612345678',
    city: 'Casablanca',
    address: '123 Test Street',
    items: [
      { name: 'Test Product 1', color: 'Black', size: 'L', price: '199' },
      { name: 'Test Product 2', color: '', size: '', price: '249' }
    ]
  };
  
  const result = saveOrderToSheet(testData);
  console.log('Test order saved:', result);
  return result;
}

/**
 * Get all orders (Admin function - optional)
 */
function getOrders() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) return [];
  
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues();
  const orders = [];
  
  for (const row of data) {
    const order = {};
    for (let i = 0; i < HEADERS.length; i++) {
      order[HEADERS[i]] = row[i];
    }
    orders.push(order);
  }
  
  return orders;
}
