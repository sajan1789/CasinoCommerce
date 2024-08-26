"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import WebServices from "@/components/WebServices";
import { WebReview } from "@/components/WebReview";
import dynamic from 'next/dynamic';
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import IconCarousel from "@/components/IconCarousel";
import IconDisplay from "@/components/IconDisplay";
import Footer from "@/components/Footer";
function ShootingStarsAndStarsBackgroundDemo() {
    return (
        <div className="h-auto rounded-md bg-neutral-900 flex flex-col items-center justify-center w-full gap-14">
            <div className="h-[42rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full gap-12">
                <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                    <span>Welcome to CasinoNinga Your One-Stop Online Web Services Provider!</span>
                </h2>
                <span className="text-white text-lg font-thin">At casinoNinga, we are committed to offering complete online web services to meet your typical needs.</span>
                <Link href={"/contact"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        GET IN TOUCH
                    </Button>
                </Link>
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Services</h2>
                <WebServices />
            </div>
            <div className="flex flex-col gap-12 items-center justify-center">

            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            We are Trusted by Clients</h2>
            <p className=" w-[50%] flex text-center">Our clients share their experiences of transformation and growth. Unfiltered feedback and the true testament to our service quality.</p>
                <WebReview />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
                <AppleCardsCarouselDemo />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-200 font-sans">
                Technologies that we majorly use
                </h2>
                <IconDisplay/>
            </div>
            
            <div className="mt-[150px]">
                <Footer/> 
            </div>
            <ShootingStars />
            <StarsBackground />
        </div> 
    );
}

export default ShootingStarsAndStarsBackgroundDemo;
