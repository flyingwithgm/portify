// Landing page functionality
function initializeLandingPage() {
    const startBuildingBtns = document.querySelectorAll('[id^="start-building"]');
    
    startBuildingBtns.forEach(btn => {
        btn.addEventListener('click', showResumeBuilder);
    });
}

function showResumeBuilder() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('resume-builder').classList.remove('hidden');
    document.title = "ResumeForge Pro - Build Your Resume";
    window.scrollTo(0, 0);
    
    // Initialize the builder if not already done
    if (typeof initializeBuilder === 'function') {
        initializeBuilder();
    }
}

// Initialize when DOM is loaded
if (document.getElementById('landing-page')) {
    initializeLandingPage();
}
