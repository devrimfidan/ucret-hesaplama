# Koç University Tuition Fee Calculator

A comprehensive, bilingual tuition fee calculator for Koç University with a modern 3-step wizard interface.

## 🎯 Overview

This application provides prospective and current students with an easy-to-use tool to calculate their tuition fees based on various criteria including academic program, admission type, scholarships, and discounts. The calculator features a professional interface with Koç University branding and complete Turkish/English language support.

## ✨ Features

### Core Functionality
- **3-Step Wizard**: Clean, guided interface for entering student information
- **Comprehensive Calculations**: Handles scholarships, waivers, sibling discounts, and payment methods
- **Bilingual Support**: Complete Turkish/English translation system with localStorage persistence
- **Dynamic Results**: Real-time fee calculations with detailed breakdowns
- **Professional UI**: Koç University branded interface with modern design

### Technical Features
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Robust fallback system when data files are unavailable
- **Data Validation**: Input validation and user feedback throughout the process
- **Accessibility**: Enhanced UI with larger dropdowns and clear navigation
- **Legal Compliance**: Built-in disclaimer for informational use

## 🏗️ Project Structure

```
ucret-hesaplama/
├── index.html                 # Main application page with Koç University branding
├── assets/
│   ├── fees.js               # Complete application logic and wizard functionality
│   ├── fees.json             # Core tuition fee data (2015-2024)
│   └── translations.json     # Bilingual translations (Turkish/English)
└── README.md                 # This documentation file
```

### File Descriptions

