import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
          <div className="flex items-center space-x-4" >
            <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-800">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Licenses</a></li>
              <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-500">User Analytics</a></li>
              <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500">
          Made With Love By Finland | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
