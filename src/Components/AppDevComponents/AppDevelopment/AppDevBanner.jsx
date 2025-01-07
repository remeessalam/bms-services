import bannerimg from "../../../assets/appdevelopment/images/appdevelopmentbannerimg.png";
const WebDevBanner = ({ heroSection }) => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroSection?.image})` }}
    ></div>
  );
};

export default WebDevBanner;
