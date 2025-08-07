"use client"
import React, { useState } from 'react'

const Question = () => {
    const [first, setFirst] = useState(null);

    const questions = [
        { q: "How can we login and sign up?", a: "By entering your email into the login section." },
        { q: "Is there a mobile app?", a: "Yes, it's available on iOS and Android." },
        { q: "Can I reset my password?", a: "Yes, use the 'Forgot password' link." },
        { q: "Can I reset my password?", a: "Yes, use the 'Forgot password' link." },
        { q: "Can I reset my password?", a: "Yes, use the 'Forgot password' link." },
        { q: "Can I reset my password?", a: "Yes, use the 'Forgot password' link." },
        // Add more questions here...
    ];

    const handleToggle = (idx) => {
        setFirst(first === idx ? null : idx);
    };

    return (
        <div className='flex flex-col gap-1 justify-center items-center w-[95%] sm:w-[75%] m-auto bg-black'>
            <p className="text-white font-bold text-3xl pt-11 pb-6 pl-4 sm:pl-0 self-start">Frequently Asked Questions</p>

            {questions.map((ques, idx) => (
                <div key={idx} className='text-white w-full p-4 py-6 hover:opacity-85 bg-gray-900'>
                    <div className='flex justify-between items-center cursor-pointer' onClick={() => handleToggle(idx)}>
                        <p className='sm:text-2xl opacity-85 font-extralight'>{ques.q}</p>
                        <div className='text-white font-bold text-2xl'>
                            {first === idx ? 'X' : '+'}
                        </div>
                    </div>
                    {first === idx && (
                        <div className='transition-all duration-300 mt-2 text-lg text-gray-300'>
                            {ques.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Question
