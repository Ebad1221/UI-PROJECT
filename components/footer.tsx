import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 ">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">FIND A STORE</li>
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>SEND US FEEDBACK</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">GET HELP</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="font-medium text-white">ABOUT NIKE</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
           
          <div className="flex space-x-4 text-xl">
  <span className="hover:text-white cursor-pointer">
    <FaTwitter />
  </span>
  <span className="hover:text-white cursor-pointer">
    <FaFacebookF />
  </span>
  <span className="hover:text-white cursor-pointer">
    <FaYoutube />
  </span>
  <span className="hover:text-white cursor-pointer">
    <FaInstagram />
  </span>
</div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">&copy; 2023 Nike, Inc. All Rights Reserved</p>
          <div className="hidden sm:flex text-sm space-x-6">
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Terms of Sale</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Nike Privacy Policy</a>
          </div>
          <p className="text-sm mt-4 sm:mt-0">India</p>
        </div>
      </div>
    </footer>
  );
};

