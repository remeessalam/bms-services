const DevelopmentProcess = () => {
  const developmentProcess = [
    {
      title: "Requirement Analysis and Planning",
      description:
        "Gather and analyze business and user requirements to define the scope of the web application and plan the development process effectively.",
    },
    {
      title: "Front-End Development",
      description:
        "Build responsive and visually appealing interfaces using HTML, CSS, and JavaScript frameworks to ensure a seamless user experience across devices.",
    },
    {
      title: "Back-End Development",
      description:
        "Develop robust server-side logic using scalable frameworks and languages to handle data processing, API integration, and user authentication.",
    },
    {
      title: "Database Design and Integration",
      description:
        "Create efficient and secure databases to store and manage user and application data, ensuring quick retrieval and scalability.",
    },
    {
      title: "Testing and Deployment",
      description:
        "Perform rigorous testing to identify and fix bugs, optimize performance, and deploy the application on a reliable hosting environment for smooth operation.",
    },
  ];

  return (
    <div className="relative bg-black pt-[15rem] pb-[10rem] -mt-[7rem] !-z-10">
      <div className="wrapper flex flex-col gap-16">
        {developmentProcess.map((obj, index) => (
          <ol key={obj.title} data-aos="fade-up">
            <li>
              <h1 className="text-[#E4C9FC] text-lg font-semibold">
                {index + 1}. {obj.title}
              </h1>
              <p className="text-white text-lg font-semibold">
                {obj.description}
              </p>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentProcess;
