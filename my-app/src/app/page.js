import Image from "next/image";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import Products from "@/components/Products";
import { GameProvider } from "@/components/GameProvider";
import { Review } from "@/components/Review";
import { Example } from "@/components/example";
import { WavyBackground } from "@/components/ui/wavy-background";
import Developers from "@/components/Developers";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  mt-4 justify-between antialiased">
      <HeroSection/>
      <FeaturesSectionDemo/>
      <Products/>
      <GameProvider/>
      <Review/>
      <Example/>
      <Developers/>
      <Footer/>
    </main>
  );
}
