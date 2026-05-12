import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

import imgPa from './../assets/pa.jpg';
import imgGest from './../assets/gestionale.png';

const projects = [
    {
        id: 1,
        title: "Public-Sector Digital Platform",
        role: "Backend Developer",
        period: "June 2025 - Present",
        summary: "Backend services and integrations for a scalable multi-portal platform, with focus on data flows, service interoperability and delivery support.",
        technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "Azure", "ARGO"],
        description: "View case study",
        image: imgPa,
    },
    {
        id: 2,
        title: "Administrative and Accounting Management",
        role: "Backend Developer",
        period: "November 2024 - June 2025",
        summary: "Management platform supporting administrative workflows, document generation and HR-related business processes in a microservices context.",
        technologies: ["Java", "Spring Boot", "Kafka", "MySQL", "Microservices"],
        description: "View case study",
        image: imgGest,
    }
];

const WorkPortfolio: React.FC = () => {
    return (
        <section id="work" className="relative py-10 overflow-hidden">
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>

            <h2 className="titoli text-center text-3xl font-bold mb-3">Professional Experience</h2>
            <p className="text-center max-w-3xl mx-auto mb-8 font-semibold">
                A selection of professional projects where I contributed to backend development, service integration and delivery support, with increasing focus on analysis, prioritization and product-oriented collaboration.
            </p>

            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="background-card project-card p-4 shadow-lg rounded-lg max-w-xs w-72">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-t-lg w-full h-48 object-cover"
                            />
                            <h3 className="project-title text-xl font-semibold mt-2 font-bold text-center">
                                {project.title}
                            </h3>
                            <p className="project-content text-center font-bold mt-1">
                                {project.role}
                            </p>
                            <p className="text-sm text-center font-bold mt-1">
                                {project.period}
                            </p>
                            <p className="text-sm text-center mt-2">
                                {project.summary}
                            </p>
                            <p className="project-content text-sm text-center font-bold mt-3">
                                {project.technologies.join(" · ")}
                            </p>
                            <div className="text-center mt-2">
                                <Link
                                    to={`/project/work/${project.id}`}
                                    className="project-content text-blue-700 font-semibold hover:underline"
                                >
                                    {project.description}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkPortfolio;
