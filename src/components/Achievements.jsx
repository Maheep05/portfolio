import hackathon from '../assets/hackathon.jpg';
import aws from '../assets/aws-cert.jpg';

export function Achievements() {
    return (
        <div>

            <div id='achievements'>
                <h1 className='bg-slate-900 text-white flex justify-center text-3xl font-semibold mt-48'>Achievements</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-y-40 mx-2 sm:mx-10'>

                <div className=' sm:mx-10 my-20 relative'>
                    <img src={hackathon} alt="" className='rounded-t-xl w-96 md:w-[560px] md:h-96 ' />
                    <div className='absolute bg-black bottom-[-10   0px] text-white rounded-b-xl p-4 max-w-[560px] w-full overflow-hidden '>
                        <p className="font-bold text-xl text-white">Hackgenesis.</p>
                        <h1 className='text-gray-300 text-base '>With a team of members came <b>2nd</b> among <b>40 other teams </b>, utilized many mordern technologies including <b>socket</b> , <b>webrtc</b> and many more .</h1>
                    </div>
                </div>

                <div className=' sm:mx-10 my-20 relative'>
                    <img src={aws} alt="" className='rounded-t-xl w-96 md:w-[560px] md:h-96 ' />
                    <div className='absolute bg-black bottom-[-10   0px] text-white rounded-b-xl p-4 max-w-[560px] w-full overflow-hidden '>
                        <p className="font-bold text-xl text-white">AWS Workshop.</p>
                        <h1 className='text-gray-300 text-base '>Attended 2 day AWS workshop in which we got to know about the implementation and hosting of websites using EC2.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}