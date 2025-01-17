import React from 'react'
import ProfileImage from '../../assets/Profile.jpg'
import CollegeLogo from '../../assets/college.png'
import SchoolLogo from '../../assets/school.png'
function About() {
    return (
        <div className='flex flex-col space-y-3  font-mono'>
            <div className="flex flex-row ">
                <div className='flex flex-col'>
                    <h1 className="font-poppins font-extrabold text-5xl">Hi, I'm Hitendra 🙋‍♂️</h1>
                    <p className=" text-lg max-w-2xl">
                        Passionate aspiring full-stack developer, driven to create innovative and impactful web applications that make a real difference.
                    </p>
                </div>
                <img
                    src={ProfileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-1 my-1"
                />
            </div>
            <div className='flex flex-col'>
                <h1 className='font-poppins font-bold text-2xl'>About</h1>
                <p className='text-lg max-w-2xl'>I'm Hitendra Singh, a dedicated full-stack developer with a passion for crafting innovative web applications. I enjoy tackling complex challenges and turning them into user-friendly solutions. My coding journey includes practicing questions on LeetCode, where I sharpen my problem-solving skills. I'm excited to collaborate and bring ideas to life!</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-poppins font-bold text-2xl'>Education</h1>
                <a
                    href="https://iiitsonepat.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center space-y-1 font-sans hover:bg-gray-100 rounded p-2"
                >
                    <img src={CollegeLogo} alt="college logo" className='w-12 h-12' />
                    <div className='mx-2 flex flex-col leading-tight text-1xl'>
                        <h3 className='font-bold'>Indian Institute of Information Technology Sonepat</h3>
                        <h4>B.Tech in Information Technology</h4>
                    </div>
                    <p className='ml-auto text-right'>2020-2024</p>
                </a>

                <a
                    href="http://www.gyansthaliresidential.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center space-y-1 font-sans hover:bg-gray-100 rounded p-2"
                >
                    <img src={SchoolLogo} alt="college logo" className='w-12 h-12' />
                    <div className='mx-2 flex flex-col leading-tight text-1xl'>
                        <h3 className='font-bold'>Gyan Sthali Residential School Karwa Khera Etawah</h3>
                        <h4>Class 12</h4>
                    </div>
                    <p className='ml-auto text-right'>2018-2019</p>
                </a>
                
                <a
                    href="http://www.gyansthaliresidential.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center space-y-1 font-sans hover:bg-gray-100 rounded p-2"
                >
                    <img src={SchoolLogo} alt="college logo" className='w-12 h-12' />
                    <div className='mx-2 flex flex-col leading-tight text-1xl'>
                        <h3 className='font-bold'>Gyan Sthali Residential School Karwa Khera Etawah</h3>
                        <h4>class 10</h4>
                    </div>
                    <p className='ml-auto text-right'>2016-2017</p>
                </a>
            </div>
        </div>
    )
}

export default About
