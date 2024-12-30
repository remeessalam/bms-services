import bannerimg from "../../../assets/appdevelopment/images/appdevelopmentbannerimg.png";
const WebDevBanner = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerimg})` }}
    ></div>
  );
};

export default WebDevBanner;
