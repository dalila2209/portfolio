import React from 'react';
import './../App.css';

const Contact: React.FC = () => {
    return (
      <section id="contact" className="relative py-10 overflow-hidden">
            {/* Parentesi graffe decorative */}
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>
        <h2 className="titoli text-center text-3xl font-bold mb-8">Contacts</h2>
        <p className="text-center text-gray-700 mb-4 font-bold">
        Send me an email
        </p>
        <div className="flex justify-center">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=acquavivadalila@gmail.com&su=Contatto%20per%20informazioni" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn py-2 px-4 rounded shadow font-bold"
          >
            Contact me!
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;