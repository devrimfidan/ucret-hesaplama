// Google Apps Script code that should be deployed as a web app
// This file is for reference - copy this code to your Google Apps Script project

function doGet(e) {
  // Enable CORS
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Sample tuition data - replace this with your actual data source
  const tuitionData = [
    {
      "Admit_Type": "LYS",
      "Turkish_Citizen": "Yes", 
      "Academic_Program": "Engineering",
      "Admit_Year": 2025,
      "LYS_Scholarship": "None",
      "Waivers": "None",
      "Sibling_Discount": "No",
      "Payment_Methods": "Single Payment",
      "Tuition_Fee": 1565000,
      "Currency": "Turkish Lira"
    },
    {
      "Admit_Type": "LYS",
      "Turkish_Citizen": "Yes",
      "Academic_Program": "School of Medicine", 
      "Admit_Year": 2025,
      "LYS_Scholarship": "None",
      "Waivers": "None",
      "Sibling_Discount": "No", 
      "Payment_Methods": "Single Payment",
      "Tuition_Fee": 2330000,
      "Currency": "Turkish Lira"
    },
    {
      "Admit_Type": "International",
      "Turkish_Citizen": "No",
      "Academic_Program": "Engineering",
      "Admit_Year": 2025, 
      "LYS_Scholarship": "None",
      "Waivers": "None",
      "Sibling_Discount": "No",
      "Payment_Methods": "Single Payment", 
      "Tuition_Fee": 28000,
      "Currency": "US Dollar"
    },
    {
      "Admit_Type": "LYS",
      "Turkish_Citizen": "Yes",
      "Academic_Program": "Business",
      "Admit_Year": 2024,
      "LYS_Scholarship": "25%", 
      "Waivers": "None",
      "Sibling_Discount": "No",
      "Payment_Methods": "Installment",
      "Tuition_Fee": 1200000,
      "Currency": "Turkish Lira"
    },
    {
      "Admit_Type": "LYS",
      "Turkish_Citizen": "Yes", 
      "Academic_Program": "Other",
      "Admit_Year": 2025,
      "LYS_Scholarship": "50%",
      "Waivers": "None", 
      "Sibling_Discount": "Yes",
      "Payment_Methods": "Single Payment",
      "Tuition_Fee": 782500,
      "Currency": "Turkish Lira"
    }
  ];
  
  // Return the data as JSON
  output.setContent(JSON.stringify(tuitionData));
  
  return output;
}

// Alternative method that might work better for CORS
function doPost(e) {
  return doGet(e);
}

/* 
DEPLOYMENT INSTRUCTIONS:
1. Save this code in your Google Apps Script project
2. Click "Deploy" > "New Deployment"
3. Choose type: "Web app"
4. Set "Execute as": "Me" 
5. Set "Who has access": "Anyone"
6. Click "Deploy"
7. Copy the web app URL and use it in your HTML file

IMPORTANT: Make sure to redeploy whenever you make changes!
*/
