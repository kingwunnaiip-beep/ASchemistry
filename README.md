# ASchemistry

This project is a static chemistry quiz app for AS/A Level practice.

## Shared result tracking

If you want to collect marks from many students in one place, use a Google Apps Script web app as the shared result endpoint.

### 1. Create a Google Sheet
Open Google Sheets and create a new spreadsheet.

### 2. Add the Apps Script
Open Extensions → Apps Script and paste the code from the file named google-script-template.gs in this repo.

### 3. Deploy as a web app
- Click Deploy → New deployment
- Select type: Web app
- Execute as: Me
- Who has access: Anyone
- Deploy
- Copy the web app URL

### 4. Share the quiz link with students
Add the web app URL as the sheet parameter in the quiz link:

https://kingwunnaiip-beep.github.io/ASchemistry/?sheet=PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE

The app will send each student result to the shared sheet automatically. If the URL is blank, results stay saved locally in the browser for exporting as CSV.

### 5. View marks
Open the Google Sheet and all submitted results appear as rows with:
- date
- candidate name
- score
- total
- percentage
- best streak
- missed topics
- question-by-question response details
