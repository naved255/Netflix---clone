"use client"
import Image from "next/image";
import ImageScroller from "@/components/ImageScroller";
import More from "@/components/More";
import Question from "@/components/Question";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  alert("⚠️ This is a dummy Netflix clone made for learning purposes only.");
}, []);

  return (
    <>

      <div className="w-full h-[100vh] image relative">

        <div className="b absolute w-full h-full bg-black opacity-60 z-10"></div>

        <div className="absolute z-20 w-full h-full">

          <div className="w-full flex flex-col sm:flex-row pl-10 justify-around sm:items-center h-24">
            <div className="font-bold text-4xl  text-red-500 lg:text-6xl">CLONFLIX</div>

            <div className="flex sm:justify-center items-center gap-3">

              <select name="lang" id="lang" className="bg-black/45 w-34 h-9 text-white font-bold rounded-md outline-1 outline-white">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>

              <button className="rounded-md bg-red-600 text-white font-bold cursor-pointer p-2">Sing in</button>

            </div>

          </div>

          <div className="w-full h-[70%] lg:mt-16 sm:p-7 px-3 py-28  flex justify-center items-center">

            <div className="w-[650px]  flex flex-col justify-center gap-4 items-center">

              <p className="text-center text-3xl sm:text-4xl lg:text-6xl text-white font-bold">Unlimited movies &lsquo; TV shows and more</p>
              <p className="text-center md:text-[15px] lg:text-xl text-white">Starts at ₹149. Cancel at any time.</p>

              <div className="w-full mt-2.5">

                <p className="text-center md:text-[15px] lg:text-xl text-white">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="p-3 flex flex-col lg:flex-row justify-center items-center gap-3">

                  <input type="email" placeholder="Enter email" className="md:w-[400px] w-[90%] h-11 sm:h-14 rounded-md outline-1 outline-white bg-gray-950 text-white p-1.5 text-xl font-light lg:w-2/3" />
                  <button className="lg:w-1/3  bg-red-600 text-white md:text-[26px] lg:text-4xl font-bold cursop-pointer rounded-md p-1.5 ">Get started</button>

                </div>

              </div>

            </div>

          </div>

          <div className="w-full h-20 absolute bottom-0 design"></div>

        </div>



      </div>

      <div className="w-full bg-black">
        <div className="trend w-[85%] p-2 m-auto">
          <p className="text-white font-bold text-3xl">Trending</p>


          <ImageScroller />

        </div>
      </div>

      <div className="w-full bg-black pt-11">
        <div className="trend w-[85%] p-2 m-auto">
          <p className="text-white font-bold text-3xl">More reasons to join</p>
          <div className="mt-6 flex gap-2 justify-center flex-wrap items-center">


            <More head="Enjoy on your TV" para="Watch on mdart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
            <More head="Download your shows to watch offline" para="Save your favourites easily and always have something to watch." />
            <More head="Watch everywhere" para="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV." />
            <More head="Create profiles for kids" para="Send kids on adventures with their favourite characters in a space made just for them — free with your membership." />


          </div>
        </div>
      </div>

      <div className="w-full bg-black">

        <Question />
      </div>
      <div className="bg-black w-full">
        <div className="lg:w-[65%] md:w-[65%] pt-24 m-auto flex flex-col justify-center items-center gap-7">

          <p className="text-white px-4">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="p-3 w-full flex flex-col lg:flex-row justify-center items-center gap-3">

            <input type="email" placeholder="Enter email" className="md:w-[400px] w-[90%] h-11 sm:h-14 rounded-md outline-1 outline-white bg-gray-950 text-white p-1.5 text-xl font-light lg:w-2/3" />
            <button className="lg:w-1/3  bg-red-600 text-white md:text-[26px] lg:text-4xl font-bold  cursop-pointer rounded-md p-1.5 ">Get started</button>

          </div>
        </div>

        <div className="pt-20 pb-12 w-full">
          <div className=" mb-16 ml-4 lg:w-[65%] md:w-[95%] m-auto"><p className="text-white opacity-80">Questions? Call 000-800-919-1743</p></div>

          <div className="lg:w-[65%] md:w-[95%] md:m-auto gap-6 flex flex-col flex-wrap md:h-56 ml-4">
           
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">FAQ</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Investor Relations</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Privacy</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Speed Test</Link>
       
            
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">FAQ</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Investor Relations</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Privacy</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Speed Test</Link>
         
           
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">FAQ</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Investor Relations</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Privacy</Link>
              <Link  className="text-white opacity-80 underline font-extralight text-[16px]" href="/">Speed Test</Link>
        
        
          </div>

          <div className="ml-4 pt-16 w-[65%] lg:m-auto">
            <select name="lang" id="lang" className="bg-black/45 w-34 h-9 text-white font-bold rounded-md outline-1 outline-white">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="lg:w-[65%] md:w-[95%] m-auto px-4 pt-16 flex flex-col gap-9 pb-24">
            <p className="text-white opacity-80">Netflix India</p>

            <p className="text-white opacity-80 text-xs font-extralight">
              This page is a dummy model for practice not original one <Link href="/" className="text-blue-500">Learn more.</Link></p>
          </div>
        </div>
      </div>

    </>
  );
}
