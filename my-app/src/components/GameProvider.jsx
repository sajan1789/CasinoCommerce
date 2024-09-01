"use client";
import React, { useState ,useEffect} from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import pariPlay from '../assets/image/pariplay-provider.webp';
import RedTiger from '../assets/image/Red-Tiger-Gaming.webp';
import NetEnt from '../assets/image/NetEnt.webp';
import kaGaming from '../assets/image/kagaming-gaming-provider.webp';
import gameProviderImage1 from '../assets/image/10001.png'
import gameProviderImage2 from '../assets/image/10002.png'
import gameProviderImage3 from '../assets/image/10003.png'
import gameProviderImage4 from '../assets/image/10004.png'
import gameProviderImage5 from '../assets/image/10005.png'
import gameProviderImage6 from '../assets/image/10006.png'
import gameProviderImage7 from '../assets/image/10007.png'
import gameProviderImage8 from '../assets/image/10008.png'
import gameProviderImage9 from '../assets/image/10009.png'
import gameProviderImage11 from '../assets/image/10011.png'
import gameProviderImage12 from '../assets/image/10012.png'
import gameProviderImage13 from '../assets/image/10013.png'
import gameProviderImage14 from '../assets/image/10014.png'
import gameProviderImage16 from '../assets/image/10016.png'
import gameProviderImage17 from '../assets/image/10017.png'
import gameProviderImage18 from '../assets/image/10018.png'
import gameProviderImage19 from '../assets/image/10019.png'
import gameProviderImage20 from '../assets/image/10020.png'
import gameProviderImage21 from '../assets/image/10021.png'
import gameProviderImage22 from '../assets/image/10022.png'
import gameProviderImage23 from '../assets/image/10023.png'
import gameProviderImage48 from '../assets/image/10048.webp'
import gameProviderImage49 from '../assets/image/10049.webp'
import gameProviderImage50 from '../assets/image/10050.png'
import gameProviderImage51 from '../assets/image/10051.webp'
import gameProviderImage52 from '../assets/image/10052.webp'
import gameProviderImage60 from '../assets/image/10060.webp'
import gameProviderImage62 from '../assets/image/10062.webp'
import gameProviderImage63 from '../assets/image/10063.webp'
import gameProviderImage65 from '../assets/image/10065.webp'
import gameProviderImage66 from '../assets/image/10066.png'
import gameProviderImage67 from '../assets/image/10067.webp'
import gameProviderImage68 from '../assets/image/10068.png'
import gameProviderImage70 from '../assets/image/10070.webp'
import gameProviderImage71 from '../assets/image/10071.webp'
import gameProviderImage72 from '../assets/image/10072.webp'
import gameProviderImage75 from '../assets/image/10075.webp'
import gameProviderImage76 from '../assets/image/10076.webp'
import gameProviderImage77 from '../assets/image/10077.webp'
import gameProviderImage79 from '../assets/image/10079.webp'
import gameProviderImage80 from '../assets/image/10080.webp'
import gameProviderImage81 from '../assets/image/10081.webp'
import gameProviderImage82 from '../assets/image/10082.webp'
import gameProviderImage83 from '../assets/image/10083.webp'
import gameProviderImage84 from '../assets/image/10084.webp'
import gameProviderImage85 from '../assets/image/10085.webp'
import gameProviderImage88 from '../assets/image/10088.webp'
// import gameProviderImage89 from '../assets/image/10089.png'
// import gameProviderImage48 from '../assets/image/1002.png'


// import gameProviderImage1 from '../assets/image/10001.png'
import axios from "axios";

