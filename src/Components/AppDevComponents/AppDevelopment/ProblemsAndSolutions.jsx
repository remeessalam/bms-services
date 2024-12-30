import img1 from "../../../assets/appdevelopment/images/solutionimg1.png";
import img2 from "../../../assets/appdevelopment/images/solutionimg2.png";
import img3 from "../../../assets/appdevelopment/images/solutionimg3.png";
const ProblemsAndSolutions = () => {
  return (
    <div className="wrapper padding-between">
      <div className=" grid md:grid-cols-3">
        <h1 className="text-xl font-semibold" data-aos="fade-right">
          Problems
        </h1>
        <p className="md:col-span-2" data-aos="fade-left">
          We implemented advanced risk assessment models to ensure responsible
          lending practices. Our user-centric approach led to the development of
          a seamless app experience, making it easy for users to apply, get
          approved, and receive funds. By prioritizing security and
          transparency, we&apos;ve built a platform that users can trust.
          <br />
          Developing a reliable and user-friendly lending app presented numerous
          challenges. Navigating a complex regulatory landscape, building a
          robust technological infrastructure, and designing an intuitive user
          interface were just a few hurdles we had to overcome. However, through
          rigorous planning and execution, we successfully addressed these
          challenges.
        </p>
      </div>
      <div className=" grid md:grid-cols-3 mt-16">
        <h1 className="text-xl font-semibold" data-aos="fade-right">
          Our Solutions
        </h1>
        <p className="md:col-span-2" data-aos="fade-left">
          Crio&apos;s mission is to provide financial relief and flexibility. With
          our quick approval process, minimal documentation, and transparent
          fees, we strive to make borrowing a hassle-free experience. Whether
          you need funds for a medical emergency, home renovation, or any other
          urgent need, Crio is your reliable partner.
        </p>
      </div>
      <img
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
      </div>
    </div>
  );
};

export default ProblemsAndSolutions;
