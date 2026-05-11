import React from 'react';
import './../App.css';
import profilePic from '../assets/profile-pic.jpg';
import sqlIcon from '../assets/sql.webp';
import communicationIcon from '../assets/communication.png';
import teamworkIcon from '../assets/teamwork.png';
import motivationIcon from '../assets/motivation.png';
import responsibilityIcon from '../assets/responsibility.png';
import leadershipIcon from '../assets/leadership.png';
import problemIcon from '../assets/idea.png';
import resilienceIcon from '../assets/resilience.png';
import timeIcon from '../assets/time.png';
import flexibilityIcon from '../assets/flexibility.png';
import springIcon from '../assets/spring.png';
import mongoIcon from '../assets/mongo.png';
import dockerIcon from '../assets/docker.png';
import gitIcon from '../assets/git.png';
import jiraIcon from '../assets/jira.png';
import confluenceIcon from '../assets/confluence.png';
import azureIcon from '../assets/azure.png';
import javaIcon from '../assets/java.png';

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

const coreSkills = [
    { name: "Java", icon: javaIcon},
    { name: "Spring Boot", icon: springIcon},
    { name: "MySQL", icon: sqlIcon},
    { name: "MongoDB", icon: mongoIcon},
    { name: "Docker", icon: dockerIcon},
    { name: "GitHub", icon: gitIcon},
    { name: "Jira", icon: jiraIcon},
    { name: "Confluence", icon: confluenceIcon},
    { name: "Azure", icon: azureIcon}
];

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="relative py-10 overflow-hidden">
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
                    <li className="about-list"><strong>Passionate Java developer</strong> with experience in backend development using Spring Boot, microservices and scalable web solutions. I have worked on complex digital platforms in the public-sector domain, gaining hands-on experience with ARGO, Azure, Azure Data Factory, Kafka, OpenLens and MongoDB. Alongside the technical work, I am increasingly focused on analysis, prioritization, team coordination and value delivery: my goal is to grow toward a Product Owner role, combining technical awareness with an organizational and product-oriented mindset.</li>
                    <li className="about-list">🎓 Graduation in Corporate Information Systems with a score of 100/100.</li>
                    <li className="about-list">🎓 Master Full-Stack Web Developer.</li>
                    <li className="about-list">🎓 PSM I - Scrum Master certification.</li>
                    <li className="about-list">🎓 PSPO I - certification in progress.</li>
                </ul>
            </div>
            <div className='skills-container w-full mt-10'>
                <div className='hard-skills-container m-8'>
                    <h5 className="titoli text-center text-2xl font-semibold mb-8">Professional Skills</h5>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {coreSkills.map((skill, index) => (
                            <div key={index} className="flex items-center p-4 border rounded-lg shadow-md sfondo-card">
                                {skill.icon ? (
                                    <img src={skill.icon} alt={skill.name} className="h-8 w-8 mr-4" />
                                ) : (
                                    <span className="skill-fallback-icon mr-4">J</span>
                                )}
                                <span className="content text-lg font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='soft-skills-container m-8'>
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
        </section>
    );
};

export default AboutMe;
