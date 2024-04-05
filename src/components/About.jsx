import img from '../assets/About.png';
import { TypeAnimation } from 'react-type-animation';
import { AboutCard } from './AboutCard';
import img1 from '../assets/linkedin.png';
import img2 from '../assets/leet.png';
import img3 from '../assets/git.png';


export function About() {
    return (
        <div className='bg-slate-900 max-w-screen   lg:mx-20 text-white ' id='about'>


            <div className='lg:flex lg:flex-row  flex flex-col px-10 pt-20  justify-between items-center'>
                <div className=' flex flex-col items-center '>
                    <TypeAnimation
                        sequence={[
                            'Hello , I\'m  Maheep Singh Saluja',
                            1000,
                            'Hello , I\'m a Web Developer',
                            1000,
                            'Hello , I\'m a Designer',
                            1000,
                            'Hello , I\'m a FreeLancer',
                            1000,
                            'Hello , I\'m a Learner',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block', color: 'orange', fontWeight: "bold", fontFamily: 'monospace', padding: '4', }}
                        repeat={Infinity}
                    />
                    <AboutCard />
                    <div className='flex gap-3 sm:gap-10 mt-10 justify-start'>
                        <a href="https://drive.google.com/file/d/1Q47BYVgfAnkiWRvumkHG6MxmQzL2Eutp/view?usp=sharing"> <button className='border-orange-300 border-2 px-4 py-2 rounded-2xl bg-yellow-900 text-orange-300 hover:text-white'>Resume</button></a>


                        <a href="https://www.linkedin.com/in/maheep-saluja/" target='_blank'><img src={img1} alt="" className='h-10 w-10' /></a>
                        <a href="https://leetcode.com/maheep_saluja/" target='_blank'><img src={img2} alt="" className='h-10 w-10' /></a>
                        <a href="https://github.com/Maheep05" target='_blank'><img src={img3} alt="" className='h-10 w-10' /></a>
                    </div>

                </div>
                <div className='sm:mx-40 mx-10 my-10 sm:my-10'>
                    <img src={img} alt="aboutPic" />
                </div>

            </div>





        </div>
    )
}