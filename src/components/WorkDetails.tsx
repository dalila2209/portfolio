import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import imgPa from './../assets/pa.jpg';
import imgGest from './../assets/gestionale.png';

const workProjects = [
  {
    id: 1,
    title: "Public-Sector Digital Platform",
    subtitle: "Backend services, integrations and delivery support for a scalable multi-portal platform",
    period: "June 2025 - Present",
    image: imgPa,
    overview:
      "This project involved a web-based platform designed to support public-sector digital services through secure workflows, structured data management and integration between different user-facing portals. The solution was built to be modular and scalable, with backend services able to support future initiatives and evolving business requirements.",
    role:
      "I contributed as a Backend Developer, working on services, APIs, data persistence and integration flows. The experience helped me strengthen my understanding of complex digital ecosystems, where technical choices must support clear processes, traceability and reliable delivery.",
    organization:
      "Beyond implementation, I worked close to functional and technical needs: understanding requirements, clarifying flows, supporting alignment between different parts of the system and paying attention to how each backend component contributed to the final user and operational value. This is the area that increasingly connects my technical background with my goal of growing toward Product Ownership.",
    technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "Azure", "Azure Data Factory", "ARGO", "OpenLens", "Microservices"],
  },
  {
    id: 2,
    title: "Administrative and Accounting Management",
    subtitle: "Management platform for HR, administrative workflows and dynamic document generation",
    period: "November 2024 - June 2025",
    image: imgGest,
    overview:
      "This project is an enterprise-level management system designed to support administrative and accounting processes related to human resources, from recruitment to monthly payroll. The platform is organized around dedicated services for business processes such as hiring, contract management, payroll generation and document handling.",
    role:
      "I worked on backend development in a microservices architecture, contributing to business logic, service communication and data persistence. One of the most relevant features was a dynamic document processor that generates customized documents from templates and placeholders.",
    organization:
      "The project required attention not only to implementation, but also to process clarity: understanding how administrative flows should behave, how data moves between services and how technical features support real operational needs. This strengthened my interest in analysis, prioritization and building solutions that are understandable for both technical and business stakeholders.",
    technologies: ["Java", "Spring Boot", "Kafka", "MySQL", "Microservices", "Document workflows"],
  },
];

const WorkDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = workProjects.find((p) => p.id === parseInt(id!));
  const navigate = useNavigate();

  if (!project) {
    return <div className="text-center mt-20 text-xl font-semibold">Project not found</div>;
  }

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-10">
      <h2 className="text-center text-3xl font-bold mb-3">{project.title}</h2>
      <h3 className="text-xl font-bold mb-6 text-center">
        {project.subtitle}
      </h3>
      <p className="project-content text-center font-bold mb-6">
        {project.period}
      </p>

      <div className="flex justify-center mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="imgWork"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold mb-3">Overview</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          {project.overview}
        </p>

        <h3 className="text-xl font-bold mb-3">Role and responsibilities</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          {project.role}
        </p>

        <h3 className="text-xl font-bold mb-3">Organizational contribution</h3>
        <p className="text-lg leading-relaxed text-justify mb-6">
          {project.organization}
        </p>

        <h3 className="text-xl font-bold mb-3">Technologies and tools</h3>
        <p className="project-content text-lg font-bold">
          {project.technologies.join(" · ")}
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#b3195b] hover:bg-[#961347] text-white font-bold py-2 px-6 rounded transition"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default WorkDetails;
