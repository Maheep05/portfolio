import { useState, useEffect } from 'react';
import img from '../assets/logo.png';
import menu from '../assets/menu.png';

export function Navbar() {
    const [scrollNav, setScrollNav] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollNav(true);
                // setDisplayMenu(false);
            } else {
                setScrollNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleMenu() {
        setDisplayMenu(!displayMenu);
        setClicked(!clicked);
    }

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className=''>
            <div className='relative'>
                <div className={`z-10  flex max-w-screen   items-center justify-between bg-black text-white p-2 transition-all duration-500 ${scrollNav ? 'transform translate-y-4 top-0 left-0 right-0 w-auto  mx-[60px]  md:mx-[180px] lg:mx-[200px] fixed  rounded-full' : ''}`}>
                    <div className='mx-6 lg:mx-10'>
                        <img src={img} alt="" className='h-16 w-16 rounded-full ' />
                    </div>

                    <div onClick={toggleMenu} className={`lg:hidden' ${clicked && ' duration-500 transform cursor-pointer rotate-180'}`}>
                        <img src={menu} alt="" className='h-10 w-10 mx-6 lg:hidden' />
                    </div>

                    {/* Display navigation links for large screens */}
                    <div className="hidden lg:flex mx-20 gap-10">
                        <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2' onClick={() => scrollToSection('about')}>About</span>
                        <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2' onClick={() => scrollToSection('projects')}>Projects</span>
                        <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2' onClick={() => scrollToSection('internships')}>Internships</span>
                        <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2' onClick={() => scrollToSection('tech')}>Tech Stack</span>
                        <span className='cursor-pointer hover:bg-yellow-500 p-2 hover:text-black hover:border-1 hover:rounded-xl hover:p-2' onClick={() => scrollToSection('contact')}>Contact</span>
                    </div>

                    {/* Display dropdown menu for small screens */}
                    {displayMenu && (

                            <div className='flex items-center absolute top-0 -left-20   justify-center'>

                                <div className={`absolute   z-10 flex flex-col justify-center items-center top-20 left-20  sm:left-0    bg-black text-white py-2 px-4 rounded-lg lg:hidden ${scrollNav ? 'top-[82px]   left-[80px] sm:left-[180px]  w-[200px]   md:left-24 md:w-96' : 'w-screen'}`}>
                                    <span className='cursor-pointer block py-2 hover:bg-yellow-500 hover:text-black hover:rounded-xl' onClick={() => scrollToSection('about')}>About</span>
                                    <span className='cursor-pointer block py-2 hover:bg-yellow-500 hover:text-black hover:rounded-xl' onClick={() => scrollToSection('projects')}>Projects</span>
                                    <span className='cursor-pointer block py-2 hover:bg-yellow-500 hover:text-black hover:rounded-xl' onClick={() => scrollToSection('internships')}>Internships</span>
                                    <span className='cursor-pointer block py-2 hover:bg-yellow-500 hover:text-black hover:rounded-xl' onClick={() => scrollToSection('tech')}>Tech Stack</span>
                                    <span className='cursor-pointer block py-2 hover:bg-yellow-500 hover:text-black hover:rounded-xl' onClick={() => scrollToSection('contact')}>Contact</span>
                                </div>

                            </div>
                     


                    )}
                </div>
            </div>

        </div>

    );
}
