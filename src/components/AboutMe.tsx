import React from 'react';
import './../App.css';
import profilePic from '../assets/profile-pic.jpg';
import angularIcon from '../assets/angular.png';
import htmlIcon from '../assets/html.png';
import phpIcon from '../assets/php.png';
import flutterIcon from '../assets/flutter.png';
import sqlIcon from '../assets/sql.webp';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import tsIcon from '../assets/ts.png';
import reactIcon from '../assets/react.png';
import communicationIcon from '../assets/communication.png';
import teamworkIcon from '../assets/teamwork.png';
import motivationIcon from '../assets/motivation.png';
import responsibilityIcon from '../assets/responsibility.png';
import leadershipIcon from '../assets/leadership.png';
import problemIcon from '../assets/idea.png';
import resilienceIcon from '../assets/resilience.png';
import timeIcon from '../assets/time.png';
import flexibilityIcon from '../assets/flexibility.png';
import javaIcon from '../assets/java.png';
import springIcon from '../assets/spring.png';
import mongoIcon from '../assets/mongo.png';
import dockerIcon from '../assets/docker.png';
import gitIcon from '../assets/git.png';
import jiraIcon from '../assets/jira.png';
import confluenceIcon from '../assets/confluence.png';

const softSkills = [
    { name: "Communication", icon: communicationIcon },
    { name: "Strong personal motivation", icon: motivationIcon },
    { name: "Responsibility", icon: responsibilityIcon },
    { name: "Teamwork", icon: teamworkIcon },
    { name: "Leadership", icon: leadershipIcon },
    { name: "Problem Solving", icon: problemIcon },
    { name: "Resilience", icon: resilienceIcon },
    { name: "Stress and time management", icon: timeIcon },
    { name: "Flexibility", icon: flexibilityIcon },
];

const minorHardSkills = [
    { name: "PHP", icon: phpIcon},
    { name: "HTML", icon: htmlIcon},
    { name: "CSS", icon: cssIcon},
    { name: "JavaScript", icon: jsIcon},
    { name: "TypeScript", icon: tsIcon},
    { name: "React", icon: reactIcon},
    { name: "Angular", icon: angularIcon},
    { name: "Flutter", icon: flutterIcon},
];

const majorHardSkills = [
    { name: "Java", icon: javaIcon},
    { name: "Spring", icon: springIcon},
    { name: "MySql", icon: sqlIcon},
    { name: "MongoDB", icon: mongoIcon},
    { name: "Docker", icon: dockerIcon},
    { name: "GitHub", icon: gitIcon},
    { name: "Jira", icon: jiraIcon},
    { name: "Confluence", icon: confluenceIcon}
];


const AboutMe: React.FC = () => {
    return (
        <section id="about" className="relative py-10 overflow-hidden">
            {/* Parentesi graffe decorative */}
            <div className="graffe absolute left-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"{"}</span>
            </div>
            <div className="graffe absolute right-0 top-0 h-full w-12 text-7xl">
                <span className="block">{"}"}</span>
            </div>
            <h2 className="titoli text-center text-3xl font-bold mb-8">About me</h2>
            <div className="about-container">
                <img src={profilePic} alt="Profile" className="profile-pic rounded-full h-40 w-40 mb-8 shadow-lg"/>
                <ul>
                    <li className="about-list">👩🏻‍💻 Passionate Java developer with experience in backend development using Spring Boot, microservices, and cloud technologies.
Skilled in building APIs, managing databases, and delivering scalable web solutions.
Motivated to grow in dynamic environments and contribute to impactful digital projects.</li>
                    <li className="about-list">🎓 Graduation in Corporate Information Systems with a score of 100/100</li>
                    <li className="about-list">🎓 Master Full-Stack Web Developer</li>
                    <li className="about-list">🎓Advanced course on Full-Stack Developer</li>
                </ul>
                
            </div>
            <div className='skills-container w-full mt-10'>
                <div className='hard-skills-container m-8'>
                        <h5 className="titoli text-center text-2xl font-semibold mb-8">Major Hard Skills</h5>       
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {majorHardSkills.map((skill, index) => (
                                <div key={index} className="flex items-center p-4 border rounded-lg shadow-md sfondo-card">
                                    <img src={skill.icon} alt={skill.name} className="h-8 w-8 mr-4" />
                                    <span className="content text-lg font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='skills-container w-full mt-10'>
                <div className='hard-skills-container m-8'>
                        <h5 className="titoli text-center text-2xl font-semibold mb-8">Minor Hard Skills</h5>       
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {minorHardSkills.map((skill, index) => (
                                <div key={index} className="flex items-center p-4 border rounded-lg shadow-md sfondo-card">
                                    <img src={skill.icon} alt={skill.name} className="h-8 w-8 mr-4" />
                                    <span className="content text-lg font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                <div className='soft-skills-container m-4'>
                    <h5 className="titoli text-center text-2xl font-semibold mb-4">Soft Skills</h5>       
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {softSkills.map((skill, index) => (
                            <div key={index} className="flex items-center p-4 border rounded-lg shadow-md sfondo-card">
                                <img src={skill.icon} alt={skill.name} className="h-8 w-8 mr-4" />
                                <span className="content text-lg font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;