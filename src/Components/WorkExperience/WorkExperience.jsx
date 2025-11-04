import React from 'react';
import { workExperience } from '../../Constansts/constants';

function WorkExperience() {
    return (
        <div className='mt-5'>
            <h1 className='text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600'>Work Experience</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-6">
                {
                    workExperience.map((work, i) => (
                        <li key={i} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
                            <div className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white/70 backdrop-blur p-4">
                                <div className="flex items-center gap-3">
                                    {work.logo ? (
                                        <img src={work.logo} alt={`${work.company} logo`} className="w-10 h-10 rounded-md object-contain border border-gray-100" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                                            {work.company?.[0] || '•'}
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900 truncate">{work.company}</h3>
                                        <p className="text-sm font-medium text-gray-600 truncate">{work.role}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {work.duration && (
                                        <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-0.5 text-xs font-medium border border-indigo-100">
                                            {work.duration}
                                        </span>
                                    )}
                                    {work.location && (
                                        <span className="inline-flex items-center rounded-full bg-rose-50 text-rose-700 px-2.5 py-0.5 text-xs font-medium border border-rose-100">
                                            {work.location}
                                        </span>
                                    )}
                                </div>
                                <ul className="list-disc ms-5 mt-3 text-sm leading-relaxed text-gray-700 space-y-1">
                                    {
                                        work.description.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default WorkExperience;
