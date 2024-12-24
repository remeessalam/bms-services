import designfor from "../../assets/websitedevelopment/images/designfor.jpeg";
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
              Get users to love your website!{" "}
            </h2>
            <h2 className="heading text-black" data-aos="fade-right">
              Design for your users&apos; satisfaction, not just for your own!
            </h2>

            <p className="desc !text-black" data-aos="fade-right">
              At <strong>BoostMySites</strong> , we&apos;re dedicated to
              creating stunning, high-performance websites that drive results.
              Our team of skilled web developers and designers combines
              creativity with technical expertise to deliver exceptional digital
              experiences.
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
