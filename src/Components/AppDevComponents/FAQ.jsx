import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../pages/AppDevPages/constant";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="padding-between">
      <div className="wrapper">
        <h2 className="section-heading" data-aos="fade-up">
          Frequently Asked Question
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0"
              data-aos="fade-up"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
