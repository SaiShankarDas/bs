/**
 * @description Handles POST requests from the Bharatescapes Tour Registration form.
 * It saves the uploaded file to a specific Google Drive folder and appends the
 * form data, including the file URL, to a Google Sheet.
 *
 * @param {Object} e - The event parameter for a POST request.
 * @returns {ContentService.TextOutput} A JSON object indicating success or error.
 */

// --- CONFIGURATION ---
// Replace with your Google Sheet ID and the name of the tab (sheet).
const SHEET_ID = '10M75ttT5EjepAJPDFajMZGFlzbsRrzypeTs9s69BIBw';
const SHEET_NAME = 'Registrations';

// Replace with your Google Drive Folder ID.
const DRIVE_FOLDER_ID = '1Y7yziD5pPgfqS5eO-IIRUYJI_doYzVpP';
// --- END CONFIGURATION ---

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);

    let fileUrl = 'N/A';
    const params = e.parameter;

    // Handle file upload if present
    if (e.postData && e.postData.blobs && e.postData.blobs.length > 0) {
      const fileBlob = e.postData.blobs[0];
      
      // Create a unique file name
      const timestamp = new Date().toISOString().replace(/:/g, '-');
      const fullName = params.fullName ? params.fullName.replace(/\s+/g, '_') : 'Unknown';
      const idType = params.idProofType ? params.idProofType.replace(/\s+/g, '_') : 'ID_Proof';
      const originalFileName = fileBlob.getName() || 'upload.jpg';
      const fileExtension = originalFileName.includes('.') ? originalFileName.split('.').pop() : 'jpg';
      const newFileName = `${timestamp}_${fullName}_${idType}.${fileExtension}`;
      
      const file = folder.createFile(fileBlob.setName(newFileName));
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    // IMPORTANT: The order here MUST match the column order in your Google Sheet
    const newRow = [
      new Date(params.timestamp), // Column A: Timestamp
      params.tourType,            // Column B: Tour Type
      params.tourDate,            // Column C: Tour Date
      params.fullName,            // Column D: Full Name
      params.mobileNumber,        // Column E: Mobile Number
      params.email,               // Column F: Email
      params.cityCountry,         // Column G: City/Country
      params.emergencyName,       // Column H: Emergency Name
      params.emergencyNumber,     // Column I: Emergency Number
      params.hasLicense,          // Column J: Has License?
      params.riderType,           // Column K: Rider Type
      params.medicalInfo,         // Column L: Medical Info
      params.allergies,           // Column M: Allergies
      params.bloodGroup,          // Column N: Blood Group
      fileUrl                     // Column O: ID Proof URL (You need to add this column)
    ];

    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'data': 'Row appended successfully.' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log(error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString(), 'stack': error.stack }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
