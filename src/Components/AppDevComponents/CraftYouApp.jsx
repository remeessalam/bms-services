import craftyourapp from "../../assets/appdevelopment/images/craftyourapp.jpeg";
import { Link } from "react-router-dom";
const CraftYouApp = () => {
  return (
    <div className=" bg-black padding-between">
      <div className="wrapper ">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {
            // left content
          }
          <div className="space-y-8">
            <h2 className="heading text-white" data-aos="fade-right">
              Tailored Experiences for Every User
            </h2>

            <p className="desc !text-gray-400" data-aos="fade-right">
              Forget one-size-fits-all. We deliver native app experiences that
              feel right, every time.
            </p>

            <div>
              <Link to="#" className="primary-btn" data-aos="fade-right">
                Free Quotation
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
                src={craftyourapp}
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

export default CraftYouApp;
