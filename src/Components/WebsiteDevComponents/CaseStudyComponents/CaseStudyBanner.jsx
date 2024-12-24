// import { ArrowUpRight } from "lucide-react";
// import bannerimg from "../../../assets/websitedevelopment/images/casestudybannerimage.png";
const CaseStudyBanner = () => {
  return (
    <div className="bg-black h-screen relative overflow-hidden  ">
      <div className="wrapper flex items-center h-full ">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          {/* Header Section */}
          <div className="md:text-start text-center">
            <h1 className="banner-heading text-white mb-8">Our Case Study</h1>
            <p className="desc !text-white">
              An Experience design agency building high-end products and
              experiences that grow your business exponentially.
            </p>
          </div>

          {/* Image Section with Build Together Button */}
          <div className="flex items-center justify-center mb-16 md:mb-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              {/* Yellow circular background */}
              <div className="absolute inset-0 bg-yellow-300 rounded-full">
                {/* Text container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Circular text */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <path
                            id="circle"
                            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          />
                        </defs>
                        <text className="  text-[0.53rem] font-bold uppercase">
                          <textPath href="#circle" startOffset="0%">
                            LET&apos;S BUILD TOGETHER • LET&apos;S BUILD
                            TOGETHER •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    {/* Center arrow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudyBanner;
