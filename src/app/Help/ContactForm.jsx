"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    complaint: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white p-5 rounded-lg shadow-lg w-full max-w-4xl">
      {/* Image Section */}
      <div className="flex-1 md:max-w-md">
        <Image
          src="/contact.png"
          alt="contact image"
          width={450}
          height={450}
          className="rounded-lg shadow-md mx-auto"
        />
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col gap-4 md:max-w-md mx-auto"
      >
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded border bg-gray-100 outline-none focus:border-[#ebc934]"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded border bg-gray-100 outline-none focus:border-[#ebc934]"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium text-gray-700">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded border bg-gray-100 outline-none focus:border-[#ebc934]"
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col">
          <label htmlFor="complaint" className="font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            rows={4}
            className="p-3 rounded border bg-gray-100 outline-none focus:border-[#ebc934]"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-3 bg-[#ebc934] text-white cursor-pointer font-bold border-none outline-none rounded hover:bg-[#d1b72f] transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
