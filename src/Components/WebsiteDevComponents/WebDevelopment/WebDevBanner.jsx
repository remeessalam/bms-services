import bannerimg from "../../../assets/websitedevelopment/images/webdevelopmentbannerimg.png";
const WebDevBanner = ({ heroSection }) => {
  console.log(heroSection, "asdfklasdf");
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroSection?.image})` }}
    ></div>
  );
};

export default WebDevBanner;
