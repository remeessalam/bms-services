import ContactForm from "../../Components/ContactForm";
import OurOffices from "../../Components/OurOffice";
import AppIdeas from "../../Components/WebsiteDevComponents/AppIdeas";
import CraftYouApp from "../../Components/WebsiteDevComponents/CraftYouApp";
import DesignFor from "../../Components/WebsiteDevComponents/DesignFor";
import FAQ from "../../Components/WebsiteDevComponents/FAQ";
import FreeQuote from "../../Components/WebsiteDevComponents/FreeQuote";
import StatsSection from "../../Components/WebsiteDevComponents/StatsSection";
import WebBanner from "../../Components/WebsiteDevComponents/WebBanner";
import WebSolution from "../../Components/WebsiteDevComponents/WebSolution";
import WorkSlider from "../../Components/WebsiteDevComponents/WorkSlider";

const HomePage = () => {
  return (
    <div>
      <WebBanner />
      <FreeQuote />
      <CraftYouApp />
      <WebSolution />
      <WorkSlider />
      <StatsSection />
      <DesignFor />
      <AppIdeas />
      <FAQ />
      <ContactForm title={"Let’s Collaborate"} />
      <OurOffices />
    </div>
  );
};

export default HomePage;
