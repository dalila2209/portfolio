import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import video1 from './../assets/presenze-angular.mp4';
import video2 from './../assets/assistenza-react.mp4';
import video3 from './../assets/presenze-flutter.mp4';
import video4 from './../assets/expense-tracker-flutter.mp4';

const projects = [
    {
        id: 1,
        title: "CourseApp's Project",
        descriptionTitle: "Technical description of the CoursesApp project created in Angular with TypeScript",
        descriptionContent:"CoursesApp is a web application developed in Angular with TypeScript that manages the organization of training courses, showing the details of the courses and participants. Use Angular's routing system to navigate between different components, such as the homepage, course list, and details of participants in each course. Courses and participants are managed as static data and can be dynamically filtered based on the selected course ID. The app follows a modular architecture, with standalone components and the integration of services to manage navigation and data, making it easily extensible for future integrations with a backend for persistent information management. Everything is made dynamic and interactive through the use of EventEmitter and Angular binding to manage communication between components.",
        video: video1,
    },
    {
        id: 2,
        title: "IT Company's Project",
        descriptionTitle: "Technical description of the Assistenza.it project created in React with TypeScript",
        descriptionContent: "Assistenza.it is a web application developed in React with TypeScript that offers assistance and sales services for refurbished computers. Using React Router, the app handles navigation between different sections, such as valuation, technical analysis and selling, each of which allows users to submit requests in the form of \"tickets\". Each ticket includes information on name, email, issue and attached files, with state management via useState. The app uses Bootstrap to provide a responsive user interface and temporarily saves ticket data to localStorage to simulate persistent request handling. The modular architecture of the app allows for easy extension and future integration, for example to connect a backend for real data persistence.",
        video: video2,
    },
    {
        id: 3,
        title: "CourseAttendance's Project",
        descriptionTitle: "Technical description of the AttendanceApp project created in Flutter",
        descriptionContent:"AttendanceApp is a mobile application developed in Flutter to manage student attendance, allowing access and viewing of attendance on a daily basis. The app offers an authentication interface through a login form, which allows access only if the credentials are correct. Students and their attendance are managed with a static data model and can be viewed and updated via an interactive view for each day of the week. Navigation is based on MaterialApp, with routing configured to switch between screens such as the homepage, day list and attendance details. Thanks to GridView and ListView, the app has a clean and easy-to-navigate interface, with features such as attendance editing via switches that dynamically update student status. Furthermore, the app uses controllers to manage login data, and thanks to the use of setState, the UI updates reactively, ensuring a fluid and intuitive user experience.",
        video: video3,
    },
    {
        id: 4,
        title: "Expenses tracker's Project",
        descriptionTitle: "Detailed description of Expenses tracker's Project created in Flutter",
        descriptionContent: "The “Expense Tracker” project is a mobile application developed in Flutter that allows users to register, log in and manage their expenses, using Firebase for authentication, image saving and data storage. The registration section allows users to enter name, surname, email, password and profile picture, with input validation. Once registered, users can log in and view their homepage, where they can add new expenses, filter existing ones and monitor their budget. The application is designed to offer an intuitive and responsive interface, making it easy to manage your daily expenses.",
        video: video4,
    },
];

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === parseInt(id!));
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    //effetto per rallentare il video
    useEffect(() => {
        if(videoRef.current) {
        videoRef.current.playbackRate = 0.8;
        }
    }, []);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className='flex justify-center'>
            <section className="py-10 w-full px-4">
                <div className='flex justify-center'>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                </div>
                <div className="video-container" >
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        className="video"
                    >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='flex justify-center'>
                    <h2 className="text-xl font-bold">{project.descriptionTitle}</h2>
                </div>
                <p className='text-lg'>{project.descriptionContent}</p>
                <div className='flex justify-center'>
                    <button
                        onClick={() => navigate(-1)}
                        className='back-btn font-bold py-2 px-4 rounded'
                    >
                        Back
                    </button>
                </div>
            </section>
        </div>            

    );
};

export default ProjectDetails;