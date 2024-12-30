import { Play } from "lucide-react";
import freequoteimage from "../../assets/appdevelopment/images/freequote.jpeg";
import { Link } from "react-router-dom";

const FreeQuote = () => {
  return (
    <div className="wrapper padding-between ">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative group">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              data-aos="fade-right"
              src={freequoteimage}
              alt="freequoteimage"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                data-aos="fade-right"
                className="bg-yellow-300 rounded-full p-6 transform transition-transform duration-200 hover:scale-110"
              >
                <Play className="w-8 h-8 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <h2 className="heading" data-aos="fade-left">
            Your User’s New Favorite App We&apos;ll design an app that users can&apos;t
            put down.
          </h2>

          <p className="desc" data-aos="fade-left">
            Is Your App&apos;s UX Overburdened? A cluttered app interface can confuse
            and frustrate users. Simplify your app&apos;s design, and watch user
            engagement soar.
          </p>

          <div>
            <Link to="#" className="primary-btn" data-aos="fade-left">
              Free Quotation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeQuote;
