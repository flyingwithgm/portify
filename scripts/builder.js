// Resume builder functionality
let skills = ['JavaScript', 'React', 'Node.js'];
let customColor = '#2563eb';

function initializeBuilder() {
    // Load saved data
    const savedData = JSON.parse(localStorage.getItem('resumeData'));
    if (savedData) {
        loadFormData(savedData);
    } else {
        // Set initial values
        addExperienceField(true);
        addEducationField(true);
        addProjectField(true);
    }

    // Initialize event listeners
    setupEventListeners();
    updatePreview();
}

function setupEventListeners() {
    // Theme and template selectors
    document.getElementById('theme-selector').addEventListener('change', handleThemeChange);
    document.getElementById('template-selector').addEventListener('change', handleTemplateChange);
    
    // Form fields
    document.getElementById('photo-upload').addEventListener('change', handlePhotoUpload);
    document.getElementById('add-experience').addEventListener('click', () => addExperienceField());
    document.getElementById('add-education').addEventListener('click', () => addEducationField());
    document.getElementById('add-skill').addEventListener('click', addSkill);
    document.getElementById('add-project').addEventListener('click', () => addProjectField());
    
    // AI Assistant
    document.getElementById('ai-submit').addEventListener('click', generateAIResponse);
    document.getElementById('generate-cover-letter').addEventListener('click', generateCoverLetter);
}

// All other builder functions (addExperienceField, addEducationField, etc.)
// would go here, similar to your original implementation
// but properly organized and separated
