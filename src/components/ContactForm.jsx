import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "Infrastructure & DevOps",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        budget: checked
          ? [...prevState.budget, value]
          : prevState.budget.filter((item) => item !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="grid grid-cols-1  bg-[#093046] lg:grid-cols-2 py-28 px-4  md:px-20">
      <div>
        <div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rotate-0 md:-rotate-[11.48deg] w-fit text-lg animate-spin text-white font-BearFont-medium bg-gradient-to-r from-[#0286E5] to-[#32B0F3] rounded-full py-1 px-4">
              Contact Form
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <h1 className="mt-4 tracking-tighter font-BearFont-medium mb-12 lg:mb-0 text-2xl md:text-6xl lg:max-w-lg text-white">
              Please fill in your details and get started.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div>
          <form className="w-full lg:max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-0">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
                <label
                  className="block tracking-wide text-white text-sm font-BearFont-regular mb-3 md:mb-1"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="text-base block w-full bg-[#093046]  font-BearFont-regular transition-all duration-200 focus:border-[#0286E5] text-white border-1 border border-gray-200 rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#093046] "
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder=""
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
                <label
                  className="block tracking-wide text-white text-sm font-BearFont-regular mb-3 md:mb-1"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  className="text-base block w-full bg-[#093046]  font-BearFont-regular transition-all duration-200 focus:border-[#0286E5] text-white border-1 border border-gray-200 rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#093046] "
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder=""
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-BearFont-regular mb-3 md:mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="text-base block w-full bg-[#093046]  font-BearFont-regular transition-all duration-200 focus:border-[#0286E5] text-white border-1 border border-gray-200 rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#093046] "
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-BearFont-regular mb-3 md:mb-1"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <input
                  className="text-base block w-full bg-[#093046]  font-BearFont-regular transition-all duration-200 focus:border-[#0286E5] text-white border-1 border border-gray-200 rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#093046] "
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-1">
              <div className="w-full mt-2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-BearFont-regular mb-3 md:mb-1"
                  htmlFor="interest"
                >
                  I'm Interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="block text-sm focus:outline-none appearance-none w-full bg-[#093046] font-BearFont-regular text-white border-1 border border-gray-200 rounded-[8px] py-3 px-4 mb-3 shadow leading-tight focus:border-[#0286E5]"
                >
                  <option>Product Development</option>
                  <option>AI, ML &amp; Models</option>
                  <option>Website Development</option>
                  <option>UI/UX &amp; Branding</option>
                  <option>Staff Augmentation</option>
                  <option>Infrastructure &amp; DevOps</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-white text-sm font-BearFont-regular mb-3 md:mb-1"
                  htmlFor="message"
                >
                  How can we help you?
                </label>
                <textarea
                  className="text-base block w-full focus:outline-none bg-[#093046]  font-BearFont-regular transition-all duration-200 focus:border-[#0286E5] text-white border-1 border border-gray-200 rounded-[8px] py-4 px-4 mb-3 leading-tight"
                  id="message"
                  name="message"
                  style={{ height: "100px", width: "100%" }}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-center bg-gradient-to-r hover:from-[#52CDFC] hover:to-[#0286E5] from-[#0286E5] to-[#52CDFC] rounded-[8px]">
              <button
                className="flex justify-center gap-4 items-center text-white py-4 font-BearFont-semibold text-lg font-500 rounded-[8px] px-4 w-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="submit"
              >
                Send details now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
