
export function ProjectCard({ title, description, img ,link}) {
    return (
        <div>
            <div className='mx-1 sm:mx-10 relative  cursor-pointer'>

                <div className="group relative hover:bg-black  hover:opacity-50">
                    <img src={img} alt="" className='rounded-t-xl w-[500px] h-60 ' />

                   <a href={link}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" className="absolute top-20 left-40 lg:left-52 border-2 border-orange-300 p-2 w-20 h-20 cursor-pointer rounded-full invisible group-hover:visible">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg></a>

                </div>

                <div className='absolute bg-black bottom-[-80px] group text-white rounded-b-xl p-4 max-w-[500px] overflow-hidden'>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-sm">{description}</p>

                </div>




            </div>
        </div>
    );
}
