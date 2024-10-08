'use client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient';
import Image from "next/image";
import { cn } from "@/lib/utils";
import casinoonline from '../assets/image/casinoonline.jpg'
import cricketimage from '../assets/image/cricketimage1.jpg'
import sportbook from '../assets/image/cricketimage2.jpg'
import webappimage from '../assets/image/webappimage.jpg'
import casinoImage4 from '../assets/image/casinoImage4.jpg'
import apiimage from '../assets/image/apiImage.jpg'
import uiuxdesign from '../assets/image/uiuxdesign.jpg'
import turnkey from '../assets/image/turnkey.png'
import cryptocasino from '../assets/image/cryptocasion.jpg'
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Products = () => {
    const products = [
        {
          title: "Casino",
          description: "We create high-quality, immersive casino games that captivate players and keep them engaged. Our solutions are designed to offer a seamless and exciting gaming experience.",
          image: casinoImage4, // Update the path as needed
        },
        
        {
          title: "WebApp",
          description: "Develop robust and intuitive web applications tailored to your business needs. Our web apps are designed to offer superior performance, security, and user experience.",
          image: webappimage,// Update the path as needed
        },
        {
          title: "Sport",
          description: "Our sports betting software provides comprehensive solutions for both in-play and pre-match betting. We offer advanced features that ensure a smooth and engaging user experience.",
          image: cricketimage, // Update the path as needed
        },
        {
          title: "Api Provider",
          description: "We provide powerful and secure APIs that allow seamless integration with various platforms and services. Our APIs are designed to be scalable and reliable, supporting your business growth.",
          image: apiimage,
        },{
            title: "Online Casino",
            description: "We create high-quality, immersive casino games that captivate players and keep them engaged. Our solutions are designed to offer a seamless and exciting gaming experience.",
            image: casinoonline, // Update the path as needed
          },
          {
            title: "Crypto Casino",
            description:"Сutting-edge crypto casino where possibilities are endless! With over 30 cryptocurrencies accepted, you can experience a new level of borderless payments.",
            image: cryptocasino, // Update the path as needed
          },
          {
            title:'Sportsbook',
            description:"Unique and high-performance solution for sports betting operations. Ninja Game offers unparalleled performance, reliability, and scalability for all sports betting operations.",
            image:sportbook,
          },
      ];
      
      return (
        <div className="max-w-7xl mx-auto mt-10 ">
  <h2 className="sm:text-start text-center sm:text-3xl font-bold mb-6 text-4xl ">What We Offer</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
    {products.map((product, index) => (
        
      <CardContainer key={index} className="ml-4 mr-4 sm:m-0">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full  sm:h-[425px] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            {product.title}
          </CardItem>
         
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
          >
            {product.description}
          </CardItem>
       
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={product.image}
              height="1000"
              width="1000"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10 ">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Learn More
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
 
    ))}
  </div>
</div>

      );
}

export default Products