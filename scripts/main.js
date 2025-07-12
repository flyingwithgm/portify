// Shared functionality across the application
const { jsPDF } = window.jspdf;

// Theme management
function applyTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('resumeTheme', theme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('resumeTheme') || 'light';
    applyTheme(savedTheme);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
});
