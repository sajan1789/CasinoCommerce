import Image from "next/image";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import Products from "@/components/Products";
import { GameProvider } from "@/components/GameProvider";
import { Review } from "@/components/Review";
// import { Example } from "@/components/example";
import { WavyBackground } from "@/components/ui/wavy-background";
import Developers from "@/components/Developers";
import Footer from "@/components/Footer";
import { Example } from "@/components/Example";
import TurnKey from "@/components/TurnKey";
import CasinoGameAggregation from "@/components/CasinoGameAggregation";
import WebApi from "@/components/WebApi";
import FiguresAndFacts from "@/components/FiguresAndFacts";
import ContactModal from "@/components/ContactModal";
import IconDisplay from "@/components/IconDisplay";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  mt-4 justify-between antialiased ">
      <HeroSection/>
      <FeaturesSectionDemo/>
      <Products/>
      <GameProvider/>
      <TurnKey/>
      <CasinoGameAggregation/>
      <WebApi/>
      <FiguresAndFacts/>
      <IconDisplay/>
      <Review/>
     
      {/* <div className="flex flex-col gap-10 items-center justify-center">
                <AppleCardsCarouselDemo />
            </div> */}
      <Example/>
      <Developers/>
      <Footer/>
    </main>
  );
}
