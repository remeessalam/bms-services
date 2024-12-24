import img1 from "../../../assets/websitedevelopment/images/visualoutimg1.png";
import img2 from "../../../assets/websitedevelopment/images/visualoutimg2.png";
import img3 from "../../../assets/websitedevelopment/images/visualoutimg3.png";
import img4 from "../../../assets/websitedevelopment/images/visualoutimg4.png";
const VisualOutput = () => {
  return (
    <div className="bg-[#D6DCE1] padding-between">
      <div className="wrapper">
        <div className="grid md:grid-cols-3">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Visual Output
          </h1>
          <p className=" md:col-span-2" data-aos="fade-left">
            Crio is your go-to app for quick and easy personal loans. Whether
            you&apos;re facing an unexpected expense or simply need some extra
            cash, Crio offers a hassle-free solution to your financial needs.
          </p>
        </div>
        <img
          data-aos="fade-up"
          src={img1}
          alt="image-one"
          className="w-full max-h-screen object-cover my-16"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <img
            data-aos="fade-right"
            src={img2}
            alt="image-two"
            className="h-full max-h-screen object-cover"
          />
          <img
            data-aos="fade-left"
            src={img3}
            alt="image-three"
            className="h-full max-h-screen object-cover"
          />
        </div>
        <img
          data-aos="fade-up"
          src={img4}
          alt="image-four"
          className="w-full max-h-screen object-cover mt-16"
        />
      </div>
    </div>
  );
};

export default VisualOutput;
