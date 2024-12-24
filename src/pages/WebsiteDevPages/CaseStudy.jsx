import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import CaseStudyBanner from "../../Components/WebsiteDevComponents/CaseStudyComponents/CaseStudyBanner";
import Projects from "../../Components/WebsiteDevComponents/Projects";

const CaseStudy = () => {
  return (
    <div>
      <CaseStudyBanner />
      <Projects />
      <ContactForm title={"Have a Project Idea?"} />
      <OurOffices />
    </div>
  );
};

export default CaseStudy;
