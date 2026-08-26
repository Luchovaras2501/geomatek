/**
 * Backend Google Apps Script para Google Sheets
 * Gestiona registros de Cursos y Webinars.
 */

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Inscripciones");
    
    if (!sheet) {
      sheet = ss.insertSheet("Inscripciones");
      sheet.appendRow([
        "Fecha Registro", 
        "Nombre Completo", 
        "Email", 
        "Teléfono / WhatsApp", 
        "País / Ciudad", 
        "ID CURSO / Webinar", 
        "Título", 
        "Estado"
      ]);
    }
    
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.courseId || '',
      data.courseTitle || '',
      'Pendiente'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      message: "Registro almacenado exitosamente" 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
