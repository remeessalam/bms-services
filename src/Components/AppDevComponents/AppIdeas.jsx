import appideasimg from "../../assets/appdevelopment/images/appideasimg.jpeg";
import { Link } from "react-router-dom";
const AppIdeas = () => {
  return (
    <div className=" bg-[#1AFF85] padding-between">
      <div className="wrapper ">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="heading text-black" data-aos="fade-right">
              Got an App Idea? <br /> We&apos;ve Got the Design and Development
              Skills.
            </h2>

            <p className="desc !text-black" data-aos="fade-right">
              With a track record of over 120+ successful apps across diverse
              niches, we&apos;re ready to bring your app vision to life. Our team of
              expert designers and developers can seamlessly integrate
              cutting-edge technologies like AI, AR, and VR to create truly
              innovative and engaging apps.
            </p>

            <div>
              <Link
                to="#"
                className="primary-btn !bg-black !text-white"
                data-aos="fade-right"
              >
                Unlock app success!{" "}
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                data-aos="fade-left"
                src={appideasimg}
                alt="craftyourapp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppIdeas;
