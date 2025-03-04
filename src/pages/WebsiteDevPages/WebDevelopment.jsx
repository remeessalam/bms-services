import AboutWebDev from "../../Components/WebsiteDevComponents/WebDevelopment/AboutWebDev";
import DevelopmentProcess from "../../Components/WebsiteDevComponents/WebDevelopment/DevelopmentProcess";
import ProblemsAndSolutions from "../../Components/WebsiteDevComponents/WebDevelopment/ProblemsAndSolutions";
import Testimonial from "../../Components/WebsiteDevComponents/WebDevelopment/Testimonials";
import VisualOutput from "../../Components/WebsiteDevComponents/WebDevelopment/VisualOutput";
import WebDevBanner from "../../Components/WebsiteDevComponents/WebDevelopment/WebDevBanner";
import sectionimage from "../../assets/websitedevelopment/images/websitebgimage.jpeg";
import impactbg from "../../assets/websitedevelopment/images/impactbgimg.png";
import Projects from "../../Components/WebsiteDevComponents/Projects";
import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import Footer from "../../Components/WebsiteDevComponents/Footer";
import Header from "../../Components/WebsiteDevComponents/Header";
import { useParams } from "react-router-dom";
import { webCaseStudies } from "../../caseStudies/webCaseStudies";
const WebDevelopment = () => {
  const { id } = useParams();

  const { webcasestudy } = webCaseStudies[id];
  const heroSection = webcasestudy[0];
  const titleSection = webcasestudy[1];
  const { aboutTheProject } = webcasestudy[2];
  const { whyChooseUs } = webcasestudy[3];
  const { problemsFaced, solutionsOffered } = webcasestudy[4];
  const { review } = webcasestudy[5];
  const { developmentProcess } = webcasestudy[6];
  const { visualouputimages } = webcasestudy[7];
  console.log(visualouputimages, id, "asdklfjsad");
  return (
    <div>
      <Header />
      <WebDevBanner heroSection={heroSection} />
      <AboutWebDev
        heroSection={heroSection}
        titleSection={titleSection}
        aboutProject={aboutTheProject}
        whyChooseUs={whyChooseUs}
      />
      <ProblemsAndSolutions
        problemsFaced={problemsFaced}
        solutionsOffered={solutionsOffered}
      />
      <Testimonial review={review} />
      <DevelopmentProcess developmentProcess={developmentProcess} />
      <VisualOutput visualouputimages={visualouputimages} />
      <div>
        <img
          src={sectionimage}
          alt="sectionimage"
          className="w-full max-h-screen"
        />
      </div>
      <div className="relative overflow-hidden padding-between h-[77vh] flex justify-center items-center">
        <div className="absolute left-0  top-0 -z-10">
          <img src={impactbg} alt="impactbg" data-aos="fade-right" />
        </div>
        <div className="padding-between">
          <h1
            className="text-black text-6xl sm:text-8xl font-bold text-center"
            data-aos="fade-up"
          >
            Impact
            <br /> <span className="text-[#97979B]">We Created</span>
          </h1>
        </div>
      </div>
      <div className="bg-[#D6DCE1] padding-between">
        <h1
          className="text-black text-6xl sm:text-8xl font-bold text-start wrapper"
          data-aos="fade-up"
        >
          Related
          <br />{" "}
          <span className="text-[#97979B] md:ml-[10rem] lg:ml-[20rem]">
            Case Studies
          </span>
        </h1>
      </div>
      <Projects />
      <ContactForm title={"Have a Project Idea?"} />
      <OurOffices />
      <Footer />
    </div>
  );
};

export default WebDevelopment;
