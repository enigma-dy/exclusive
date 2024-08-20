import React from "react";

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="contact" id="contact">
        <div className="container mx-auto p-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Contact <span className="text-orange-500">Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0">
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Contact detail</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-mobile-alt text-3xl text-blue-500 mr-4"></i>
                  <div>
                    <h4 className="text-sm font-bold">PHONE:</h4>
                    <p className="text-gray-600">+12457836913, +12457836913</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <i className="far fa-envelope text-3xl text-blue-500 mr-4"></i>
                  <div>
                    <h4 className="text-sm font-bold">EMAIL:</h4>
                    <p className="text-gray-600">example@info.com</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <i className="fas fa-map-marker-alt text-3xl text-blue-500 mr-4"></i>
                  <div>
                    <h4 className="text-sm font-bold">ADDRESS:</h4>
                    <p className="text-gray-600">6743 last street, Abcd, Xyz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-2/3 px-4">
              <form>
                <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <input
                      type="text"
                      className="w-full p-4 text-sm border border-gray-300 rounded"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <input
                      type="email"
                      className="w-full p-4 text-sm border border-gray-300 rounded"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full px-4 my-4">
                    <input
                      type="text"
                      className="w-full p-4 text-sm border border-gray-300 rounded"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="px-4 mb-4">
                  <textarea
                    className="w-full p-4 text-sm border border-gray-300 rounded"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="px-4">
                  <button
                    className="w-full p-4 text-sm font-bold text-white bg-orange-500 hover:bg-orange-700 rounded"
                    type="submit"
                  >
                    Send Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
