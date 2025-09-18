"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwjgaqp");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        {" "}
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl  font-ovo"
      >
        Get in touch{" "}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below
      </motion.p>

      {showSuccess && (
        <p className="text-green-600 text-center mt-2">
          ✅ Your message has been sent successfully!
        </p>
      )}

      {/* end of form 1 */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-black dark:border-white/90"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="p-3 outline-none border border-gray-400 rounded-md bg-white
            dark:bg-black dark:border-white/90"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white
          dark:bg-black dark:border-white/90"
        ></motion.textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex 
        justify-center mt-3.5"
        >
          <button
            type="submit"
            disabled={state.submitting}
            className="py-3 px-8 flex items-center justify-center gap-2 bg-black/80 text-white rounded-full hover:bg-black transition duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover  "
          >
            {state.submitting ? "Sending..." : "Submit now"}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
