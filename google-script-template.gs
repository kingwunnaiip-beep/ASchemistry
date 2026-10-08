function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents || '{}');

  const row = [
    new Date().toISOString(),
    data.candidate || '',
    Number(data.score || 0),
    Number(data.total || 0),
    Number(data.percentage || 0),
    Number(data.bestStreak || 0),
    JSON.stringify(data.missedTopics || []),
    JSON.stringify(data.responses || [])
  ];

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, rows: sheet.getLastRow() }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput('ASchemistry result collector is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
