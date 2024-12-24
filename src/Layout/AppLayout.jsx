import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../Components/ScrollToTop";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
