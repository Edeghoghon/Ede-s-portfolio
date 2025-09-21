"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3">
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.ede}
            alt="Ede — profile photo"
            width={100}
            height={100}
            className="rounded-full w-32 h-32 object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Make this a paragraph for proper heading order */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Ede{" "}
        <Image
          src={assets.hand_icon}
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Frontend web developer based in Lagos.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I am a frontend developer from Lagos, Nigeria, passionate about building
        engaging digital experiences.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex px-10 py-3 rounded-full !bg-black text-white  items-center gap-2 dark:bg-transparent dark:border dark:border-white/50 dark:text-white"
        >
          contact me
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_white
            }
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/my-resume.pdf"
          download
          className="px-10 py-3 border  border-gray-500 rounded-full flex items-center gap-2 !bg-white
           dark:border dark:border-white/50 dark:text-black"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
