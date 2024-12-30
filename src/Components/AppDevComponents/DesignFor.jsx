import designfor from "../../assets/appdevelopment/images/designfor.jpeg";
import { Link } from "react-router-dom";
const DesignFor = () => {
  return (
    <div className=" bg-white padding-between">
      <div className="wrapper ">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {
            // left content
          }
          <div className="space-y-8">
            <h2 className="desc uppercase font-bold" data-aos="fade-right">
              Get users to love your app!
            </h2>
            <h2 className="heading text-black" data-aos="fade-right">
              Design for your users&apos; satisfaction, not just for your own!
            </h2>

            <p className="desc !text-black" data-aos="fade-right">
              It&apos;s no easy task to make your app a daily driver for users. 98%
              fail to do so. Let us help you create an app that users will turn
              to as an essential tool.
            </p>

            <div>
              <Link to="#" className="primary-btn" data-aos="fade-right">
                Contact Us
              </Link>
            </div>
          </div>

          {
            // right-image
          }
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                data-aos="fade-left"
                src={designfor}
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

export default DesignFor;