#### `index.html`
- **Purpose**: Application structure and styling
- **Features**: 3-step wizard layout, Koç University branding (#A6192E), enhanced CSS
- **Dependencies**: Links to assets/fees.js for functionality
- **UI Elements**: Logo (links to index.html), step counter, language switcher, disclaimer

#### `assets/fees.js`
- **Purpose**: Complete application logic and user interaction handling
- **Key Systems**:
  - Translation engine with localStorage persistence
  - 3-step wizard navigation with validation
  - 4-tier discount calculation system
  - Dynamic UI updates and form population
  - Error handling and fallback data management
- **Main Functions**:
  - `loadTranslations()`: Loads bilingual translation data
  - `t()`: Translation function with parameter interpolation
  - `switchLanguage()`: Language switching with UI updates
  - `calculateResults()`: Core fee calculation with discount logic
  - `loadTuitionData()`: Data loading with error handling

#### `assets/fees.json`
- **Purpose**: Core tuition fee data repository
- **Coverage**: Academic years 2015-2024
- **Structure**: Admit_Year, Academic_Program, Admit_Type, Citizenship, fees, Currency
- **Data Quality**: Clean structure without discount fields (calculated in JavaScript)

#### `assets/translations.json`
- **Purpose**: Complete bilingual localization
- **Languages**: Turkish (tr) and English (en)
- **Coverage**: All UI elements, form options, error messages, results, disclaimer
- **Structure**: Nested JSON with logical grouping (page, steps, fields, buttons, results)

## 🚀 Setup Instructions

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (recommended for development)

### Installation

1. **Clone or download** the project files to your desired directory:
   ```bash
   git clone [repository-url]
   cd ucret-hesaplama
   ```

2. **Set up a local web server** (required for proper JSON file loading):
   
   **Option A: Python (if installed)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Node.js (if installed)**
   ```bash
   npx http-server
   ```
   
   **Option C: VS Code Live Server extension**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Access the application**:
   - Open your browser and navigate to `http://localhost:8000` (or the port shown by your server)
   - The application should load with the Koç University branded interface

### Troubleshooting

#### Common Issues

**"Veri yüklenirken hata oluştu" (Data loading error)**
- **Cause**: CORS restrictions when opening the HTML file directly in browser
- **Solution**: Use a local web server as described in setup instructions
- **Fallback**: The application includes sample data for testing purposes

**Language switching not working**
- **Cause**: localStorage might be disabled in browser
- **Solution**: Enable localStorage or use private/incognito mode for testing

**Calculations seem incorrect**
- **Verify**: Check that all form fields are properly selected
- **Debug**: Open browser developer tools (F12) to see console logs

## 🎮 Usage Guide

### Step 1: Basic Information
1. **Select Admit Year**: Choose your admission year (2015-2024)
2. **Choose Academic Program**: Select your program (Engineering, Medicine, etc.)
3. **Pick Admission Type**: Choose between LYS, International, or Transfer
4. Click **"İleri"/"Next"** to proceed

### Step 2: Scholarships and Discounts
1. **LYS Scholarship**: If applicable, select your scholarship percentage (appears for LYS students)
2. **General Waivers**: Choose any general scholarship/waiver percentage
3. **Sibling Discount**: Select if you have siblings at the university
4. Click **"İleri"/"Next"** to continue

### Step 3: Final Details
1. **Citizenship Status**: Select Turkish Citizen or International
2. **Payment Method**: Choose your preferred payment schedule
3. Click **"Hesapla"/"Calculate"** to see your results

### Results Interpretation

The calculator provides detailed breakdowns including:
- **Base tuition fees** for your program and year
- **Applied discounts** with percentages and amounts
- **Final tuition amounts** after all discounts
- **Payment schedules** based on your selected method
- **Currency information** (Turkish Lira or US Dollar)

## ⚙️ Technical Implementation

### Architecture Overview

The application follows a modular architecture with clear separation of concerns:

1. **Presentation Layer** (`index.html`): Structure and styling
2. **Logic Layer** (`assets/fees.js`): Business logic and user interactions
3. **Data Layer** (`assets/fees.json`): Core tuition data
4. **Localization Layer** (`assets/translations.json`): Translation system

### Key Technical Decisions

**Translation System**
- Implements complete i18n with parameter interpolation
- Stores language preference in localStorage
- Supports dynamic UI updates without page reload

**Discount Calculation**
- 4-tier discount system: LYS → General Waivers → Sibling → Final calculation
- JavaScript-based calculations for flexibility
- Separate discount logic from base data

**Error Handling**
- Graceful fallback to sample data when JSON files are unavailable
- User-friendly error messages in both languages
- Console logging for development debugging

**UI/UX Enhancements**
- Removed form labels for cleaner interface
- Integrated titles into dropdown placeholders
- Language switcher positioned next to step counter
- Legal disclaimer for informational use protection

### Data Flow

1. **Application Initialization**:
   - Load saved language preference
   - Fetch translation files
   - Load tuition data (with fallback)
   - Populate form dropdowns
   - Set up event listeners

2. **User Interaction**:
   - Validate form inputs
   - Update dependent dropdowns
   - Handle special cases (LYS scholarship visibility)
   - Navigate between steps

3. **Calculation Process**:
   - Match user selections to data records
   - Apply discount calculations in sequence
   - Generate detailed results breakdown
   - Display formatted output

## 🔒 Legal and Compliance

The application includes a legal disclaimer stating that the tool is for informational purposes only. Users should verify all calculations with official university sources before making financial decisions.

## 🛠️ Development and Maintenance

### Code Organization

The JavaScript code is thoroughly documented with:
- **Header comments** explaining overall architecture
- **Function-level documentation** with parameters and return values
- **Inline comments** explaining complex logic
- **Section dividers** for easy navigation

### Extending the Application

**Adding New Academic Years**:
1. Update `assets/fees.json` with new year data
2. No code changes required (automatically populated)

**Adding New Languages**:
1. Extend `assets/translations.json` with new language object
2. Update language switching logic in `assets/fees.js`
3. Add language option to UI

**Modifying Discount Logic**:
1. Update calculation functions in `assets/fees.js`
2. Ensure translations cover any new UI elements
3. Test with various scenarios

### Performance Considerations

- **Data Loading**: Single JSON file load with client-side filtering
- **Memory Usage**: Efficient data structures and minimal DOM manipulation
- **Network Requests**: Minimal external dependencies, local asset loading

## 📞 Support and Troubleshooting

For technical issues or questions:

1. **Check Browser Console**: Open Developer Tools (F12) for error messages
2. **Verify Setup**: Ensure local web server is running properly
3. **Test Fallback**: Application should work with sample data even if JSON files fail
4. **Clear Cache**: Try clearing browser cache and localStorage

## 🔄 Version History

- **v3.0**: Complete translation system and UI enhancements
- **v2.0**: Separated file structure and improved wizard flow
- **v1.0**: Initial 3-step wizard with Koç University branding

---

*This tool is provided for informational purposes only. Please verify all calculations with official Koç University sources.*
