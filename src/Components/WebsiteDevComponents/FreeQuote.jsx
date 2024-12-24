import { Play } from "lucide-react";
import freequoteimage from "../../assets/websitedevelopment/images/freequote.jpeg";
import { Link } from "react-router-dom";
const FreeQuote = () => {
  return (
    <div className="wrapper padding-between ">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative group">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              src={freequoteimage}
              alt="freequoteimage"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-yellow-300 rounded-full p-6 transform transition-transform duration-200 hover:scale-110">
                <Play className="w-8 h-8 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <h2 className="heading">
            Your website needs more than just speed and security.
          </h2>

          <p className="desc">
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
      </div>
    </div>
  );
};

export default FreeQuote;
