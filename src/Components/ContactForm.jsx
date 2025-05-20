import { useForm } from "react-hook-form";
import bgImage from "../assets/contact-form-bg.png";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      projectBudget: "",
      findUs: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data) => {
    reset();
    // try {
    //   console.log("Form submitted:", data);
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   reset();
    //   alert("Form submitted successfully!");
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("Error submitting form. Please try again.");
    // }
  };

  return (
    <div id="contact" className="padding-between bg-black">
      <div className="relative padding-between">
        <div className="absolute left-0 bottom-0 z-0 w-full h-full">
          <img src={bgImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="wrapper grid lg:grid-cols-2 gap-8 items-center text-white">
          <div
            // className={`${
            //   title === `Have a Project Idea?` ? `text-black` : ``
            // }`}
          >
            <h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              data-aos="fade-right"
            >
              {title}
            </h1>
          </div>

          <div
            className="bg-white text-black rounded-lg p-8 shadow-lg "
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                  placeholder="Jane Cooper"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Company name
                </label>
                <input
                  type="text"
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                  placeholder="Ex. Tesla Inc"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                  placeholder="You@Example.Com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project budget*
                  </label>
                  <select
                    {...register("projectBudget", {
                      required: "Project budget is required",
                    })}
                    className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Your Range
                    </option>
                    <option value="0-5000">$0 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-plus">$10,000+</option>
                  </select>
                  {errors.projectBudget && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.projectBudget.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    How did you find us*
                  </label>
                  <select
                    {...register("findUs", {
                      required: "This field is required",
                    })}
                    className="w-full p-2 border-b border-gray-300 focus:border-black outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="google">Google</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.findUs && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.findUs.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Project details*
                </label>
                <textarea
                  {...register("projectDetails", {
                    required: "Project details are required",
                    minLength: {
                      value: 20,
                      message: "Please provide at least 20 characters",
                    },
                  })}
                  className="w-full p-2 border-b border-gray-300 focus:border-black outline-none resize-none"
                  rows={4}
                  placeholder="Tell us more about your idea"
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-fit bg-primary text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
