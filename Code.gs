/**
 * @description Handles POST requests from the Bharatescapes Tour Registration form.
 * It saves the uploaded file to a specific Google Drive folder and appends the
 * form data, including the file URL, to a Google Sheet.
 *
 * @param {Object} e - The event parameter for a POST request.
 * @returns {ContentService.TextOutput} A JSON object indicating success or error.
 */

// --- CONFIGURATION ---
const SPREADSHEET_ID = "1qhSG1qWNch7fSazUGRlyhXM9F8O70wvs6aCFNhBGJ5k";
const GOOGLE_DRIVE_FOLDER_ID = "1ljIhAcNDw-XDl8vhOYwBaG2rQzBts0YX";
const TOUR_REGISTRATIONS_SHEET_NAME = "Tour Registrations";
const CONTACT_INQUIRIES_SHEET_NAME = "Contact Inquiries";

/**
 * Main entry point for all POST requests from your website.
 * NOTE: Running this function manually from the Apps Script editor will always result in an error,
 * because the 'e' (event) object is not provided. It must be triggered by a real form submission.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Invalid request: No POST data received. This is expected if running the script manually.");
    }
    
    const data = JSON.parse(e.postData.contents);
    Logger.log("Received data for form: " + (data.formType || 'Unknown'));
    
    const formType = data.formType;
    
    if (formType === 'contact') {
      return handleContactInquiry(data);
    } else if (formType === 'tour-registration') {
      return handleTourRegistration(data);
    } else {
      throw new Error("Processing error: 'formType' is missing or unknown. Received: " + formType);
    }

  } catch (error) {
    Logger.log("CRITICAL doPost Error: " + error.toString() + " Stack: " + (error.stack || 'No stack available'));
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: "Server-side script error: " + error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles submissions for the Tour Registration form.
 */
function handleTourRegistration(data) {
  try {
    Logger.log("Starting handleTourRegistration for: " + data.fullName);
    
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(TOUR_REGISTRATIONS_SHEET_NAME);
    if (!sheet) {
      // This is a common point of failure.
      throw new Error(`Configuration error: A sheet with the exact name "${TOUR_REGISTRATIONS_SHEET_NAME}" was not found. Please check for typos.`);
    }
    
    const folder = DriveApp.getFolderById(GOOGLE_DRIVE_FOLDER_ID);
    let fileUrl = 'N/A';

    if (data.fileData && data.mimeType && data.fileName) {
      Logger.log("File data found. Uploading to Drive.");
      const decoded = Utilities.base64Decode(data.fileData);
      const blob = Utilities.newBlob(decoded, data.mimeType, data.fileName);
      const uniqueFileName = `${data.fullName || 'Unknown'}_${data.idProofType || 'ID'}_${new Date().getTime()}`;
      const newFile = folder.createFile(blob).setName(uniqueFileName);
      newFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = newFile.getUrl();
      Logger.log("File uploaded successfully: " + fileUrl);
    } else {
      Logger.log("No file data was included in the submission for " + data.fullName);
    }

    const rowData = [
      new Date(),
      data.tourType || '', data.tourDate || '', data.fullName || '',
      data.mobileNumber || '', data.email || '', data.cityCountry || '',
      data.emergencyName || '', data.emergencyNumber || '', data.vehicleType || '',  data.hasLicense || '',
      data.riderType || '', data.medicalInfo || '', data.allergies || '',
      data.bloodGroup || '', data.idProofType || 'N/A', fileUrl
    ];
    
    Logger.log("Data prepared. Appending to sheet: " + JSON.stringify(rowData));
    
    sheet.appendRow(rowData);
    
    // Force the updates to be written to the sheet immediately.
    SpreadsheetApp.flush();
    
    Logger.log("Successfully appended row for: " + data.fullName);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', form: 'tour-registration' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("ERROR in handleTourRegistration: " + error.toString() + " Stack: " + (error.stack || 'No stack available'));
    throw error;
  }
}

/**
 * Handles submissions for the Contact Us form.
 */
function handleContactInquiry(data) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(CONTACT_INQUIRIES_SHEET_NAME);
    if (!sheet) {
      throw new Error(`Configuration error: Sheet with name "${CONTACT_INQUIRIES_SHEET_NAME}" was not found.`);
    }
    const rowData = [
      new Date(), data.name || '', data.whatsapp || '', data.email || '',
      data.people || '', data.dates || '', data.message || ''
    ];
    sheet.appendRow(rowData);
    SpreadsheetApp.flush();
    Logger.log("Appended row to Contact Inquiries for: " + data.name);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', form: 'contact-inquiry' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("ERROR in handleContactInquiry: " + error.toString() + " Stack: " + (error.stack || 'No stack available'));
    throw error;
  }
}