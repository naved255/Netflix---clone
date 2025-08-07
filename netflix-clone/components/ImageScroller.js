"use client"

// components/ImageScroller.js
import Image from "next/image";
import { useState } from "react";
import Trending from "./Trending";
const images = [
  {
    src: "/film1.webp",
    svg: "/one.svg",
    color: "#aa150f",
    alt: "image 1",
    para: "Jaat is a gripping action-drama rooted in rural India. It follows a fierce protagonist who stands against social injustice and caste oppression. The film portrays intense village politics, pride, and rebellion. With raw visuals and hard-hitting dialogues, it captures the essence of grassroots resistance. Released on 12 July 2024, it stars Randeep Hooda and Kriti Kharbanda."
  },
  {
    src: "/film2.webp",
    svg: "/two.svg",
    color: "#bf8a49",
    alt: "image 2",
    para: "Chhava tells the inspiring story of Chhatrapati Sambhaji Maharaj, son of the legendary Shivaji. Known for his valor and intellect, he fights to preserve Maratha pride against Mughal tyranny. The film beautifully blends war, sacrifice, and royal legacy. It dives deep into his strategic brilliance and emotional resilience. Released on 24 December 2024, it features Vicky Kaushal and Rashmika Mandanna."
  },
  {
    src: "/film3.webp",
    svg: "/three.svg",
    color: "#302f3d",
    alt: "image 4",
    para: "Sikandar is a dark, action-packed tale of a man's rise from helplessness to underworld dominance. After facing betrayal and loss, he chooses violence and vengeance to gain control. The film showcases his inner conflict and moral decline. It explores loyalty, power, and survival in a world of crime. Released on 9 August 2024, it stars Salman Khan and Aayush Sharma."
  },
  {
    src: "/film4.webp",
    svg: "/4.svg",
    color: "#15413b",
    alt: "image 6",
    para: "The Good, The Bad, The Ugly is a multi-layered crime thriller. It follows three men, each navigating betrayal, justice, and survival. Their paths cross in unpredictable ways, with shifting loyalties and hidden motives. The film blends stylized action with deep psychological tension. Released on 15 August 2024, it stars Ajay Devgn, Jackie Shroff, and Naseeruddin Shah."
  },
  {
    src: "/film5.webp",
    svg: "/5.svg",
    color: "#c6451c",
    alt: "image 8",
    para: "Pushpa 2: The Rule continues the gritty saga of Pushpa Raj. As he climbs further in the red sandalwood smuggling ring, new enemies and challenges arise. His rivalry with SP Shekhawat intensifies the stakes. Power, pride, and bloodshed dominate this explosive sequel. Released on 6 December 2024, it stars Allu Arjun, Fahadh Faasil, and Rashmika Mandanna."
  },
  {
    src: "/film6.webp",
    svg: "/6.svg",
    color: "#4cb882",
    alt: "image 9",
    para: "When Life Gives You Tangerines is a gentle yet moving indie film. It follows a woman’s emotional journey after a life-altering event. Through small moments and simple joys, she begins to heal. The tangerines symbolize change, growth, and unexpected sweetness in life. Released on 21 June 2024, it stars Saiyami Kher and Adarsh Gourav."
  },
  {
    src: "/film7.webp",
    svg: "/7.svg",
    color: "#a2984a",
    alt: "image 10",
    para: "This film’s summary has not been added yet. Please check back later for updates. If you'd like, you can provide the film title for us to summarize. We aim to deliver meaningful content for every visual. Stay tuned for more information on this entry. Release date and cast are to be determined."
  },
    {
    src: "/film8.webp",
    svg: "/8.svg",
    color: "#a2984a",
    alt: "image 10",
    para: "This film’s summary has not been added yet. Please check back later for updates. If you'd like, you can provide the film title for us to summarize. We aim to deliver meaningful content for every visual. Stay tuned for more information on this entry. Release date and cast are to be determined."
  },
    {
    src: "/film9.webp",
    svg: "/9.svg",
    color: "#a2984a",
    alt: "image 10",
    para: "This film’s summary has not been added yet. Please check back later for updates. If you'd like, you can provide the film title for us to summarize. We aim to deliver meaningful content for every visual. Stay tuned for more information on this entry. Release date and cast are to be determined."
  },
    {
    src: "/film10.webp",
    svg: "/10.svg",
    color: "#a2984a",
    alt: "image 10",
    para: "This film’s summary has not been added yet. Please check back later for updates. If you'd like, you can provide the film title for us to summarize. We aim to deliver meaningful content for every visual. Stay tuned for more information on this entry. Release date and cast are to be determined."
  }
];



export default function ImageScroller() {

    const [show, setshow] = useState(null);

  function handleClick(idx) {
    setshow(idx);
  }

  return (
    <>
    <div className="flex overflow-x-auto space-x-4 px-4 py-2 mt-6 pb-2.5">
      {images.map((img, idx) => (
        <div
          key={idx}
           onClick={()=>{handleClick(idx)}}
          className="grid grid-cols-[24px_36px_148px] grid-rows-[121px_98px_24px] flex-shrink-0"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={184}
            height={242}
            className="col-start-2 col-end-4 row-start-1 row-end-4 rounded-[23px] cursor-pointer w-[184px] h-[242px]"
          />
          <Image
            src={img.svg}
            alt={`${img.alt} overlay`}
            width={64}
            height={120}
            className="col-start-1 col-end-3 row-start-2 row-end-3 w-[64px] h-[120px]"
          />
        </div>

       
      ))}

        {show !== null && (
        <Trending Imgsrc={images[show].src} show={show} setshow={setshow} color={images[show].color} para ={images[show].para}/>
      )}
    </div>


    </>
  );
}
