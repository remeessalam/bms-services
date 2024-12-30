import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import AppIdeas from "../../Components/AppDevComponents/AppIdeas";
import CraftYouApp from "../../Components/AppDevComponents/CraftYouApp";
import DesignFor from "../../Components/AppDevComponents/DesignFor";
import FAQ from "../../Components/AppDevComponents/FAQ";
import FreeQuote from "../../Components/AppDevComponents/FreeQuote";
import StatsSection from "../../Components/AppDevComponents/StatsSection";
import AppBanner from "../../Components/AppDevComponents/AppBanner";
import AppSolution from "../../Components/AppDevComponents/AppSolution";
import WorkSlider from "../../Components/AppDevComponents/WorkSlider";
import Header from "../../Components/AppDevComponents/Header";
import Footer from "../../Components/AppDevComponents/Footer";

const AppDevHome = () => {
  return (
    <div>
      <Header />
      <AppBanner />
      <FreeQuote />
      <CraftYouApp />
      <AppSolution />
      <WorkSlider />
      <StatsSection />
      <DesignFor />
      <AppIdeas />
      <FAQ />
      <ContactForm title={"Let’s Collaborate"} />
      <OurOffices />
      <Footer/>
    </div>
  );
};

export default AppDevHome;
