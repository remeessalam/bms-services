import { offices } from "../constant";

const OurOffices = () => {
  return (
    <section className="bg-black text-white padding-between">
      <div className="wrapper">
        <h2 className="section-heading">OUR OFFICES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={office.image}
                  alt={`Office in ${office.address.split(",").pop().trim()}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-sm md:text-base">{office.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
