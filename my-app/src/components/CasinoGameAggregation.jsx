import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import turnkey from '../assets/image/turnkey.png'
import casinogameagricon from '../assets/image/gma_ag_icon.webp'
import casinogameagr from '../assets/image/casinogameage.png'
import apilogo from '../assets/image/api-illustration.png'
function CasinoGameAggregation() {
    return (
        <div className="h-auto w-full flex items-center justify-center ">
            <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-between mt-16 space-y-8 md:space-y-0 gap-40 m-auto">
                <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end flex-col  ">
                    {/* <Image src={casinoHeroImage} alt="Casino Image" className="w-[100%] h-auto rounded-lg shadow-lg" /> */}
                    <Image src={casinogameagr} alt="Casino Image" className="w-[100%] h-[500px] rounded-lg shadow-lg" />

                </div>
                <div className="flex flex-col gap-10 w-full md:w-1/2 items-center md:items-start justify-center h-full px-6   text-center ">
                    <div>
                        <Image src={casinogameagricon} alt="khihih" className=" w-[50px] h-[50px]" />
                    </div>
                    <h1 className="text-5xl font-bold text-center md:text-left flex items-center justify-center">Casino Game Aggregation</h1>
                    <p className="text-base text-center md:text-left">A huge array of popular casino games in one place for easy access, via a single API</p>
                    <div className=" flex gap-4 items-center justify-center">
                        <p className=" border px-5 py-1 text-[10px] rounded-full"> Single API Integration</p>
                        <p className=" border px-5 py-1 text-[10px] rounded-full"> Efficient back office</p>
                        <p className=" border px-5 py-1 text-[10px] rounded-full"> Content updates</p>


                    </div>
                    <h2>Learn more →</h2>
                </div>

            </div>
        </div>
    );
}

export default CasinoGameAggregation;