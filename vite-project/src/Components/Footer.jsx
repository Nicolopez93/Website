import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 px-2 py-y">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2"> Solutions </h6>
          <ul className="list-none mt-4">
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Comerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2"> Support </h6>
          <ul className="list-none mt-4">
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">Api Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2"> Company </h6>
          <ul className="list-none mt-4">
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2"> Legal </h6>
          <ul className="list-none mt-4">
            <li className="py-1">Claim</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter </p>
          <p className="py-4">the latest news, and offers</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="email"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center">
        <p className="py-4">Copyright ©2024 - All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaGithub size={30} />
          <FaTwitter size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
