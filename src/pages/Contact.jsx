import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="container mx-auto p-4 py-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-2">
              Contact <span class="text-orange-500">Us</span>
            </h2>
            <p class="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 xl:w-1/3 p-4">
              <div class="title mb-4">
                <h3 class="text-lg font-bold mb-2">Contact detail</h3>
                <p class="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div class="content">
                <div class="info mb-4">
                  <i class="fas fa-mobile-alt text-3xl text-blue-500 mr-4"></i>
                  <h4 class="inline-block text-sm font-bold">
                    PHONE :
                    <span class="text-gray-600">
                      +12457836913, +12457836913
                    </span>
                  </h4>
                </div>

                <div class="info mb-4">
                  <i class="far fa-envelope text-3xl text-blue-500 mr-4"></i>
                  <h4 class="inline-block text-sm font-bold">
                    EMAIL :<span class="text-gray-600">example@info.com</span>
                  </h4>
                </div>

                <div class="info mb-4">
                  <i class="fas fa-map-marker-alt text-3xl text-blue-500 mr-4"></i>
                  <h4 class="inline-block text-sm font-bold">
                    ADDRESS :
                    <span class="text-gray-600">
                      6743 last street, Abcd, Xyz
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-2/3 p-4">
              <form>
                <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 xl:w-1/2 p-4">
                    <input
                      type="text"
                      class="form-control p-4 text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/2 p-4">
                    <input
                      type="email"
                      class="form-control p-4 text-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div class="w-full p-4">
                    <input
                      type="text"
                      class="form-control p-4 text-sm"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="form-group p-4">
                  <textarea
                    class="form-control p-4 text-sm"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  class="btn btn-block p-4 text-sm font-bold text-white bg-orange-500 hover:bg-orange-700"
                  type="submit"
                >
                  Send Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
