"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import WebServices from "@/components/WebServices";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { Review } from "@/components/Review";
import { WebReview } from "@/components/WebReview";
import { LampDemo } from "@/components/LampDemo";
function ShootingStarsAndStarsBackgroundDemo() {
    return (

        <div className=" h-auto rounded-md bg-neutral-900 flex flex-col items-center justify-center w-full gap-10 ">
            <div className=" h-[42rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full gap-12 ">
                <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                    <span>Welcome to CasinoNinga Your One-Stop Online Web Services Provider!</span>
                </h2>
                <span className="text-white text-lg font-thin">At casinoNinga, we are committed to offering complete online web services to meet your typical needs.</span>
                <Link href={"/contact"} >
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        GET IN TOUCH
                    </Button>
                </Link>
            </div>
            <div className=" flex flex-col gap-10 items-center justify-center">
                <h2 className=" text-4xl text-center">Services</h2>
                <WebServices />
            </div>
            <div className=" flex flex-col gap-10 items-center justify-center">
                <h2 className=" text-4xl text-center">Client Review</h2>
                <WebReview/>
            </div>
            <div className=" flex flex-col gap-10 items-center justify-center">
                {/* <h2 className=" text-4xl text-center">Technologies that we majorly use for Website & App Development</h2> */}
                <LampDemo/>
             

            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}

export default ShootingStarsAndStarsBackgroundDemo
