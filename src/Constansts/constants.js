const skills = [
    "C++",
    "JavaScript",
    "React.js",
    "Node.js",
    "ExpresJs",
    "FastAPI",
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
    },
    {
        name: "Chat with PDF AI Assistant",
        technologies: ["FastAPI", "React.js", "PostgreSQL", "Qdrant vectorDB", "WebSocket", "JWT","OpenAI","Docker"],
        description: "An AI-powered document assistant that enables users to upload PDFs and interact with them via chat. Implemented PDF upload, vector embedding using Qdrant, and contextual retrieval with LLMs. Developed a real-time chat interface using WebSocket and React, integrated with JWT-based authentication. Stored chat history in PostgreSQL and added future plans for query propagation for better legal document understanding.",
        githubLink: "https://github.com/Hitendra007/pdf_chat-assistant-backend",
        mediaType: "video",
        media: "/media/chatdocai/chatdoc.mp4"
    }
];

const codingProfiles = [
    {
        platform: "LeetCode",
        description: "Data Structures & Algorithms",
        profileLink: "https://leetcode.com/u/hitendra_singh1729/",
        avatar: "/media/codingProfiles/Leetcode.webp"
    },
    {
        platform: "GeeksforGeeks",
        description: "Programming & Interview Prep",
        profileLink: "https://www.geeksforgeeks.org/user/hitendra369432/?ref=header_profile",
        avatar: "/media/codingProfiles/Gfg.png"
    },
    {
        platform: "HackerRank",
        description: "Learn and practice programming languages",
        profileLink: "https://www.hackerrank.com/profile/hitendra369432",
        avatar: "/media/codingProfiles/Hackerrank.png"
    }
];

const workExperience = [
  {
    company: "Lepton Software, Gurgaon",
    role: "Software Engineer Intern",
    duration: "June 2024 – Nov 2024",
    description: [
      "Optimized telecom API performance, achieving a 35% reduction in latency and enhancing responsiveness.",
      "Constructed scalable data pipelines using Apache Airflow for real-time ingestion of nationwide datasets, facilitating a 40% improvement in data processing speeds and accuracy.",
      "Executed comprehensive data migrations, ensuring 100% seamless system transitions.",
      "Developed a Malaria prediction API that contributed to a 15% sales boost for a mosquito repellent brand."
    ]
  },
  {
    company: "ZappInvest, Remote",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – May 2024",
    description: [
      "Leveraged React.js and Redux to architect reusable, interactive UI components for the practitioner portal, accelerating page load times by 40% and decreasing bounce rate by 15%.",
      "Built and integrated secure REST APIs."
    ]
  }
];


export { skills, projects, codingProfiles, workExperience };
