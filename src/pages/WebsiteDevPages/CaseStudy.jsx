import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import CaseStudyBanner from "../../Components/WebsiteDevComponents/CaseStudyComponents/CaseStudyBanner";
import Footer from "../../Components/WebsiteDevComponents/Footer";
import Header from "../../Components/WebsiteDevComponents/Header";
import Projects from "../../Components/WebsiteDevComponents/Projects";

const CaseStudy = () => {
  return (
    <div>
      <Header />
      <CaseStudyBanner />
      <Projects />
      <ContactForm title={"Have a Project Idea?"} />
      <OurOffices />
      <Footer />
    </div>
  );
};

export default CaseStudy;
