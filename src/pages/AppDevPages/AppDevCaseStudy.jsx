import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import CaseStudyBanner from "../../Components/AppDevComponents/CaseStudyComponents/CaseStudyBanner";
import Footer from "../../Components/AppDevComponents/Footer";
import Header from "../../Components/AppDevComponents/Header";
import Projects from "../../Components/AppDevComponents/Projects";

const AppDevCaseStudy = () => {
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

export default AppDevCaseStudy;
