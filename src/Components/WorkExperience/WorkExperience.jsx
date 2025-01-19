import React from 'react';
import { workExperience } from '../../Constansts/constants';

function WorkExperience() {
    return (
        <div className='mt-5'>
            <h1 className='text-4xl text-center font-bold'>Work Experience</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {
                    workExperience.map((work, i) => (
                        <li key={i} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <h3 className="text-lg font-semibold text-black">{work.company}</h3>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-600">{work.role}</p>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                                {work.duration}
                            </time>
                            <ul className="list-disc ms-5 mt-2 text-base font-normal text-gray-500 dark:text-gray-500">
                                {
                                    work.description.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default WorkExperience;
