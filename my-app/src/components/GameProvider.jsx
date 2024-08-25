"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import pariPlay from '../assets/image/pariplay-provider.webp'

import RedTiger from '../assets/image/Red-Tiger-Gaming.webp'
import NetEnt from '../assets/image/NetEnt.webp'
import kaGaming from '../assets/image/kagaming-gaming-provider.webp'
const images = [
  { src: RedTiger, alt: "Image 1" },
  { src: pariPlay, alt: "Image 2" },
  { src: kaGaming, alt: "Image 3" },
  { src: RedTiger, alt: "Image 4" },
  { src: RedTiger, alt: "Image 5" },
  { src: RedTiger, alt: "Image 6" },
  { src: RedTiger, alt: "Image 7" },
  { src: RedTiger, alt: "Image 8" },
  { src: RedTiger, alt: "Image 9" },
  { src: RedTiger, alt: "Image 10" },
  { src: RedTiger, alt: "Image 1" },
  { src: pariPlay, alt: "Image 2" },
  { src: pariPlay, alt: "Image 2" },
  { src: pariPlay, alt: "Image 2" },
  { src: RedTiger, alt: "Image 10" },
];

export function GameProvider() {

    return (
        <div className="px-20 w-[100%] mt-16">
          <div className="text-start mb-8 lg:w-[50%] flex flex-col gap-5">
            <h1 className="text-3xl font-bold">GAME PROVIDERS</h1>
            <p className="text-base text-gray-400">Explore our wide range of game providers. Each image below represents a different game provider that we offer in our casino game development platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:p-10">
            {images.map((image, index) => (
              <div key={index} className="p-2 ">
                <BackgroundGradient className="rounded-[22px] p-0 sm:p-2 bg-white dark:bg-zinc-900  flex items-center justify-center mx-auto ">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={70} // Set height and width according to your preference
                    width={70}
                    className="object-contain h-full w-full p-2"
                  />
                </BackgroundGradient>
              </div>
            ))}
           
          </div>
          <div className="pr-10 flex flex-row-reverse -mt-2">
            <span className=" text-white cursor-pointer">View more →</span>

            </div>
        </div>
      );
  
  
}
