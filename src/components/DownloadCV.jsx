import React from 'react';
import { Download } from 'lucide-react';
import Swal from 'sweetalert2';

const DownloadCV = ({ text = 'Télécharger mon CV' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mame Diarra Bousso.pdf';
    link.download = 'Mame-Diarra-Ka-CV.pdf';
    link.click();

    Swal.fire({
      title: 'Succès!',
      text: 'Votre téléchargement a commencé 📄',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="group px-8 py-4 bg-primary hover:bg-primary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
    >
      <Download className="w-5 h-5 group-hover:animate-bounce" />
      {text}
    </button>
  );
};

export default DownloadCV;