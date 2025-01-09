import React from "react";
import Head from "next/head";  // Import Head for adding elements to the <head> section
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image"; // Next.js optimized Image component.
import Logo from "./bhagavad-gita.png";
import Blob from "./blob.svg";
import logosvg from "./logosvg.svg";


const Hero = () => {
  return (
    <>  
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <section className="bg-light overflow-hidden relative">

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* Brand Info Section */}
          <div className="flex flex-col justify-center py-14 lg:px-20 md:py-0 relative z-20 px-9 text-center md:text-left">
            <div className="space-y-6 lg:max-w-[500px] mx-auto md:mx-0">
              {/* Apply Merriweather font to this part */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 md:text-left font-merriweather">
                Embrace the Wisdom of the{" "}
                <span className="text-secondary">Bhagavad Gita</span>
              </h1>
              <p className="text-lg text-gray-600 font-poppins">
                Explore spiritual insights, self-growth, and timeless lessons.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-[#ebc934] text-white font-semibold rounded-lg hover:bg-secondary duration-200 shadow-[0px_10px_8px_-7px_#ffd978] hover:shadow-[0px_10px_8px_-7px_#69a79c] shadow-lg py-2 px-6 flex items-center gap-2 group">
                  Get Started
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="flex justify-center items-center relative">
            <div className="relative z-10 filter drop-shadow-lg">
              <Image
                src={logosvg} // Replace with placeholder if not available
                alt="Hero Image"
                width={500}
                height={500}
                className="w-[400px] xl:w-[600px] object-cover"
              />
            </div>

            {/* Blob Background */}
            <div className="absolute -bottom-32 hidden md:block z-[1]">
              <Image
                src={Blob} // Replace with placeholder if not available
                alt="Background Blob"
                width={1500}
                height={800}
                className="w-[800px] md:w-[1500px]"
              />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Hero;
