import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import imgPa from './../assets/pa.jpg';
import imgGest from './../assets/gestionale.png';

const workProjects = [
  {
    id: 1,
    title: "Public Sector Bonus Platform",
    descriptionTitle: "Technical overview of the public incentive project for the Italian PA",
    descriptionContent:
      "The Public Sector Bonus Platform is a web-based solution developed to support the Italian government's management of economic incentive programs, starting with the Household Appliance Bonus initiative. The platform is designed to be scalable and modular to accommodate future public initiatives and ensure secure, efficient citizen interaction. The system is integrated with the IO app (App IO – the official app of the Italian Public Administration), enabling user authentication via SPID or CIE, and providing a centralized access point for citizens. The application is structured into multiple dedicated portals: Goods Registry Portal: used by manufacturers to register and certify eligible products for the bonus, ensuring they meet initiative-specific requirements. Authority Portal: accessed by accredited public bodies (e.g., ministries, regulatory agencies) responsible for verifying and validating product submissions from manufacturers. Merchant Portal: where participating retailers can register to offer bonus-eligible products to citizens, ensuring traceability and transparency in transactions. The backend was developed using Java, Spring Boot, Kafka, and MongoDB, and was built following a microservices architecture to support modularity and integration with other public services.",
    image: imgPa,
  },
  {
    id: 2,
    title: "Administrative and Accounting Management",
    descriptionTitle: "Technical details of a management platform built for internal workflows",
    descriptionContent:
      "This project is an enterprise-level management system designed to support companies in handling administrative and accounting processes related to human resources — from recruitment to monthly payroll. The application is built using a microservices architecture, where each microservice is responsible for managing a specific business process (e.g., hiring, contract management, payroll generation). This modular design enhances scalability and simplifies maintenance and future extension. One of the platform’s most distinctive features is the dynamic document processor, which allows companies to generate customized documents using placeholders. Users can embed placeholder fields (e.g., {employee_name}, {salary}, {hire_date}) into templates, and the system will automatically populate them with real-time data — particularly useful for creating employment contracts, pay slips, and administrative letters. The platform is entirely developed using Java, Spring Boot, Kafka for asynchronous communication between services, and MySQL for data persistence.",
    image: imgGest,
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
      <h2 className="text-center text-3xl font-bold mb-6">{project.title}</h2>

      <div className="flex justify-center mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="imgWork"
        />
      </div>

      <h3 className="text-xl font-bold mb-3 text-center">
        {project.descriptionTitle}
      </h3>

      <p className="text-lg leading-relaxed text-justify">
        {project.descriptionContent}
      </p>

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
