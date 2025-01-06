// import { ArrowUpRight } from "lucide-react";
const AboutWebDev = ({
  heroSection,
  titleSection,
  aboutProject,
  whyChooseUs,
}) => {
  const Info = [
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
      title: "Fast Performance:",
      description:
        "Optimize load times for seamless user experiences and quick responses.",
    },
    {
      title: "Scalable Architecture:",
      description: "Build flexible systems that grow with your business needs.",
    },
    {
      title: "Streamlined Processes:",
      description: "Design intuitive workflows that simplify complex actions.",
    },
    {
      title: "Secure Transactions:",
      description:
        "Implement robust security measures to protect user data and transactions.",
    },
    {
      title: "Transparent Operations:",
      description:
        "Ensure clear and user-friendly interfaces with no hidden complexities.",
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
            <ul className="mt-8 list-disc text-gray-200">
              {aboutProject?.keyHighlights.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
            <div>
              <h2 className="text-2xl font-bold my-8" data-aos="fade-left">
                Why Choose Our Web Development Solution?
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
