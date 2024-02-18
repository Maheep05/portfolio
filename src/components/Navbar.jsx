import { useState, useEffect } from 'react';
import img from '../assets/logo.png';

export function Navbar() {
    const [scrollNav, setScrollNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollNav(true);
            } else {
                setScrollNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={` z-10 flex items-center justify-between bg-black text-white p-2 transition-all duration-500 ${scrollNav ? 'transform translate-y-4 top-0 left-0 right-0 mx-[200px] fixed  rounded-full' : ''}`}>
            <div className='mx-10'>
                <img src={img} alt="" className='h-16 w-16 rounded-full' />
            </div>
            <div className="mx-20 flex gap-10">
                <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2'>About</span>
                <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2'>Projects</span>
                <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2'>Internships</span>
                <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2'>Tech Stack</span>
                <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2'>Contact</span>
            </div>
          
        </div>
    );
}
