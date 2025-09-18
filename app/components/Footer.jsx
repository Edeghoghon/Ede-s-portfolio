"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.RTY} alt="logo " className="w-36 mx-auto mb-2" />
      </div>

      <div className="w-max flex items-center gap-2 mx-auto">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt="logo "
          className="w-6"
        />
        edeghoghonjoy@gmail.com
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Obozokhae Edeghoghon. All rights reserved.</p>
        <ul className="flex items-centers gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/edeghoghon">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/ede123/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/edeghoghon">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
