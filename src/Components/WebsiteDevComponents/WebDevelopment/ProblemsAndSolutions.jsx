import img1 from "../../../assets/websitedevelopment/images/solutionimg1.png";
import img2 from "../../../assets/websitedevelopment/images/solutionimg2.png";
const ProblemsAndSolutions = () => {
  return (
    <div className="wrapper padding-between">
      <div className=" grid md:grid-cols-3">
        <h1 className="text-xl font-semibold">Problems</h1>
        <p className="md:col-span-2">
          In developing the web application, we tackled key challenges to ensure
          a seamless and reliable user experience. Performance optimization was
          a top priority, enabling fast loading times and smooth interactions.
          Advanced data handling was implemented to securely and efficiently
          process user information, while an intuitive design addressed
          navigation challenges, making the interface user-friendly. To support
          growth, we built a scalable architecture capable of handling
          increasing traffic and user demands. Additionally, robust security
          measures, including encryption and secure authentication, were
          integrated to safeguard user data and maintain trust.
        </p>
      </div>
      <div className=" grid md:grid-cols-3 mt-16">
        <h1 className="text-xl font-semibold">Our Solutions</h1>
        <p className="md:col-span-2">
          With a focus on responsive design, secure systems, and seamless
          functionality, we aim to create platforms that prioritize user
          satisfaction. Whether it’s building intuitive interfaces, streamlining
          workflows, or implementing robust security measures, our solutions are
          tailored to meet diverse needs.
        </p>
      </div>
      <img
        src={img1}
        alt="image-one"
        className="w-screen max-h-screen object-cover mt-16"
      />
      <img
        src={img2}
        alt="image-one"
        className="w-screen max-h-screen object-cover mt-16"
      />
    </div>
  );
};

export default ProblemsAndSolutions;
