const VisualOutput = ({ caseStudyDetails }) => {
  return (
    <div className="bg-[#D6DCE1] padding-between">
      <div className="wrapper">
        {/* <div className="grid md:grid-cols-3">
          <h1 className="text-xl font-semibold" data-aos="fade-right">
            Visual Output
          </h1>
        </div> */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {caseStudyDetails.thirdImageSet.map((obj, i) => (
            <div data-aos="fade-up" key={i}>
              <img
                src={obj}
                alt="visula-output-images"
                className="max-h-[80vh] w-full object-cover"
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
