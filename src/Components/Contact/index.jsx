'use client'
import React from "react";
// import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import Socialmedia from "../Icon";
import { FaFacebookF  } from "react-icons/fa6";


function ContactSec() {
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="p-2 py-28 px-4 overflow-x-hidden"
    >
      <div className="text-center mb-10">
        <b className="contact-heading text-3xl font-bold">Get in Touch</b>
        <span className="text-lg block mt-2 text-teal-500">
          Ask Any Question Or Remarks? Just write a Message!
        </span>
      </div>
      <div className="mx-auto rounded-4 p-8 overflow-hidden">
        <div className="contact-links flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl font-extrabold tracking-wider italic">
                Contact Information
              </span>
              <span className="text-teal-500 mt-2">
                Say something to start a live chat!
              </span>
            </div>
            <div className="social-link flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-2xl text-teal-500" />
                <span className="text-lg font-medium text-teal-500">
                  +92 3127718780
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-2xl text-teal-500" />
                <span className="text-lg font-medium text-teal-500">
                  ubaidahmed2040@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl text-teal-500" />
                <span className="text-lg font-medium text-teal-500">
                  75800 Karachi PK
                </span>
              </div>
              <div className="flex gap-4 mt-6">
                <Socialmedia />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 p-3 rounded-md hover:shadow-lg py-5">
            <form className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Compose your message here"
                  rows={4}
                  className="w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white text-center font-bold rounded py-3 hover:bg-black hover:text-white transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <span className='relative bottom-0 my-5 border-t-2 flex justify-between'>
      <span className='text-center'>
         Designed and Developed by Ubaid Ahmed 
      </span> 
        <span className='flex gap-4'>
        <FaFacebookF />
        <FaFacebookF />
        <FaFacebookF />
        </span>
        </span>
      </div>
    </motion.div>
  );
}

export default ContactSec;
