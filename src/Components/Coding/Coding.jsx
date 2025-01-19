import React from 'react';
import { codingProfiles } from '../../Constansts/constants';

function Coding() {
    return (
        <>
            <div className="flex flex-col">
                <h1 className="font-poppins font-bold text-4xl text-center mt-2">Coding Profiles</h1>
                <p className="text-center text-gray-500">
                    I am a passionate full-stack developer with a strong focus on problem-solving and efficiency in code.
                    My experience spans across various coding platforms where I consistently challenge myself to solve 
                    complex problems and improve my skills.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {codingProfiles.map((profile, i) => (
                        <div 
                            key={i} 
                            className="w-full sm:w-4/5 md:w-2/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md"
                        >
                            <img 
                                src={profile.avatar} 
                                className="w-12 h-12 mb-4" 
                                alt={`${profile.platform} avatar`} 
                            />
                            <a 
                                href={profile.profileLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
                                    {profile.platform}
                                </h5>
                            </a>
                            <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                                {profile.description}
                            </p>
                            <a 
                                href={profile.profileLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex font-medium items-center text-blue-600 hover:underline"
                            >
                                Profile link
                                <svg 
                                    className="w-3 h-3 ml-2 rtl:rotate-[270deg]" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 18 18"
                                >
                                    <path 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                    />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Coding;
