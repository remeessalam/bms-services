import { Outlet } from "react-router-dom";
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
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default AppLayout;
