const skills = [
    "C++",
    "JavaScript",
    "React.js",
    "Node.js",
    "Python",
    "Django",
    "Docker",
    "Linux",
    "SQL",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Git",
    "Github",
    "MongoDB",
    "Postman",
];

const projects = [
    {
        name: "AyuCare",
        technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
        description: "Simplified finding Ayurvedic remedies for diverse symptoms, saving time and effort for practitioners and students. Created a full-stack web application for Ayurvedic remedy search that consolidates over 3,000 symptom correlations into a user-friendly interface.",
        githubLink: "https://github.com/Hitendra007/AyuCare",
        mediaType: "video",
        media: "/media/ayucare/ayucare.mp4"
    },
    {
        name: "SlimLink - URL Shortener",
        technologies: ["Python", "HTML", "CSS", "Django", "SQLite DB"],
        description: "A URL shortening web application that allows users to sign up, log in, and securely generate short links for long URLs. Developed a user-friendly application where users can generate, view, and delete short URLs. Implemented secure user authentication with sign-up and log-in features.",
        githubLink: "https://github.com/Hitendra007/SlimLink",
        mediaType: "image",
        media: [
            "/media/slimlink/1.png",
            "/media/slimlink/2.png",
            "/media/slimlink/3.png",
            "/media/slimlink/4.png",
            "/media/slimlink/5.png"
        ]
    },
    {
        name: "Media Maven",
        technologies: ["Python", "Streamlit", "TMDB API", "Jupyter notebook"],
        description: "An application that recommends movies based on user input and queries the TMDB API for similar movies. Allows users to enter a movie title and retrieves detailed information, including similar movies. Utilizes cosine similarity to find movies with related genres, cast, and plots. Displays detailed information such as title, release date, synopsis, and cast for each recommended movie.",
        githubLink: "https://github.com/Hitendra007/MediaMaven",
        mediaType: "video",
        media: "/media/mediaMaven/mediaMaven.mp4"

    }, {
        name: "MERN Todo Application",
        technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
        description: `This is a full-stack application with a React frontend and Express backend. 
        It features secure user authentication, task management, and a responsive design. 
        Although not very UI-oriented, this app was created to learn and understand the full-stack application flow.
        Access control is enforced using protected routes, restricting access to specific pages.
        Middleware ensures that only verified users with valid tokens can interact with secured backend APIs.`,
        githubLink: "https://github.com/Hitendra007/MernTodoApplication",
        mediaType: "image",
        media: [
            "/media/merntodo/home.png",
            "/media/merntodo/login.png",
            "/media/merntodo/signup.png",
            "/media/merntodo/todos.png"
        ]
    }

];


const codingProfiles = [
    {
        platform: "LeetCode",
        description: "Data Structures & Algorithms",
        profileLink: "https://leetcode.com/u/hitendra_singh1729/",
        avatar: "/media/codingProfiles/Leetcode.webp" // optional avatar or icon path
    },
    {
        platform: "GeeksforGeeks",
        description: "Programming & Interview Prep",
        profileLink: "https://www.geeksforgeeks.org/user/hitendra369432/?ref=header_profile",
        avatar: "/media/codingProfiles/Gfg.png" // optional avatar or icon path
    },
    {
        platform: "HackerRank",
        description: "Learn and practice programming languages",
        profileLink: "https://www.hackerrank.com/profile/hitendra369432",
        avatar: "/media/codingProfiles/Hackerrank.png" // optional avatar or icon path
    }
];

const workExperience = [
    {
        company: "Lepton Software, Gurgaon",
        role: "Software Engineer Intern",
        duration: "June 2024 – Nov 2024",
        description: [
            "Contributed to a telecom project involving large-scale geospatial data processing for nationwide datasets.",
            "Optimized API performance, fine-tuning SQL queries to achieve a reduction in latency, enhancing application responsiveness.",
            "Processed and loaded large datasets into the database using custom data pipelines, ensuring accuracy and performance.",
            "Executed comprehensive large-scale data migrations that ensured seamless transitions between systems.",
            "Created a malaria prediction API for specific regions, boosting sales for a mosquito Buster brand by providing targeted insights."
        ]
    },
    {
        company: "ZappInvest, Remote",
        role: "Full Stack Developer Intern",
        duration: "Jan 2024 – May 2024",
        description: [
            "Worked as a frontend developer, creating UI components in React.",
            "Developed APIs and routes for the website’s backend functionality."
        ]
    },
    
];

export { skills, projects,codingProfiles,workExperience};
