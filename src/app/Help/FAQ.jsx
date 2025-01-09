"use client";
import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Bhagavad Gita?",
      answer:
        "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a conversation between Prince Arjuna and Lord Krishna, who serves as his charioteer and spiritual guide.",
    },
    {
      question: "Who narrated the Bhagavad Gita?",
      answer:
        "Lord Krishna narrated the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra, offering spiritual wisdom and guidance during a moment of crisis.",
    },
    {
      question: "How many chapters are in the Bhagavad Gita?",
      answer:
        "The Bhagavad Gita consists of 18 chapters, each addressing different aspects of life, spirituality, and duty (dharma).",
    },
    {
      question: "What is the main message of the Bhagavad Gita?",
      answer:
        "The main message of the Bhagavad Gita is to perform one's duty selflessly without attachment to the results and to surrender to the divine will.",
    },
    {
      question: "Can the teachings of the Bhagavad Gita be applied today?",
      answer:
        "Yes, the Bhagavad Gita offers timeless wisdom on how to live a balanced, purposeful, and peaceful life, which is relevant even in modern times.",
    },
    {
      question: "What is Gits Guru?",
      answer:
        "Gits Guru is a platform dedicated to providing spiritual insights, resources, and tools to learn and apply the teachings of the Bhagavad Gita. It aims to make the wisdom of the Gita accessible and applicable to modern life through an interactive web experience.",
    },
    // Add more FAQs as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 mb-10">
      <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm"
          >
            <button
              className="w-full text-left p-4 bg-[#fef9e6] font-medium flex justify-between items-center text-gray-800 hover:bg-[#fbeecc]"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="text-secondary">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
