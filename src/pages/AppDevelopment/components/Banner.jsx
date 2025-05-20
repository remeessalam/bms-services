import { Link } from "react-router-dom";
import bannerimage from "../../../assets/appdevelopment/images/bannerimage.png";
import aboutimage from "../../../assets/appdevelopment/images/about-app.png";
import servicesbackgroundimage from "../../../assets/appdevelopment/images/servicesbackgroundimage.jpg";
import servicecenterimage from "../../../assets/appdevelopment/images/service-center-image.png";
import customersupporticon from "../../../assets/appdevelopment/images/customer-support-icon.png";
const Banner = () => {
  const services = [
    {
      id: 1,
      section: "IOS APP DEVELOPMENT",
      description:
        "At Boostmysites, we specialize in crafting innovative and user-friendly iOS apps that captivate your audience and drive business growth.",
    },
    {
      id: 2,
      section: "ANDROID APP DEVELOPMENT",
      description:
        "At Boostmysites, we specialize in creating high-quality Android apps that captivate users and drive business growth.",
    },
    {
      id: 3,
      section: "CROSS-PLATFORM APP DEVELOPMENT",
      description:
        "At Boostmysites, we specialize in crafting innovative and user-friendly iOS apps that captivate your audience and drive business growth.",
    },
    { id: 7, img: servicecenterimage },
    {
      id: 4,
      section: "UI/UX DESIGN",
      description:
        "At Boostmysites, we believe that great design is the key to a successful digital product...",
    },
    {
      id: 5,
      section: "APP TESTING AND QUALITY ASSURANCE",
      description:
        "Ensuring a seamless user experience is paramount. Our rigorous testing and quality assurance processes guarantee that your app functions flawlessly.",
    },
    {
      id: 6,
      section: "APP MAINTENANCE AND SUPPORT",
      description:
        "Keep your app running smoothly and up-to-date with our comprehensive maintenance and support services.",
    },
  ];
  return (
    <div className="bg-black text-white">
      <section className="pt-[8rem]">
        <div className="wrapper py-[4rem]">
          {" "}
          <div className="grid md:grid-cols-2 gap-7">
            <div className="flex flex-col md:gap-0 gap-5 justify-evenly">
              <h1 className="banner-heading text-primary">Mobile App Design</h1>
              <p className="desc !text-gray-300">
                Is Your App Losing Users?
                <br /> A clunky user experience and annoying
                <br /> pop-ups can drive users away. Don&apos;t let
                <br /> poor design sabotage your app&apos;s success.
                <br /> Let&apos;s Fix That.
              </p>
              <Link className="primary-btn w-fit">Craft Your App With Us!</Link>
            </div>
            <div>
              <img
                src={bannerimage}
                alt="banner image"
                className="max-h-[30rem] md:max-h-[40rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper py-[4rem]">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="mx-auto">
              <img
                src={aboutimage}
                alt="about image"
                className="max-h-[35rem] w-auto"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold">
                Your User&apos;s New Favorite App
                <br />
                We&apos;ll design an app that users can&apos;t put down.
              </h4>
              <div className="bg-primary mt-5 p-5 rounded-xl">
                <h5 className="text-xl font-bold text-black">
                  Is Your App&apos;s UX Overburdened?
                </h5>
                <p className="text-lg font-semibold mt-3">
                  A cluttered app interface can confuse and frustrate users.
                  Simplify your app&apos;s design, and watch user engagement
                  soar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div
          className="relative  bg-top bg-no-repeat bg-current  "
          //   style={{ backgroundImage: `url(${servicesbackgroundimage})` }}
        >
          <div className="absolute left-0 top-0  w-full h-full">
            <img
              src={servicesbackgroundimage}
              alt="service image backgroun image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-full   bg-black/70">
            <div className="relative wrapper z-10  py-[4rem]">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary ">
                  APP SERVICES
                </h2>
                <p className="max-w-[40rem] mx-auto pt-4">
                  We offer end-to-end mobile app solutions including iOS,
                  Android, and cross-platform development with intuitive UI/UX
                  design, thorough testing, and seamless maintenance. From idea
                  to launch and beyond, we ensure performance, reliability, and
                  user satisfaction.
                </p>{" "}
              </div>
              <div className="pt-[4rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                  <div className="space-y-6">
                    {services.slice(0, 3).map((service) => (
                      <div
                        key={service.id}
                        className=" rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <h2 className="text-xl font-bold text-orange-500 mb-4">
                          {service.section}
                        </h2>
                        <p className="text-gray-300 text-justify">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src={services[3].img}
                      alt="service center image"
                      className="shadow-lg max-w-full h-auto max-h-[38rem] rounded-3xl"
                    />
                  </div>

                  <div className="space-y-6">
                    {services.slice(4).map((service) => (
                      <div
                        key={service.id}
                        className=" rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <h2 className="text-xl font-bold text-orange-500 mb-4">
                          {service.section}
                        </h2>
                        <p className="text-gray-300 text-justify">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="max-w-[30rem] mt-8 text-center mx-auto rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={customersupporticon}
                    alt="customer support icon"
                    className="mx-auto mb-3"
                  />
                  <h2 className="text-xl font-bold text-orange-500 mb-4">
                    24/7 support by real pepole
                  </h2>
                  <p className="text-gray-300">
                    Enjoy 24/7 support from real people, ready to help you
                    anytime with fast, friendly, and reliable assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
