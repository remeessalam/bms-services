import appideasimg from "../../assets/websitedevelopment/images/appideasimg.jpeg";
import { Link } from "react-router-dom";
const AppIdeas = () => {
  return (
    <div className=" bg-[#1AFF85] padding-between">
      <div className="wrapper ">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="heading text-black" data-aos="fade-right">
              Got an Website idea?
              <br /> We&apos;ve Got the Design and Development Skills.
            </h2>

            <p className="desc !text-black" data-aos="fade-right">
              With a proven track record of delivering 120+ successful projects,
              BoostMySites is your trusted partner for cutting-edge web
              development. Our team of skilled designers and developers is
              dedicated to crafting stunning, high-performance websites that
              captivate your audience and drive results.
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
