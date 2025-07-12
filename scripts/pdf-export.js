// PDF export functionality
function exportToPDF() {
    const exportPdfBtn = document.getElementById('export-pdf');
    const element = document.getElementById('resume-preview');
    
    // Show loading state
    const originalText = exportPdfBtn.innerHTML;
    exportPdfBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    exportPdfBtn.disabled = true;
    
    html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Add additional pages if needed
        let heightLeft = imgHeight;
        let position = 0;
        
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        pdf.save('resume.pdf');
        
        // Restore button state
        exportPdfBtn.innerHTML = originalText;
        exportPdfBtn.disabled = false;
        
        // Celebrate!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }).catch(err => {
        console.error('PDF export error:', err);
        alert('Error generating PDF. Please try again.');
        exportPdfBtn.innerHTML = originalText;
        exportPdfBtn.disabled = false;
    });
}

// Initialize export button if it exists
if (document.getElementById('export-pdf')) {
    document.getElementById('export-pdf').addEventListener('click', exportToPDF);
}
