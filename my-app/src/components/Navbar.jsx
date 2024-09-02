"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import casinoImage1 from '../assets/image/casinoImage1.jpg'
import casinoImage2 from '../assets/image/casinoImage2.jpg'
import casinoImage3 from '../assets/image/casinoImage3.jpg'
import casinoImage4 from '../assets/image/casinoImage4.jpg'
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { flexbox } from "@chakra-ui/react";
import ContactModal from "./ContactModal";
const Navbar1 = () => {

  return (
    <div className="relative  flex items-center justify-center">
      <Navbar className="top-2" />

    </div>
  );
}
function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const products = [
    {
      title: "Algochurn",
      href: "https://algochurn.com",
      src: casinoImage1,
      description: "Prepare for tech interviews like never before."
    },
    {
      title: "Tailwind Master Kit",
      href: "https://tailwindmasterkit.com",
      src: casinoImage2,
      description: "Production ready Tailwind css components for your next project"
    },
    {
      title: "Moonbeam",
      href: "https://gomoonbeam.com",
      src: casinoImage3,
      description: "Never write from scratch again. Go from idea to blog in minutes."
    },
    {
      title: "Rogue",
      href: "https://userogue.com",
      src: casinoImage4,
      description: "Respond to government RFPs, RFIs and RFQs 10x faster using AI"
    }
  ];
  const Services = [
    { href: "/webdevelopment", text: "Web Development" },
    { href: "/casinoaming", text: "Casino Gaming" },
    { href: "/seo", text: "Sport Game" },
    { href: "/branding", text: "Game Provider" }
  ];
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50 ",)}
    >

      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem  item="Home">

          </MenuItem>
        </Link>
        {/* <MenuItem setActive={setActive} active={active} item="Solutions" >
          <div className="flex flex-col space-y-4 text-sm">
            {Services.map((link, index) => (
              <HoveredLink key={index} href={link.href}>
                {link.text}
              </HoveredLink>
            ))}
          </div>
        </MenuItem> */}

        <MenuItem setActive={setActive} active={active}  item="Products">
          <div className="text-sm grid sm:grid-cols-2 gap-10 p-4 ml-10 sm:m-0">
            {products.map((product, index) => (
              <ProductItem
                key={index}
                title={product.title}
                href={product.href}
                src={product.src}
                description={product.description}
              />
            ))}
          </div>
        </MenuItem>

      <ContactModal/>
    
    
      </Menu>
      
    </div>
  );
}
export default Navbar1