import React from 'react'
import Image from 'next/image';


const page = async ({ params })  => {

    const slug = params?.slug || [];

  return (
    <>
    
        <div className='w-full py-12 outline-1 outline-gray-400 flex justify-center items-center'>
            <Image src={`/${slug[0]}`} alt='image' width={250} height={350} />
        </div>
        <div className='container px-4 flex justify-center items-center py-12'>
            <p className='text-white opacity-80'>{slug[1].replaceAll('%20', ' ').replaceAll('%2C', ',')}</p>
        </div>
        <div className='w-full py-24 px-2.5 flex flex-col md:flex-row justify-center items-center gap-3'>
          <h2 className='text-white text-3xl font-bold'>Want to read more</h2>
          <a href="https://www.netflix.com/in/" className='mx-7 my-11 bg-red-600 text-white text-2xl font-bold cursop-pointer rounded-md p-1.5 '>Netflix</a>
        </div>
    
    </>
  )
}

export default page
