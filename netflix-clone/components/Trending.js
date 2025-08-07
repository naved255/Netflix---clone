import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Trending = ({ Imgsrc, show, setshow, color, para}) => {

    const router = useRouter();

    function handleClick(e) {
        e.stopPropagation();
        setshow(null);
    }

    function navigate() {
        router.push(`${Imgsrc}/${para}`);
    }

    return (
        <>
            <div onClick={(e) => {handleClick(e)}} className='w-[100vw] h-[100vh] fixed top-0 left-0 z-30 flex justify-center bg-black/65 items-center'>
                <div onClick={(e)=> {e.stopPropagation();}} className='flex flex-col justify-center overflow-hidden md:w-[400px] w-[300px] lg:w-[700px] m-auto bg-gray-950 rounded-4xl'>
                    <div style={{backgroundColor:color}} className={`w-[300px] md:w-[400px] lg:w-[700px] h-[350px]   m-auto relative flex flex-col items-center rounded-4xl`}>
                        <div className='w-full h-full bg-black opacity-65 absolute z-20 rounded-t-4xl'>
                            <div onClick={(e) => {handleClick(e)}} className='text-white font-extralight text-2xl top-2 right-3 absolute md:top-3 lg:top-6 lg:right-6 md:right-3 cursor-pointer'>X</div>
                        </div>
                        <Image src={Imgsrc} alt='image' width={250} height={350} />

                    </div>
                    <div className='w-full flex gap-3 mt-3 p-4'>
                        <button className='border-none cursor-none p-2 rounded-md bg-gray-800 text-xs md:text-xl text-white opacity-60 font-bold'>2025</button>
                        <button className='border-none cursor-none p-2 rounded-md bg-gray-800 text-xs md:text-xl text-white opacity-60 font-bold'>UAE 13+</button>
                        <button className='border-none cursor-none p-2 rounded-md bg-gray-800 text-xs md:text-xl text-white opacity-60 font-bold'>Show</button>
                        <button className='border-none cursor-none p-2 rounded-md bg-gray-800 text-xs md:text-xl text-white opacity-60 font-bold'>Action</button>
                    </div>
                    <div className='w-full px-7'>
                        <p className='text-white md:font-bold text-xs md:text-xl font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio accusantium, molestiae pariatur possimus illum adipisci, deserunt non illo officia voluptates incidunt, doloribus tempore.</p>
                    </div>
                    <button onClick={() => {navigate()}} className='w-44 mx-7 my-11 bg-red-600 text-white text-2xl font-bold cursop-pointer rounded-md p-1.5 '>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Trending