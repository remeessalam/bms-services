import user1 from "../../../assets/websitedevelopment/images/user1.png";
const Testimonial = () => {
  return (
    <div
      className=" wrapper bg-[#FFFF00] padding-between flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="max-w-4xl">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
            &quot;Crio was a lifesaver when I needed urgent funds. The entire
            process was smooth and hassle-free. The app is user-friendly, and
            the approval process was quick. Highly recommended!&quot;
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={user1}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">Loredan Stefan</h3>
              <p className="text-gray-700">CEO, and Founder, Onelink</p>
            </div>
          </div>

          {/* <Link
            to="#"
            className="flex items-center text-black hover:opacity-75 transition-opacity font-medium"
          >
            View review on clutch
            <ArrowUpRight className="ml-1 w-5 h-5" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;