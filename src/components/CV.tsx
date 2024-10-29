import React from 'react';
import './../App.css';
import cvFile from './../assets/CV.pdf';
import coverLetter from './../assets/Cover_Letter.pdf';

const CV: React.FC = () => {
    return (
      <section id="cv" className="relative py-10 overflow-hidden">
            {/* Parentesi graffe decorative */}
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>
        <h2 className="titoli text-center text-3xl font-bold mb-8">CV</h2>
        <p className="text-center text-gray-700 mb-4 font-bold">
        You can download my CV by clicking on the button below:
        </p>
        <div className="flex justify-center">
          <a
            href={cvFile}
            download
            className="cv-download-btn py-2 px-4 rounded shadow font-bold"
          >
            Download CV
          </a>
        </div>
        <div className='flex justify-center'>
        <a
            href={coverLetter}
            download
            className="cv-download-btn py-2 px-4 rounded shadow font-bold"
          >
            Download Cover Letter
          </a>
        </div>
      </section>
    );
  };
  
  // eslint-disable-next-line react-refresh/only-export-components
  export default CV;