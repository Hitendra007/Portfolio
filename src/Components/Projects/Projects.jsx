import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../Constansts/constants.js';

function Projects() {
    return (
        <div className="flex flex-col mt-2">
            <button className="bg-black text-white px-1 mx-1 rounded-md mt-1 text-center p-1 font-bold">
                My Projects
            </button>
            <h1 className="font-poppins font-extrabold text-2xl text-center">Check out my Projects</h1>
            <p className="text-center text-gray-500">
                I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </p>
            <div className="flex flex-wrap justify-center gap-4  p-3">
                {projects.map((project, index) => (
                    <div key={index} className="outline outline-1 outline-gray-300 flex flex-col rounded-md bg-white p-1 w-full hover:shadow-lg transition-shadow md:w-[45%]" style={{ alignSelf: "flex-start" }}>
                        {project.mediaType === 'video' ? (
                            <video
                                autoPlay
                                muted
                                loop
                                src={project.media}
                                className="w-full rounded-t-md"
                            ></video>
                        ) : (
                            <ImageSlideShow images={project.media} />
                        )}
                        <h2 className="font-bold mt-2">{project.name}</h2>
                        <p className="mt-2 text-gray-500 text-sm">{project.description}</p>
                        <div className="flex flex-row flex-wrap mt-2">
                            {project.technologies.map((tech, i) => (
                                <button
                                    key={i}
                                    className="bg-gray-300 text-black px-1 mx-1 rounded-md mt-1 hover:bg-gray-200"
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-row flex-wrap mt-1 mx-1">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-black ml-2"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ImageSlideShow({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images]);

    return (
        <div>
            <img
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full rounded-t-md"
            />
        </div>
    );
}

export default Projects;
