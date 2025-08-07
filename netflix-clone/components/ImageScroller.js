"use client"

// components/ImageScroller.js
import Image from "next/image";
import { useState } from "react";
import Trending from "./Trending";

const images = [
 
  { src: "/film1.webp", svg: "/one.svg",color:"#aa150f" ,alt: "image 1", para: " The Third Case follows SP Arjun Sarkaar, a sharp yet emotionally scarred officer in the Homicide Intervention Team, as he investigates a series of gruesome murders in Vizag. The case begins with the discovery of a woman’s body, mutilated and missing hormones. As Arjun dives deeper, he finds links between this murder and a string of similar cases, uncovering a dark conspiracy involving a cult known as CTK—Capture, Torture, Kill. Operating under the front of an NGO called Keen to Care (KTC), the cult traffics young women and extracts hormones to create a drug meant for wealthy elites desiring eternal youth. To expose the truth, Arjun fakes his own arrest and goes undercover in prison to befriend Samuel Joseph, the man leading KTC. Believing Arjun to be a disgraced officer, Samuel opens up, unaware of Arjun’s true mission. Meanwhile, the rest of the HIT team, including Krishna Dev (KD), remains unaware of Arjun's dangerous plan. The case becomes even more personal when Arjun learns that ACP Dhanya Mohan had previously infiltrated the cult and died while trying to save a baby from them. Motivated by her sacrifice, Arjun sets out to bring down CTK completely.In a high-stakes climax, Arjun, along with the HIT team, raids the cult's base in Arunachal Pradesh. After a brutal confrontation, he kills the cult’s key members and finally confronts Samuel, who is revealed to be the real mastermind. Arjun eliminates him, ending the horrifying operation. As a tribute to Dhanya, he names her the official investigator on the case posthumously. The film ends with justice served, and a mid-credits scene teases the next case in Chennai, introducing ACP Veerappan and expanding the HIT universe. " },

  { src: "/film2.webp", svg: "/two.svg",color:"#bf8a49" ,alt: "image 2" , para: "Jaat is a raw, unapologetic tale of pride, power, and resistance, set against the backdrop of rural Haryana. It follows a young man shaped by generational strength and rigid societal codes, who challenges caste hierarchies, systemic oppression, and the violence baked into his world. As tensions escalate between tradition and rebellion, his journey becomes one of survival, vengeance, and self-assertion. The film dives into the psyche of a community that prides itself on strength and loyalty but often wrestles with its own contradictions. With intense performances and rooted storytelling, Jaat is both a cultural reflection and a fiery character study. The narrative doesn't shy away from the consequences of violence, and ultimately, it questions what true honor and strength really mean in a modernizing world."
 },
  
 { src: "/film4.webp", svg: "/4.svg",color:"#302f3d" ,alt: "image 4" , para: "Chhava tells the legendary story of Chhatrapati Sambhaji Maharaj, the fearless and intellectual son of Shivaji Maharaj, who stepped into power amidst conspiracies and civil unrest. Betrayed by those within his own royal circle, including his stepmother Soyarabai, Sambhaji overcomes palace politics and asserts his rightful claim to the Maratha throne. He emerges not just as a ruler, but as a fierce warrior who takes the fight directly to the Mughals, most notably with his daring raid on Burhanpur. The film captures his ideological commitment to Swarajya (self-rule) and his poetic intellect, making him a warrior-scholar in the truest sense. As he faces imprisonment and torture, his unwavering spirit cements his place in history as one of the most defiant and respected Maratha kings. Chhava is a stirring tribute to a hero whose legacy continues to inspire generations." },
 
 { src: "/film6.webp", svg: "/6.svg",color:"#15413b" ,alt: "image 6" , para: "Sikandar is a grand retelling of Alexander the Great’s life, capturing the spirit of a man who set out to conquer the known world and came face-to-face with the limits of ambition and humanity. From his military genius on the battlefield to his complex relationships with friends, enemies, and lovers, the film paints a rich portrait of a king both revered and feared. It explores the price of glory as Alexander’s thirst for power strains his morality, sanity, and identity. Through grand battles and political intrigues, the film shows his internal struggle between becoming a godlike ruler and staying human. As he reaches India, disillusionment grows, both in his army and within himself. Sikandar is not just a tale of victory but a haunting reminder of how greatness can often come at the cost of peace and belonging."},
 
 { src: "/film8.webp", svg: "/8.svg",color:"#c6451c" ,alt: "image 8" , para: "Good Bad Ugly is a high-stakes Telugu action thriller that throws three vastly different men into a shared storm of crime, morality, and revenge. A cold-blooded assassin, a tormented cop chasing redemption, and a calculating mastermind with his own twisted agenda find their paths fatally intertwined. Set in a city teetering on the edge of chaos, the story unfolds through brutal confrontations, shifting alliances, and philosophical tension that blurs the boundaries of justice. As the characters clash, their layered backstories expose deep wounds, traumas, and motivations that make them more than their labels. The narrative cleverly challenges the viewer's perception of good and evil, making every character morally gray. With sleek visuals and a hard-hitting score, the film offers a gritty, stylish look at how circumstances can turn men into monsters—or saviors."},
 
 { src: "/film9.webp", svg: "/9.svg",color:"#4cb882" ,alt: "image 9" , para: "In Pushpa 2: The Rule, Pushpa Raj rises from a smuggler to a feared kingpin, battling on multiple fronts to protect his empire and identity. Following the events of Pushpa: The Rise, he faces formidable new threats—including vengeful police officer Bhanwar Singh Shekhawat and powerful political players determined to destroy him. Pushpa’s journey intensifies as his legend grows, bringing him fame, enemies, and internal battles that test his resolve. This installment digs deeper into his backstory, revealing his pain, family history, and what fuels his relentless rise. As loyalty is tested and betrayal looms, Pushpa becomes not just a man, but a symbol of rebellion for the oppressed. With explosive action, intense emotion, and a darker tone, Pushpa 2 sets the stage for a fiery confrontation between power and justice."},
 
 { src: "/film10.webp", svg: "/10.svg",color:"#a2984a" ,alt: "image 10" , para: "When Life Gives You Tangerines is a beautifully intimate Korean drama set on Jeju Island, where tradition and change coexist. The story centers on Ae-sun, a lively, stubborn young woman who dreams of becoming a poet despite societal expectations, and Gwan-sik, her silent yet fiercely loyal childhood friend who stands by her through life’s twists and turns. Told across decades, the narrative explores their slow-burn connection, emotional resilience, and the sacrifices that shape their lives. The story gently reveals how unspoken feelings and missed moments can linger across time. Through the shifting seasons of Jeju and the routines of everyday life, their relationship quietly evolves into something profound. The film is a moving meditation on love, timing, and the poetry of ordinary moments, leaving a lasting emotional imprint."},
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
