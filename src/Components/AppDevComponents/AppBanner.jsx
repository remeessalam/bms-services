import ReactPlayer from "react-player";
import bannervideo from "../../assets/websitedevelopment/video/bannervideo.mp4";
import { Link } from "react-router-dom";
const WebBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="relative z-10 flex h-full items-center">
        <div className="wrapper px-4 sm:px-6 lg:px-8">
          <div className="text-start max-w-[45rem]">
            <h1 data-aos="fade-up" className="mb-8 banner-heading text-white ">
              Mobile App Design
            </h1>

            <div className="space-y-4">
              <p data-aos="fade-up" className="desc !text-gray-400">
                Is Your App Losing Users? A clunky user experience and annoying
                pop-ups can drive users away. Don&apos;t let poor design sabotage
                your app&apos;s success. Let&apos;s Fix That.
              </p>
            </div>

            <div className="mt-10">
              <Link data-aos="fade-up" to="#" className="primary-btn sm:px-10">
                Design your App With Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full">
        <ReactPlayer
          url={bannervideo}
          playing
          loop
          muted
          playsinline
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
                muted: true,
                playsInline: true,
              },
            },
          }}
        />

        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      </div>
    </div>
  );
};

export default WebBanner;
