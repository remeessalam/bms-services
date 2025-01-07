// import { ArrowUpRight } from "lucide-react";
const AboutWebDev = ({
  heroSection,
  titleSection,
  aboutProject,
  whyChooseUs,
}) => {
  const Info = [
    // { title: "CLIENT", content: "Nancy jhosep" },
    { title: "CATEGORY", content: titleSection.category },

    { title: "TIMELINES", content: titleSection.timeline },
    {
      title: "SERVICE WE PROVIDED",
      content: (
        <ul className="space-y-1">
          {titleSection.servicesProvided.map((obj) => (
            <li key={obj}>{obj}</li>
          ))}
        </ul>
      ),
    },
  ];
  const WhyChoose = [
    {
      title: "Instant Approval:",
      description: "Get quick loan approvals, often within minutes.",
    },
    {
      title: "Flexible Repayment:",
      description: "Choose a repayment plan that suits your budget.",
    },
    {
      title: "Minimal Documentation:",
      description: "A simple and streamlined application process.",
    },
    {
      title: "Secure Transactions:",
      description: "Your financial information is safe with us.",
    },
    {
      title: "Transparent Fees:",
      description: "No hidden charges or unexpected costs.",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="wrapper">
        <div className="mb-16">
          <h1 className="section-heading" data-aos="fade-up">
            {heroSection.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center">
          {Info.map((item, index) => (
            <div key={index} data-aos="fade-up">
              <h2 className="text-gray-400 mb-2">{item.title}</h2>
              <p className="font-medium">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 " data-aos="fade-right">
              About the Project
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="desc !text-white" data-aos="fade-left">
              {aboutProject?.description}
            </p>
            <div>
              <h2 className="text-2xl font-bold my-8" data-aos="fade-left">
                Why Choose Us?
              </h2>
              <ul className="space-y-6 max-w-3xl">
                {whyChooseUs.map((feature, index) => (
                  <li
                    key={index}
                    className="flex flex-col"
                    data-aos="fade-left"
                  >
                    <span className="font-semibold text-xl mb-2">
                      {feature.title}
                    </span>
                    <span className="text-gray-300">{feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWebDev;