const images = [
  { src: RedTiger, alt: "Image 1" },
  { src: pariPlay, alt: "Image 2" },
  { src: kaGaming, alt: "Image 3" },
  { src: gameProviderImage1, alt: "Image 4" },
  { src: gameProviderImage2, alt: "Image 5" },
  { src: gameProviderImage3, alt: "Image 6" },
  // { src: gameProviderImage4, alt: "Image 7" }, 
  { src: gameProviderImage5, alt: "Image 8" },
  { src: gameProviderImage6, alt: "Image 9" },
  // { src: gameProviderImage7, alt: "Image 10" },
  { src: gameProviderImage7, alt: "Image 11" },
  { src: gameProviderImage8, alt: "Image 12" },
  { src: gameProviderImage9, alt: "Image 13" },
  // { src: gameProviderImage9, alt: "Image 14" },
  // { src: gameProviderImage11, alt: "Image 15" },
  { src: gameProviderImage12, alt: "Image 11" },
  { src: gameProviderImage13, alt: "Image 12" },
  { src: gameProviderImage14, alt: "Image 13" },
  { src: gameProviderImage16, alt: "Image 14" },
  { src: gameProviderImage17, alt: "Image 15" },
  { src: gameProviderImage18, alt: "Image 15" },
  { src: gameProviderImage19, alt: "Image 15" },
  { src: gameProviderImage20, alt: "Image 15" },
  // { src: gameProviderImage21, alt: "Image 15" }, 
  { src: gameProviderImage22, alt: "Image 15" },
  { src: gameProviderImage23, alt: "Image 15" },
  { src: gameProviderImage48, alt: "Image 15" },
  { src: gameProviderImage49, alt: "Image 15" },
  { src: gameProviderImage50, alt: "Image 15" },
  { src: gameProviderImage51, alt: "Image 15" },
  { src: gameProviderImage52, alt: "Image 15" },
  { src: gameProviderImage60, alt: "Image 15" },
  { src: gameProviderImage62, alt: "Image 15" },
  { src: gameProviderImage63, alt: "Image 15" },
  { src: gameProviderImage65, alt: "Image 15" },
  { src: gameProviderImage66, alt: "Image 15" },
  { src: gameProviderImage67, alt: "Image 15" },
  { src: gameProviderImage68, alt: "Image 15" },
  { src: gameProviderImage70, alt: "Image 15" },
  { src: gameProviderImage71, alt: "Image 15" },
  { src: gameProviderImage72, alt: "Image 15" },
  { src: gameProviderImage75, alt: "Image 15" },
  { src: gameProviderImage76, alt: "Image 15" },
  { src: gameProviderImage77, alt: "Image 15" },
  { src: gameProviderImage79, alt: "Image 15" },
  { src: gameProviderImage80, alt: "Image 15" },
  { src: gameProviderImage81, alt: "Image 15" },
  { src: gameProviderImage82, alt: "Image 15" },
  { src: gameProviderImage83, alt: "Image 15" },
  { src: gameProviderImage84, alt: "Image 15" },
  { src: gameProviderImage85, alt: "Image 15" },
  { src: gameProviderImage88, alt: "Image 15" },

];

export function GameProvider() {
  const [visibleImages, setVisibleImages] = useState(15);
  const [casinoProvider, setCasinoProvider] = useState([]);
  const [providerLoading,setProviderLoading]=useState(false)

  const handleViewMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 15); // Load 15 more images each time
  };

  const handleViewLess = () => {
    setVisibleImages(15); // Reset to initial 15 images
  };

  return (
    <div className="sm:px-20 w-[100%] mt-16 text-center px-10 ">
      <div className="sm:text-start mb-8 lg:w-[50%] flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold">GAME PROVIDERS</h1>
        <p className="text-base text-gray-400  mr-4 ml-4">Explore our wide range of game providers. Each image below represents a different game provider that we offer in our casino game development platform.</p>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:p-10">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index} >
            <BackgroundGradient className="rounded-[22px] last: border px-4 sm:p-2 bg-white dark:bg-zinc-900 flex items-center justify-center mx-auto h-[100px] ">
              <Image
                src={image.src}
                alt={image.alt}
                
                className="object-contain h-[150px] w-[150px] "
              />
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="pr-10 flex flex-row-reverse sm:-mt-2 mt-4">
        {visibleImages < images.length ? (
          <span onClick={handleViewMore} className="text-white cursor-pointer">View more →</span>
        ) : (
          <span onClick={handleViewLess} className="text-white cursor-pointer">View less ←</span>
        )}
      </div>
    </div>
  );
}
