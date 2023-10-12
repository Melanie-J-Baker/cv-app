import JsPDF from 'jspdf';

export default function Save() {
    const createPDF = () => {
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach((button) => {
        button.style.display = "none";
    })
    const cv = new JsPDF('portrait', 'pt', 'a4');
    cv.html(document.querySelector('#cv-report'), {
        html2canvas: {
            scale: 0.7
        },
        callback: () => {
            cv.save('cv.pdf');
        }
    })
        
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