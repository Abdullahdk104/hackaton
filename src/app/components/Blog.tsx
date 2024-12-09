import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="w-[1440px] h-[1044px] px-[195px] bg-white">
      {/* Main Container */}
      <div className="w-[1050px] h-auto mx-auto py-[112px] flex flex-col gap-[80px]">
        {/* Header Section */}
        <div className="w-[691px] h-auto mx-auto text-center flex flex-col gap-[10px]">
          <h5 className="text-sm font-bold text-[#252B42]">Practice Advice</h5>
          <h2 className="text-3xl font-bold text-[#252B42]">Featured Posts</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="flex justify-between">
          {/* Blog Card 1 */}
          <div className="w-[328px] h-auto flex flex-col gap-[16px]">
            {/* Image */}
            <div className="w-full h-[300px] relative">
              <Image
                src="/blog-1.jpg" // Replace with your image path
                alt="Blog Post 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-[#252B42]">
              Blog Post Title 1
            </h3>
            <p className="text-gray-600 text-sm">
              Short description or preview of the blog post content goes here.
            </p>
          </div>

          {/* Blog Card 2 */}
          <div className="w-[328px] h-auto flex flex-col gap-[16px]">
            {/* Image */}
            <div className="w-full h-[300px] relative">
              <Image
                src="/blog-2.jpg" // Replace with your image path
                alt="Blog Post 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-[#252B42]">
              Blog Post Title 2
            </h3>
            <p className="text-gray-600 text-sm">
              Short description or preview of the blog post content goes here.
            </p>
          </div>

          {/* Blog Card 3 */}
          <div className="w-[328px] h-auto flex flex-col gap-[16px]">
            {/* Image */}
            <div className="w-full h-[300px] relative">
              <Image
                src="/blog-3.jpg" // Replace with your image path
                alt="Blog Post 3"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Content */}
            <h3 className="text-lg font-bold text-[#252B42]">
              Blog Post Title 3
            </h3>
            <p className="text-gray-600 text-sm">
              Short description or preview of the blog post content goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
