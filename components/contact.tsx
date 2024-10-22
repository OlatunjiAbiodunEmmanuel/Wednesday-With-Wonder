"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import SectionHeading from "./Section-heading";

export default function Contact() {
 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="mx-auto px-4 max-w-7xl">
      <SectionHeading>
        Share With Us Your relationship issues, health concerns, lifestyle
        choices.....
      </SectionHeading>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        
          setEmail("");
          setMessage("");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={100000}
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </section>
  );
}
