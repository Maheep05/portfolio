import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cont from '../assets/cont.png';

export function Contact() {
    
    const sendEmail = () => {
        const subject = `Name : ${formData.name}`;
        const body = `${formData.message}`;
        const mailtoURL = `mailto:maheepsingh458@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&from=${encodeURIComponent(formData.email)}`;
        window.open(mailtoURL);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function handleSubmit() {
        console.log("done");
    }

    return (
        <div className='py-40 minw-screen flex flex-col lg:min-w-full  mx-4 lg:mx-0  bg-slate-900'>
            <div>
                <h1 className='pb-20 bg-slate-900 text-white flex justify-center text-4xl font-semibold '>Let's Connect</h1>
            </div>
            <div className='p-2 flex justify-center items-center' id='contact'>
                <div className="shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f90,0_0_15px_#f90,0_0_30px_#f90] mx-auto relative text-white flex items-center justify-center  bg-neutral-800 rounded-lg p-8 ">
                    <div className="w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-4">
                                <label htmlFor="name" className="block font-semibold text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full border rounded px-4 py-2 bg-neutral-700 text-white focus:outline-none focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-semibold text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full border rounded px-4 py-2 bg-neutral-700 text-white focus:outline-none focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block font-semibold text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full resize-none border rounded px-4 py-2 bg-neutral-700 text-white focus:outline-none focus:border-yellow-500"
                                    required
                                />
                            </div>
                            <button type="submit" onClick={sendEmail} className="border-orange-300 border-2 px-4 py-2 rounded-2xl bg-yellow-900 text-orange-300 hover:text-white">Submit</button>
                        </form>
                        <ToastContainer />
                    </div>
                    <div className="w-1/2 ml-20">
                        <img src={cont} alt="Contact" className="w-full h-auto rounded" />
                    </div>
                </div>
            </div>
        </div>

    );
};

