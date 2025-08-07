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
    para: "HIT: The Third Case follows SP Arjun Sarkaar, a brilliant yet emotionally scarred cop, who delves into a chilling double murder case. As he uncovers shocking links between the victims and a twisted killer, Arjun is forced to confront his own past. The narrative intensifies with mind games, brutal evidence, and emotional trauma. It blends psychological depth with intense investigative suspense. Released on 28 July 2023, it stars Adivi Sesh and Meenakshi Chaudhary."
  },
  {
    src: "/film2.webp",
    svg: "/two.svg",
    color: "#bf8a49",
    alt: "image 2",
    para: "Jaat is a gripping action-drama rooted in rural India. It follows a fierce protagonist who stands against social injustice and caste oppression. The film portrays intense village politics, pride, and rebellion. With raw visuals and hard-hitting dialogues, it captures the essence of grassroots resistance. Released on 12 July 2024, it stars Randeep Hooda and Kriti Kharbanda."
  },
  {
    src: "/film3.webp",
    svg: "/three.svg",
    color: "#302f3d",
    alt: "image 3",
    para: "Retro is a stylized neo-noir crime drama set in the vibrant 1980s. A jazz-loving detective is pulled into a web of art thefts and political corruption. With vintage aesthetics and a pulsing soundtrack, it balances mystery with nostalgia. Every clue peels back layers of betrayal and secrets. Released on 18 October 2024, it stars Rajkummar Rao and Huma Qureshi."
  },
  {
    src: "/film4.webp",
    svg: "/4.svg",
    color: "#15413b",
    alt: "image 4",
    para: "Chhava tells the inspiring story of Chhatrapati Sambhaji Maharaj, son of the legendary Shivaji. Known for his valor and intellect, he fights to preserve Maratha pride against Mughal tyranny. The film beautifully blends war, sacrifice, and royal legacy. It dives deep into his strategic brilliance and emotional resilience. Released on 24 December 2024, it features Vicky Kaushal and Rashmika Mandanna."
  },
  {
    src: "/film5.webp",
    svg: "/5.svg",
    color: "#c6451c",
    alt: "image 5",
    para: "The Royals is a gripping political thriller about a fictional royal family's power struggle. As scandals, ambition, and betrayal surface, loyalties are tested within palace walls. The film dives into legacy, media pressure, and secrets threatening a dynasty. With a modern setting, it adds a fresh twist to monarchy tales. Released on 30 August 2024, it stars Tabu, Jim Sarbh, and Ishaan Khatter."
  },
  {
    src: "/film6.webp",
    svg: "/6.svg",
    color: "#4cb882",
    alt: "image 6",
    para: "Sikandar is a dark, action-packed tale of a man's rise from helplessness to underworld dominance. After facing betrayal and loss, he chooses violence and vengeance to gain control. The film showcases his inner conflict and moral decline. It explores loyalty, power, and survival in a world of crime. Released on 9 August 2024, it stars Salman Khan and Aayush Sharma."
  },
  {
    src: "/film7.webp",
    svg: "/7.svg",
    color: "#a2984a",
    alt: "image 7",
    para: "The Diplomat is a tense international thriller centered around a seasoned Indian envoy caught in a deadly game of espionage. As tensions escalate between nations, he must balance diplomacy, ethics, and covert operations. The story weaves politics with personal stakes. Intelligence, betrayal, and patriotism fuel this gripping tale. Released on 4 October 2024, it stars Irrfan Khan (posthumously via VFX) and Nimrat Kaur."
  },
  {
    src: "/film8.webp",
    svg: "/8.svg",
    color: "#b73b3b",
    alt: "image 8",
    para: "The Good, The Bad, The Ugly is a multi-layered crime thriller. It follows three men, each navigating betrayal, justice, and survival. Their paths cross in unpredictable ways, with shifting loyalties and hidden motives. The film blends stylized action with deep psychological tension. Released on 15 August 2024, it stars Ajay Devgn, Jackie Shroff, and Naseeruddin Shah."
  },
  {
    src: "/film9.webp",
    svg: "/9.svg",
    color: "#5e2612",
    alt: "image 9",
    para: "Pushpa 2: The Rule continues the gritty saga of Pushpa Raj. As he climbs further in the red sandalwood smuggling ring, new enemies and challenges arise. His rivalry with SP Shekhawat intensifies the stakes. Power, pride, and bloodshed dominate this explosive sequel. Released on 6 December 2024, it stars Allu Arjun, Fahadh Faasil, and Rashmika Mandanna."
  },
  {
    src: "/film10.webp",
    svg: "/10.svg",
    color: "#6f9940",
    alt: "image 10",
    para: "When Life Gives You Tangerines is a gentle yet moving indie film. It follows a woman’s emotional journey after a life-altering event. Through small moments and simple joys, she begins to heal. The tangerines symbolize change, growth, and unexpected sweetness in life. Released on 21 June 2024, it stars Saiyami Kher and Adarsh Gourav."
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
