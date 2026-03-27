/**
 * Bharatescapes Trip Registration Backend
 * Handles multiple file uploads (ID, Payment, Signature) and logs data to Google Sheets.
 */

// ========== CONFIGURATION ==========
const SPREADSHEET_ID = "1QZO6vDvV2gK--AVY0DXFKvGaXw_DuCo_jeB3u4N9eUQ";
const GOOGLE_DRIVE_FOLDER_ID = "1Z-HE2NHvbkxUsfsVeJg6Lo9Ml_SXICc6";
const SHEET_NAME = "Trip Registrations";
const ADMIN_EMAIL = "whereabouthostels@gmail.com";
// ====================================

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Invalid request: No POST data received.");
    }

    var data = JSON.parse(e.postData.contents);
    Logger.log("Received data for: " + (data.fullName || "Unknown"));

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error('Sheet "' + SHEET_NAME + '" not found. Please create a sheet named "' + SHEET_NAME + '".');
    }

    var folder = DriveApp.getFolderById(GOOGLE_DRIVE_FOLDER_ID);

    // --- Helper: Save Base64 File to Drive ---
    function saveFileToDrive(base64Data, prefix) {
      if (!base64Data || base64Data.length < 50) return "N/A";
      try {
        var parts = base64Data.split(',');
        if (parts.length < 2) return "Invalid base64 format";

        var mimeMatch = parts[0].match(/data:(.*?);/);
        var mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
        var extension = mimeType.split('/')[1] || 'png';
        if (extension === 'jpeg') extension = 'jpg';

        var decoded = Utilities.base64Decode(parts[1]);
        var safeName = (data.fullName || "unknown").replace(/[^a-z0-9]/gi, '_').toLowerCase();
        var fileName = prefix + "_" + safeName + "_" + Date.now() + "." + extension;

        var blob = Utilities.newBlob(decoded, mimeType, fileName);
        var file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        
        return file.getUrl();
      } catch (err) {
        Logger.log("Upload error (" + prefix + "): " + err.toString());
        return "Upload Error: " + err.toString();
      }
    }

    // --- Process Uploads ---
    var idPhotoUrl = saveFileToDrive(data.idPhoto, "id");
    var paymentProofUrl = saveFileToDrive(data.paymentProof, "payment");
    var signatureUrl = saveFileToDrive(data.signature, "sig");

    // Debug logging to help identify why cells are empty
    Logger.log("ID Photo: " + (data.idPhoto ? "received (" + data.idPhoto.length + " chars)" : "NOT received"));
    Logger.log("Payment Proof: " + (data.paymentProof ? "received (" + data.paymentProof.length + " chars)" : "NOT received"));
    Logger.log("Signature: " + (data.signature ? "received (" + data.signature.length + " chars)" : "NOT received"));

    // --- Prepare Row Data (27 Columns: A to AA) ---
    var rowData = [
      new Date(),                        // A: Timestamp
      data.destination || "",            // B: Destination
      data.fullName || "",               // C: Full Name
      data.dob || "",                    // D: DOB
      data.gender || "",                 // E: Gender
      data.nationality || "",            // F: Nationality
      data.phone || "",                  // G: Phone
      data.email || "",                  // H: Email
      data.address || "",                // I: Address
      data.emergencyName || "",          // J: Emergency Name
      data.emergencyRelationship || "",  // K: Emergency Relationship
      data.emergencyPhone || "",         // L: Emergency Phone
      data.tripDates || "",              // M: Trip Dates
      data.departureCity || "",          // N: Departure City
      data.participants || "",           // O: Participants
      data.hasMedicalCondition || "",    // P: Medical Conditions
      data.medicalDetails || "",         // Q: Medical Details
      data.physicallyFit || "",          // R: Physically Fit
      data.allergies || "",              // S: Allergies
      data.idType || "",                 // T: ID Type
      idPhotoUrl,                        // U: ID Photo URL
      data.accommodation || "",          // V: Accommodation
      data.totalCost || "",              // W: Total Cost
      data.amountPaid || "",             // X: Amount Paid
      data.paymentMode || "",            // Y: Payment Mode
      paymentProofUrl,                   // Z: Payment Proof URL
      signatureUrl                       // AA: Signature URL
    ];

    sheet.appendRow(rowData);
    SpreadsheetApp.flush();

    // --- Send Email Notification ---
    try {
      var subject = "✅ New Trip Registration - " + (data.fullName || "Guest");
      var body = "New Trip Registration Details:\n\n" +
                 "👤 Name: " + data.fullName + "\n" +
                 "📍 Destination: " + data.destination + "\n\n" +
                 "📎 Links:\n" +
                 "--- ID Photo: " + idPhotoUrl + "\n" +
                 "--- Payment Proof: " + paymentProofUrl + "\n" +
                 "--- Signature: " + signatureUrl + "\n\n" +
                 "🕒 Submitted on: " + new Date().toString();

      MailApp.sendEmail(ADMIN_EMAIL, subject, body);
    } catch (e) {
      Logger.log("Email notification failed: " + e.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("POST ERROR: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
vice.MimeType.JSON);
  }
}