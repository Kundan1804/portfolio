import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    Mastork,
    jab,
    intrack,
    skitch,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Mern Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Data Engineer",
        icon: backend,
    },
    {
        title: "Mern Stack Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Mastork Technologies",
        icon: Mastork,
        iconBg: "#383E56",
        date: "December 2022 - March 2023",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            "Developed the comprehensive and feature-rich web platform 'Edjobster' that streamlines the end-to-end hiring process for companies and publish job vacancies to multiple platforms.",
            "Addressed efficiency and redundancy challenges in traditional hiring processes, the platform eliminates duplication of applications across multiple platforms.",
            "Automated various features such as create and evaluate assessment and manage job stages and statuses.",
        ],
    },
    {
        title: "Intrack",
        company_name: "MSEB Thane",
        icon: intrack,
        iconBg: "#383E56",
        date: "Jan 2023 - April 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Developed an advanced Electricity Billing Automation website for the government body to automate the billing analysis process.",
            "Built advanced features such as voucher generation, fault tolerance threshold system, enabling efficient and accurate billing operations facilitating informed decision-making.",
            "Developed analytics dashboard with interactive charts and visualizations, empowering admin to gain valuable insights into consumption patterns and billing trends.",
        ],
    },
    {
        title: "Jab Guyana Ticket System",
        company_name: "Jab",
        icon: jab,
        iconBg: "#E6DEDD",
        date: "March 2023 - April 2023",
        points: [
            "Build a ticket/Concern raising platform with authentication in MERN Stack for the Jab company in South America.",
            "Raise complain by choosing from various parameters which will be processed by the admin side and user can chat with admin for support.",
            "Provided Facility to download support tools if the user is authorized.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Skitch-Tech",
        icon: skitch,
        iconBg: "#E6DEDD",
        date: "May 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Facebook-Clone",
        description:
            "Developed Facebook replica with features to share text, image as well as gifs amongst each other Users can follow their favorite facebook pages and be up-todate with the current world.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "MUI",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Disney+ Hotstar",
        description:
            "Created a visually stunning Disney+ Hotstar clone: Designed and developed a visually appealing and slick user interface Movies are segregated based on their genres.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

// const projects = [
//     {
//         name: "Car Rent",
//         description:
//             "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//         tags: [
//             {
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "mongodb",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "tailwind",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: carrent,
//         source_code_link: "https://github.com/",
//     },
//     {
//         name: "Job IT",
//         description:
//             "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//         tags: [
//             {
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "restapi",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "scss",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: jobit,
//         source_code_link: "https://github.com/",
//     },
//     {
//         name: "Trip Guide",
//         description:
//             "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//         tags: [
//             {
//                 name: "nextjs",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "supabase",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "css",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: tripguide,
//         source_code_link: "https://github.com/",
//     },
// ];

export { services, technologies, experiences, testimonials, projects };