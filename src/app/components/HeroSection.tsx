"use client"; // Add this directive at the top of the file
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[682px]">
      {/* Optimized Image */}
      <Image
        src="/shop-hero-1-product-slide-1.jpg"
        alt="A couple enjoying the summer collection" // Improved alt text for accessibility
        height={1080}
        width={1920}
        quality={100}
        priority // Ensure the image loads quickly
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Text Section */}
      <div className="ml-40 font-semibold absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 lg:px-10 text-white">
        <h5 className="mb-9 text-sm lg:text-base font-Montserrat font-bold leading-6 lg:leading-6">
          SUMMER 2024
        </h5>
        <h2 className="mb-9 lg:w-[375px] text-lg lg:text-2xl font-Montserrat leading-8 lg:leading-[50px]">
          New Collections
        </h2>
        <h4 className="mb-6 lg:w-[375px] text-sm lg:text-lg font-Montserrat leading-6 lg:leading-8">
          We know how large objects will act, but things on a small scale.
        </h4>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mt-5 hover:gray">
          <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-3 px-5 lg:px-10 bg-green-500 flex justify-center items-center">
            <h1 className="text-sm font-Montserrat font-bold text-white">
              BUY NOW
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
