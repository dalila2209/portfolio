import React from 'react';
import './../App.css';
import video1 from './../assets/presenze-angular.mp4';
import video2 from './../assets/assistenza-react.mp4';
import video3 from './../assets/presenze-flutter.mp4';
import video4 from './../assets/expense-tracker-flutter.mp4';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: "CoursesApp's Project",
        description: "Go to projects's description",
        video: video1, 
    },
    {
        id: 2,
        title: "IT Company's Project",
        description: "Go to projects's description",
        video: video2, 
    },
    {
        id: 3,
        title: "Course Attendance's Project",
        description: "Go to projects's description",
        video: video3, 
    },
    {
        id: 4,
        title: "Expenses tracker's Project",
        description: "Go to projects's description",
        video: video4, 
    },
    
];

const StudyPortfolio: React.FC = () => {
    return (
        <section id="portfolio" className="relative py-10 overflow-hidden">
            {/* Parentesi graffe decorative */}
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>
            <h2 className="titoli text-center text-3xl font-bold mb-8">My study projects</h2>
            <div className="container mx-auto">
                <div className="flex justify-center space-x-4">
                    {projects.map((project, index) => (
                        <div key={index} className="background-card project-card p-4 shadow-lg rounded-lg max-w-xs">
                            <video
                                autoPlay
                                loop
                                muted
                                className="rounded-t-lg w-full h-48 object-cover"
                                >
                                    <source src={project.video} type='video/mp4' />
                                </video>
                            <h3 className="project-title text-xl font-semibold mt-2 font-bold">{project.title}</h3>
                            <Link 
                                to={`/project/study/${project.id}`}  // Linka alla pagina di dettaglio
                                className="project-content text-gray-700 mb-4 font-bold"
                            >
                                {project.description}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudyPortfolio;