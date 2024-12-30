import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { sliderone } from "../../pages/WebsiteDevPages/constant";

const animation = { duration: 25000, easing: (t) => t };

const WorkSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    rtl: false,
    slides: {
      perView: "auto",
      spacing: 24,
    },
    // breakpoints: {
    //   "(min-width: 640px)": {
    //     slides: { perView: 2, spacing: 24 },
    //   },
    //   "(min-width: 1024px)": {
    //     slides: { perView: 4, spacing: 24 },
    //   },
    // },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    rtl: true,
    slides: {
      perView: "auto",
      spacing: 24,
    },
    // breakpoints: {
    //   "(min-width: 640px)": {
    //     slides: { perView: 2, spacing: 24 },
    //   },
    //   "(min-width: 1024px)": {
    //     slides: { perView: 4, spacing: 24 },
    //   },
    // },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  return (
    <div className="bg-gray-100 padding-between">
      <div>
        <h2 className="section-heading" data-aos="fade-up">
          Some works that exceed our client&apos;s expectations!
        </h2>

        <div className="mb-12" data-aos="fade-up">
          <div ref={sliderRef} className="keen-slider overflow-hidden">
            {sliderone.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide !min-w-[280px] sm:!min-w-[400px] !max-w-[600px]"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            ref={sliderRef2}
            className="keen-slider overflow-hidden"
            data-aos="fade-up"
          >
            {sliderone.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide !min-w-[280px] sm:!min-w-[400px] !max-w-[600px]"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
