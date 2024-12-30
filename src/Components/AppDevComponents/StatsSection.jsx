import bannerImage from "../../assets/appdevelopment/images/statsbanner.png";
import statsfour from "../../assets/appdevelopment/images/statsfour.jpeg";
const StatsSection = () => {
  return (
    <div
      className=" bg-black padding-between bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div />
      <div className="wrapper">
        {/* Heading */}
        <h2
          className="text-center text-white section-heading"
          data-aos="fade-up"
        >
          Numbers that define our Website <br /> Design capabilities!
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Growth Stats - Pink Card */}
          <div className="bg-pink-200 p-8 rounded-lg" data-aos="fade-right">
            <div className="text-5xl md:text-6xl font-bold mb-4">17%</div>
            <p className="desc">
              Growth Seen in the Client Engagement And Insights
            </p>
          </div>

          {/* Happy Clients - Yellow Card */}
          <div className="bg-[#c5d42c] p-8 rounded-lg" data-aos="fade-left">
            <div className="text-5xl md:text-6xl font-bold mb-4">6k+</div>
            <p className="desc">Happy Clients</p>
          </div>

          {/* Conversion Stats - Green Card */}
          <div
            className="bg-green-500 p-8 rounded-lg text-white"
            data-aos="fade-right"
          >
            <div className="text-5xl md:text-6xl font-bold mb-4">+31%</div>
            <p className="desc !text-white">
              client conversion increased after giving a design upgrade!
            </p>
          </div>

          {/* Real Estate Card */}
          <div
            className="relative rounded-lg overflow-hidden"
            data-aos="fade-left"
          >
            <img
              src={statsfour}
              alt="statsfour"
              className="w-full h-full object-cover max-h-[12rem]"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Realestate Brokrage Seamless Operations
              </h3>
              <a
                href="#"
                className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors w-fit"
              >
                Get Quotation Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsSection;
