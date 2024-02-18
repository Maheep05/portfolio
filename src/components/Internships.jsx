import intern from '../assets/internship.jpg';

export function Internships() {
    return (
        <div>

            <div>
                <h1 className='bg-slate-900 text-white flex justify-center text-3xl font-semibold mt-48'>Internships</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-y-40 mx-10'>

                <div className='mx-10 my-20 relative'>
                    <img src={intern} alt="" className='rounded-t-xl w-[560px] h-96' />
                    <div className='absolute bg-black bottom-[-130px] text-white rounded-b-xl p-4 max-w-[560px] overflow-hidden '>
                        <p className="font-bold text-xl text-white">Upedian.</p>
                           <h1 className='text-gray-300 text-base '> Python Web Developer</h1>

                           <h1 className='text-gray-300 text-base py-1'> Fall 2022</h1>

                          <h1 className='text-gray-300 text-base'>  I created a multi-purpose tool that transcribes, summarizes, and converts handwriting, as well a URL shortener.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}