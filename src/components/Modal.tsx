import React from 'react';
import musaBasic from './../assets/musa_basic.pdf';
import musaMiddle from './../assets/musa_middle.pdf';
import musaAdvanced from './../assets/musa_advanced.pdf';

const certificates = [
    {
        title: "Scrum Master Certification",
        description: "Agile facilitation, Scrum framework, team collaboration and continuous improvement.",
    },
    {
        title: "PSPO I - In progress",
        description: "Product ownership, product value, backlog management and stakeholder-oriented delivery.",
    },
    {
        title: "MUSA Basic",
        file: musaBasic,
    },
    {
        title: "MUSA Middle",
        file: musaMiddle,
    },
    {
        title: "MUSA Advanced",
        file: musaAdvanced,
    },
];

const Modal: React.FC = () => {
    return (
        <section id="certifications" className="relative py-10 overflow-hidden">
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>
            <h2 className="titoli text-center text-3xl font-bold mb-3">Certifications</h2>
            <p className="text-center max-w-3xl mx-auto mb-6 font-semibold">
                Certifications and learning paths connected to agile delivery, product ownership and continuous professional growth.
            </p>
            <div className="certification-grid">
                {certificates.map((certificate) => (
                    <div key={certificate.title} className="certification-card">
                        <h3>{certificate.title}</h3>
                        {certificate.description && <p>{certificate.description}</p>}
                        {certificate.file && (
                            <a href={certificate.file} target="_blank" rel="noopener noreferrer" className="project-content font-bold">
                                View certificate
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Modal;
