"use client"

import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_PORTFOLIO_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_PORTFOLIO_EMAILJS_TEMPLATE_ID as string,
        formRef.current || "",
        process.env.NEXT_PUBLIC_PORTFOLIO_EMAILJS_PUBLIC_KEY as string
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      alert("Your message was sent!");
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center mt-10 mb-12">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="w-full h-full md:px-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-16 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center justify-center border border-black-50 bg-black-100 rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div className="contact-input">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div className="contact-input">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div className="contact-input">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="px-4 py-4 rounded-lg bg-[#181818] text-white flex justify-center items-center relative cursor-pointer overflow-hidden group border-black border-1">
                    <div className="absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-white text-[#181818] transition-all duration-500" />
                    <p className="uppercase md:text-lg transition-all duration-500 group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 text-[#181818]">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="group-hover:bg-white size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden">
                      <Image height={20} width={20} src="/arrow-down.svg" alt="arrow" className="text-[var(--foreground)] xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="md:col-span-7">
            <img src="/web-dev.svg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;