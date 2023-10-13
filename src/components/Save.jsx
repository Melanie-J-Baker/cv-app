import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Save() {

    const createPDF = () => {
        const editButtons = document.querySelectorAll('.edit');
        editButtons.forEach((button) => {
            button.style.display = "none";
        })

        const quality = 4 // Resolution of PDF output
        html2canvas(document.querySelector('#cv-report'),
            { scale: quality }
        ).then(canvas => {
            const pdf = new JsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
            pdf.save('cv.pdf');
            window.open(pdf.output('bloburl'));
        });
        
        // Delay to allow screenshot to be taken by html.canvas before Edit buttons reappear
        setTimeout(() => {
            editButtons.forEach((button) => {
                button.style.display = "block";
            })
        }, 2000);
    };

  return (
    <div className="cv-pdf">
      <p className="save-text">Save your CV: </p>
      <button onClick={createPDF} type="button" className="pdf-button">
          Download as PDF
      </button>
    </div>
  );
}