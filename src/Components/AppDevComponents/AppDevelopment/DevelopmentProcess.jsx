const DevelopmentProcess = ({ developmentProcess }) => {
  // const developmentProcess = [
  //   {
  //     title: "Requirement Gathering and Analysis",
  //     description:
  //       "Understand client needs, business objectives, and technical requirements through discussions and brainstorming sessions.",
  //   },
  //   {
  //     title: "Planning",
  //     description:
  //       "Create a detailed roadmap, including timelines, milestones, resource allocation, and defining the project scope.",
  //   },
  //   {
  //     title: "UI/UX Design",
  //     description:
  //       "Develop wireframes, prototypes, and visually appealing user interface designs to ensure an intuitive and engaging user experience.",
  //   },
  //   {
  //     title: "Development",
  //     description:
  //       "Write and integrate front-end and back-end code, build APIs, and implement third-party services for app functionality.",
  //   },
  //   {
  //     title: "Testing and Quality Assurance",
  //     description:
  //       "Perform functionality, usability, and performance tests to identify and fix bugs, ensuring a seamless app experience.",
  //   },
  //   {
  //     title: "Deployment",
  //     description:
  //       "Launch the app to designated platforms like the App Store or Google Play, ensuring all standards and requirements are met.",
  //   },
  //   {
  //     title: "Post-Launch Support and Maintenance",
  //     description:
  //       "Provide ongoing support, release updates, fix bugs, and enhance features based on user feedback and emerging needs.",
  //   },
  // ];

  return (
    <div className="relative bg-black pt-[15rem] pb-[10rem] -mt-[7rem] !-z-10">
      <div className="wrapper flex flex-col gap-16">
        {developmentProcess.map((obj, index) => (
          <ol key={obj.title} data-aos="fade-up">
            <li>
              <h1 className="text-[#E4C9FC] text-lg font-semibold">
                {index + 1}. {obj.step}
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
