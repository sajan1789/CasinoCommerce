import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import apilogo from '../assets/image/api-illustration.png'
import apiicon from '../assets/image/api_icon.webp'
function WebApi() {
    return (
        <div className="h-auto w-full flex items-center justify-center">

            <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-between mt-16 space-y-8 md:space-y-0">
                <div className="flex flex-col gap-10 w-full md:w-1/2 items-center md:items-start justify-center h-full px-6">
                     <div>
                        <Image src={apiicon} alt="khihih" className=" w-[50px] h-[50px]" />
                     </div>
                    <h1 className="text-5xl font-bold text-center md:text-left">Website API</h1>
                    <p className="text-base text-center md:text-left">Integrate sports and casino content into your website using our scalable and practical solution</p>
                    <div className=" flex gap-4">
                        <p className=" border px-5 py-1 text-[10px] rounded-full"> All-in-one API</p>
                        <p className=" border px-5 py-1 text-[10px] rounded-full"> Technical Support</p>
                        <p className=" border px-5 py-1 text-[10px] rounded-full"> Single Contract</p>
                    </div>
                    <h2>Learn more →</h2>
                </div>
                <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end flex-col  ">
                    {/* <Image src={casinoHeroImage} alt="Casino Image" className="w-[100%] h-auto rounded-lg shadow-lg" /> */}
                    <Image  src={apilogo} alt="Casino Image" className="w-[100%] h-[500px] rounded-lg shadow-lg" />

                </div>
            </div>
            
        </div>
    );
}

export default WebApi;