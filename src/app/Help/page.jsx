"use client";
import React, { useState } from "react";
import Image from "next/image";
import FAQ from "./FAQ"; // Importing the FAQ component
import ContactForm from "./ContactForm"; // Importing the Contact Form component

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      {/* Contact Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Help;
