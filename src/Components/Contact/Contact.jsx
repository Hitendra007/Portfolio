import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col justify-center items-center mb-36'>
      <button  disabled type='button' className='text-white bg-black rounded-lg text-center w-20'>Contact</button>
      <h1 className='text-4xl font-bold'>Get in Touch</h1>
     <p className='text-center text-gray-500'> Want to chat? Just shoot me a <a href="https://www.linkedin.com/in/hitendrasingh1729/" target='_blank' className='text-blue-400 underline'> dm with a direct question on Linkedin</a> and I'll respond as soon as possible.</p>
    </div>
  )
}

export default Contact
