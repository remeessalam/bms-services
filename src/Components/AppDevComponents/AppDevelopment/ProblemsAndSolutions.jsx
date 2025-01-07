import img1 from "../../../assets/appdevelopment/images/solutionimg1.png";
import img2 from "../../../assets/appdevelopment/images/solutionimg2.png";
import img3 from "../../../assets/appdevelopment/images/solutionimg3.png";
const ProblemsAndSolutions = ({ problemsFaced, solutionsOffered }) => {
  return (
    <div className="wrapper padding-between">
      <div className=" grid md:grid-cols-3">
        <h1 className="text-xl font-semibold" data-aos="fade-right">
          Problems
        </h1>
        <p className="md:col-span-2" data-aos="fade-left">
          {problemsFaced.map((obj, i) => (
            <div key={i}>
              <h3 className="text-base font-semibold">{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </p>
      </div>
      <div className=" grid md:grid-cols-3 mt-16">
        <h1 className="text-xl font-semibold" data-aos="fade-right">
          Our Solutions
        </h1>
        <p className="md:col-span-2" data-aos="fade-left">
          {solutionsOffered.map((obj, i) => (
            <div key={i}>
              <h3 className="text-base font-semibold">{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </p>
      </div>
      {/* <img
        data-aos="fade-right"
        src={img1}
        alt="image-one"
        className="w-screen max-h-screen object-cover mt-16"
      />
      <div className="grid md:grid-cols-2 md:gap-8">
        <img
          data-aos="fade-left"
          src={img2}
          alt="image-one"
          className="w-screen max-h-screen object-cover mt-16"
        />
        <img
          data-aos="fade-left"
          src={img3}
          alt="image-one"
          className="w-screen max-h-screen object-cover mt-16"
        />
      </div> */}
    </div>
  );
};

export default ProblemsAndSolutions;
