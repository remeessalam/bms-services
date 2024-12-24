import ReactPlayer from "react-player";
import bannervideo from "../../assets/websitedevelopment/video/bannervideo.mp4";
import { Link } from "react-router-dom";
const WebBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <ReactPlayer
          url={bannervideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              },
            },
          }}
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="wrapper px-4 sm:px-6 lg:px-8">
          <div className="text-start max-w-[45rem]">
            <h1 className="mb-8 banner-heading text-white ">
              Website Development Services
            </h1>

            <div className="space-y-4">
              <p className="desc !text-gray-400">
                Tired of the hassle of traditional website builders?
              </p>
              <p className="desc !text-gray-400">
                Website Development intuitive visual interface empowers you to
                create stunning, professional websites
              </p>
            </div>

            <div className="mt-10">
              <Link to="#" className="primary-btn sm:px-10">
                Design your App With Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBanner;
