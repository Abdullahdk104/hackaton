import Image from "next/image";
import CardText from "./CardText";

export default function ProductCard() {
  return (
    <div className="w-full py-[80px] flex justify-center">
      <div className="w-[1124px] px-4 flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {[
            "/product (1).jpg",
            "/product (2).jpg",
            "/product (3).jpg",
            "/product (4).jpg",
            "/product (5).jpg",
            "/product (6).jpg",
            "/product (7).jpg",
            "/product (8).jpg"
          ].map((imagePath, index) => (
            <div key={index} className="w-full mx-auto">
              <div className="w-full h-auto">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={imagePath}  // Use relative path for images directly under the public folder
                    alt={`product ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <CardText />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
