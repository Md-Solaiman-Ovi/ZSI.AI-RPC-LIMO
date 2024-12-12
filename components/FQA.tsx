"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What types of vehicles are available in your fleet?",
      answer:
        "Our fleet at RPC Limo includes a variety of luxury vehicles such as stretch limousines for grand entrances, spacious SUV limos for larger groups, and elegant sedans for a more intimate experience. Each vehicle is regularly inspected and maintained to ensure safety and comfort.",
    },
    {
      question: "Are your chauffeurs experienced?",
      answer:
        "Yes, each RPC Limo chauffeur is a highly trained professional. They are licensed, undergo thorough background checks, and possess extensive knowledge of the New York area to ensure a smooth and efficient ride.",
    },
    {
      question: "What amenities can I expect in a RPC Limo?",
      answer:
        "Our limousines offer an array of luxurious amenities including plush leather seating, advanced multimedia entertainment systems, climate control, privacy partitions, and complimentary refreshments. The available features may vary depending on the chosen vehicle.",
    },
    {
      question: "What is the minimum age requirement to rent a limo?",
      answer:
        "The primary person renting the limo must be at least 21 years old. We require a valid ID for verification and compliance with our rental policies.",
    },
    {
      question: "What if I encounter a problem during my service?",
      answer:
        "In the unlikely event of a problem, RPC Limo provides 24/7 customer support and roadside assistance to resolve any issues promptly and ensure your travel remains uninterrupted.",
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, we offer flexible reservation policies. You can modify or cancel your booking according to the terms outlined in your rental agreement, which are designed for your convenience.",
    },
    {
      question: "How does RPC Limo ensure passenger safety during the ride?",
      answer:
        "Safety is our utmost concern. Apart from professional chauffeurs and well-maintained vehicles, we adhere to strict safety protocols and regularly update our practices to meet the highest standards of the limousine service industry.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mx-auto max-w-7xl p-6 sm:p-8 md:p-10">
      <h2 className="mb-8 text-4xl text-[rgba(35,37,42,1)]">
        Frequently Asked Questions for RPC Limo Service
      </h2>
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="rounded">
            <button
              className={`flex w-full items-center gap-4 ${activeIndex === index ? "bg-[rgba(218,145,0,1)] text-black" : "bg-[#F7F7F7] text-[rgba(68,68,68,1)]"} px-6 py-4 text-left text-lg font-medium`}
              onClick={() => toggleAnswer(index)}
            >
              {" "}
              <span
                className={`transform text-2xl font-bold transition-all duration-300`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
              {item.question}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="bg-[#F7F7F7] px-8 py-6 text-lg text-[rgba(68,68,68,1)]">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
