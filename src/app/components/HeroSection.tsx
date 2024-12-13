"use client"; // Add this directive at the top of the file
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[682px]">
      {/* Image */}
      <Image
        src="/shop-hero-1-product-slide-1.jpg" // Correct path from the public folder
        alt="couple"
       height={'1000'}
        width={'1000'}
        className="w-full h-full object-cover absolute inset-0" // Ensure the image fills the space without distortion
      />
      
      {/* Text Section */}
      <div className=" ml-40 font-semibold absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 lg:px-10 text-[#fffdfd] ">
      <h5 className="mb-9 text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#fffdfd] ">
            SUMMER 2024
          </h5>
          <h2 className=" mb-9  lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat leading-[32px] lg:leading-[50px]">
           New Collections
          </h2>
          <h4 className="  mb-6  lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat leading-[24px] lg:leading-[30px] ">
          We know how large objects will act, 
          but things on a small scale.
          </h4>
        
        {/* Button Section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-[10px] mt-5">
          <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
            <h1 className="text-[14px] font-Montserrat font-bold text-white">
              BUY NOW
            </h1>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
