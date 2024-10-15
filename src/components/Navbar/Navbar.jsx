import { useState, useEffect } from 'react';
import img from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import { NavItem } from './NavItem'; 

export function Navbar() {
    const [scrollNav, setScrollNav] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollNav(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setDisplayMenu((prev) => !prev);
        setClicked((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'internships', label: 'Internships' },
        { id: 'tech', label: 'Tech Stack' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className="relative">
            <div
                className={`z-10 flex max-w-screen items-center justify-between bg-black text-white p-2 transition-all duration-500 ${scrollNav ? 'fixed top-0 left-0 right-0 mx-[60px] md:mx-[180px] lg:mx-[200px] rounded-full translate-y-4' : ''
                    }`}
            >
                <div className="mx-6 lg:mx-10">
                    <img src={img} alt="" className="h-16 w-16 rounded-full" />
                </div>

                <div
                    onClick={toggleMenu}
                    className={`lg:hidden ${clicked && 'duration-500 transform cursor-pointer rotate-180'}`}
                >
                    <img src={menu} alt="" className="h-10 w-10 mx-6 lg:hidden" />
                </div>

                <div className="hidden lg:flex mx-20 gap-10">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.id}
                            label={item.label}
                            onClick={() => scrollToSection(item.id)}
                        />
                    ))}
                </div>

                {displayMenu && (
                    <div className="absolute top-20 left-20 lg:hidden">
                        <div
                            className={`z-10 flex flex-col items-center bg-black text-white py-2 px-4 rounded-lg ${scrollNav ? 'top-[82px] left-[80px] sm:left-[180px] w-[200px] md:left-24 md:w-96' : 'w-screen'
                                }`}
                        >
                            {navItems.map((item) => (
                                <NavItem
                                    key={item.id}
                                    label={item.label}
                                    onClick={() => scrollToSection(item.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
