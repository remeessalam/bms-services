import { services } from "../../constant";

const WebSolution = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="wrapper">
        <h2 className="section-heading">
          Website Development solutions
          <br />
          we offer!
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebSolution;
