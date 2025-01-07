import img1 from "../../../assets/appdevelopment/images/visualoutimg1.png";
import img2 from "../../../assets/appdevelopment/images/visualoutimg2.png";
import img3 from "../../../assets/appdevelopment/images/visualoutimg3.png";
import img4 from "../../../assets/appdevelopment/images/visualoutimg4.png";
const VisualOutput = ({ visualouputimages }) => {
  return (
    <div className="bg-[#D6DCE1] padding-between">
      <div className="wrapper">
        <div className="grid md:grid-cols-3">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Visual Output
          </h1>
          {/* <p className=" md:col-span-2" data-aos="fade-left">
            Crio is your go-to app for quick and easy personal loans. Whether
            you&apos;re facing an unexpected expense or simply need some extra
            cash, Crio offers a hassle-free solution to your financial needs.
          </p> */}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {visualouputimages.map((obj, i) => (
            <div data-aos="fade-up" key={i}>
              <img
                src={obj}
                alt="visula-output-images"
                className="max-h-[80vh] "
              />
            </div>
          ))}
        </div>
        {/* <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <img
            data-aos="fade-up"
            src={img1}
            alt="image-one"
            className="h-full w-full max-h-screen object-cover"
          />
          <img
            data-aos="fade-up"
            src={img2}
            alt="image-two"
            className="h-full w-full max-h-screen object-cover"
          />
          <img
            data-aos="fade-right"
            src={img3}
            alt="image-three"
            className="h-full w-full max-h-screen object-cover"
          />
          <img
            data-aos="fade-left"
            src={img4}
            alt="image-four"
            className="h-full w-full max-h-screen object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default VisualOutput;
