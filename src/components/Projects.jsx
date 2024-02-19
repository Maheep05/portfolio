import uber from '../assets/uber.jpg';
import dukaan from '../assets/Dukaan.jpg';
import url from '../assets/url.jpg';
import book from '../assets/book.jpg';


import { ProjectCard } from "./ProjectCard";

export function Projects(){
    return(
        <div>

            <div>
                <h1 className='text-white flex justify-center text-3xl font-semibold my-10'>Projects</h1>
            </div>
          <div className='flex flex-wrap items-center justify-center gap-y-40 mx-3  sm:mx-10'>
          <ProjectCard title={"Uber UI clone"} description={"A Uber UI clone using React.js, showcasing seamless navigation and intuitive user interactions."} img={uber} link={"https://github.com/Maheep05/Uber-ui-clone"}/>
          <ProjectCard title={"Dukaan Webpage UI"} description={"A Dukaan dashboard created using React.js and tailwind for styling with user friendly navigation and intuitive user interactions."} img={dukaan} link={"https://github.com/Maheep05/Dukaan-Page"}/>
          <ProjectCard title={"Url Shortner"} description={"A url shortner build using MongoDb as database , Reactjs as framework and express as backend."} img={url} link={"https://github.com/Maheep05/url-shortner"}/>
          <ProjectCard title={"Booking Website"} description={"A Booking.com UI clone using React.js, showcasing seamless navigation and intuitive user interactions."} img={book} link={"https://github.com/Maheep05/Booking-UI"}/>
          </div>
        </div>
    )
}