import AboutAppDev from "../../Components/AppDevComponents/AppDevelopment/AboutAppDev";
import DevelopmentProcess from "../../Components/AppDevComponents/AppDevelopment/DevelopmentProcess";
import ProblemsAndSolutions from "../../Components/AppDevComponents/AppDevelopment/ProblemsAndSolutions";
import Testimonial from "../../Components/AppDevComponents/AppDevelopment/Testimonials";
import AppDevBanner from "../../Components/AppDevComponents/AppDevelopment/AppDevBanner";
import impactbg from "../../assets/appdevelopment/images/impactbgimg.png";
import Projects from "../../Components/AppDevComponents/Projects";
import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import Footer from "../../Components/Footer";
import Header from "../../Components/AppDevComponents/Header";
import { useParams } from "react-router-dom";
import { openCaseStudy } from "../../caseStudies/appCaseStudies";

const AppWork = () => {
  const { id } = useParams();

  const caseStudyDetails = openCaseStudy[id - 1];
  return (
    <div>
      <Header />
      <AppDevBanner
        // heroSection={heroSection}
        caseStudyDetails={caseStudyDetails}
      />
      <AboutAppDev caseStudyDetails={caseStudyDetails} />
      <ProblemsAndSolutions
        // problemsFaced={problemsFaced}
        // solutionsOffered={solutionsOffered}
        caseStudyDetails={caseStudyDetails}
      />
      <Testimonial caseStudyDetails={caseStudyDetails} />
      <DevelopmentProcess
        // developmentProcess={developmentProcess}
        caseStudyDetails={caseStudyDetails}
      />
      {/* <VisualOutput
        visualouputimages={visualouputimages}
        caseStudyDetails={caseStudyDetails}
      /> */}
      {/* <div>
        <img
          src={sectionimage}
          alt="sectionimage"
          className="w-full max-h-screen"
        />
      </div> */}
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

export default AppWork;
