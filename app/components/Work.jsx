"use client";
import { workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] scroll-mt-20 "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl  font-ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-(--my-grid-cols) gap-5 my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          // <motion.div
          //   key={index}
          //   whileInView={{ scale: 1.05 }}
          //   transition={{ duration: 0.3 }}
          //   // className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          //   className="relative rounded-xl bg-white shadow-md hover:shadow-lg duration-300 overflow-hidden p-4"
          // >
          //   <div
          //     className="aspect-video bg-no-repeat bg-cover bg-center"
          //     style={{ backgroundImage: `url(${project.bgImage})` }}
          //   ></div>

          //   <a href={project.link} target="_blank" rel="noopener noreferrer">
          //     <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
          //       <div>
          //         <h2 className="font-semibold">{project.title}</h2>
          //         <p className="text-sm text-gray-700">{project.description}</p>
          //         <p className="text-sm text-gray-500 mt-2">
          //           {project.longDescription}
          //         </p>
          //       </div>

          //       <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center  shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
          //         <Image src={assets.send_icon} className="w-5" alt="" />
          //       </div>
          //     </div>
          //   </a>
          // </motion.div>
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl bg-white/90 shadow-md hover:shadow-lg duration-300 overflow-hidden p-4 hover:translate-y-1 
            "
          >
            {/* Link icon (top-right) */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <Image
                src={assets.link_icon}
                alt="link icon"
                className="w-4 h-4"
              />
            </a>

            {/* Project image */}
            <div
              className="aspect-video bg-no-repeat bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>

            {/* Text content */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
