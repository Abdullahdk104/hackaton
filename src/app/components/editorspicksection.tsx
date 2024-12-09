import React from "react";
import Image from "next/image"; // Ensure you import Image from 'next/image'

interface ButtonWithImageProps {
  imageSrc: string;
  buttonText: string;
  altText: string;
  width: number;
  height: number;
}


const ButtonWithImage: React.FC<ButtonWithImageProps> = ({ imageSrc, buttonText, altText, width, height }) => (
  <div className="relative w-full h-full">
    <Image
      src={imageSrc}
      alt={altText}
      className="w-full h-full object-cover rounded-md"
      width={width}  // Specify width
      height={height} // Specify height
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-12 py-3 shadow-md font-Montserrat font-bold text-[#252B42] text-lg hover:bg-gray-100">
      {buttonText}
    </button>
  </div>
);

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      <div className="w-full sm:w-[1050px] h-auto flex flex-col gap-8 bg-[#FAFAFA] p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-Montserrat font-semibold text-2xl leading-8">
            EDITOR’S PICK
          </h3>
          <p className="w-full sm:w-[347px] font-Montserrat font-normal text-sm leading-5 text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section with Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Men Image */}
          <ButtonWithImage
            imageSrc="/card-1.jpg"
            buttonText="MEN"
            altText="Men"
            width={510}  // Specify width
            height={500} // Specify height
          />

          {/* Women Image */}
          <ButtonWithImage
            imageSrc="/card-2.jpg"
            buttonText="WOMEN"
            altText="Women"
            width={510}  // Specify width
            height={500} // Specify height
          />

          {/* Accessories and Kids (stacked in 1 column) */}
          <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-1">
            {/* Accessories Image */}
            <ButtonWithImage
              imageSrc="/card-3.jpg"
              buttonText="ACCESSORIES"
              altText="Accessories"
              width={510}  // Specify width
              height={242} // Specify height
            />

            {/* Kids Image */}
            <ButtonWithImage
              imageSrc="/card-4.jpg"
              buttonText="KIDS"
              altText="Kids"
              width={510}  // Specify width
              height={242} // Specify height
            />
          </div>
        </div>
      </div>
    </div>
  );
}
