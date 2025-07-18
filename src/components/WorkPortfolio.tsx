import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

import imgPa from './../assets/pa.jpg';
import imgGest from './../assets/gestionale.png';

const projects = [
    {
        id: 1,
        title: "Public Sector Bonus Platform",
        description: "Go to project's description",
        image: imgPa,
    },
    {
        id: 2,
        title: "Administrative and Accounting Management",
        description: "Go to project's description",
        image: imgGest,
    }
];

const WorkPortfolio: React.FC = () => {
    return (
        <section id="portfolio" className="relative py-10 overflow-hidden">
            {/* Parentesi graffe decorative */}
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>

            <h2 className="titoli text-center text-3xl font-bold mb-8">My work projects</h2>

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
