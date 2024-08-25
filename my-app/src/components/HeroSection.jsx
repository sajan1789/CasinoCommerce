import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Image from 'next/image';
import casinoImage3 from '../assets/image/casinoImage3.jpg';
import casinoHeroImage from '../assets/image/casinoImageHero.jpeg'
import casinoHeroImage2 from '../assets/image/casinoheroImage.png'
import illustrator from '../assets/image/herocasinologo.jpg'
function HeroSection() {
    return (
        <div className="h-[100vh] w-full flex items-center justify-center p-10  ">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-between mt-16 space-y-8 md:space-y-0">
                <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start justify-center h-full px-6">
                   
                    <h1 className="text-5xl font-bold text-center md:text-left">Leading Casino Software Provider</h1>
                    <p className="text-base text-center md:text-left">We offer the best in class casino software solutions tailored to meet your needs.</p>
                    
                    <Link href={"/explore"}  >
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                        >
                            Explore Option
                        </Button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end flex-col  ">
                    {/* <Image src={casinoHeroImage} alt="Casino Image" className="w-[100%] h-auto rounded-lg shadow-lg" /> */}
                    <Image src={illustrator} alt="Casino Image" className="w-[100%] h-[500px] rounded-lg shadow-lg" />

                </div>
            </div>
        </div>
    );
}

export default HeroSection;
