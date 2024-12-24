import craftyourapp from "../../assets/websitedevelopment/images/craftyourapp.jpeg";
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
            <h2 className="heading text-white">
              Your website needs more than just speed and security.
            </h2>

            <p className="desc !text-gray-400">
              It needs to be a delightful user experience. With Boostmysites, we
              ensure your website is not only fast and secure but also intuitive
              and easy to navigate.
            </p>

            <div>
              <Link to="#" className="primary-btn">
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
