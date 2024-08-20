import React from "react";

const Sigup = () => {
  return (
    <div>
      <section class="h-100 h-custom gradient-custom-2">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div
                class="card card-registration card-registration-2"
                style="border-radius: 15px;"
              >
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="p-5">
                        <h3 class="fw-normal mb-5" style="color: #4835d4;">
                          General Information
                        </h3>

                        <form action="/your-server-endpoint" method="POST">
                          <div class="mb-4 pb-2">
                            <select data-mdb-select-init>
                              <option value="1">Title</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                            </select>
                          </div>

                          <div class="row">
                            <div class="col-md-6 mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  type="text"
                                  id="form3Examplev2"
                                  class="form-control form-control-lg"
                                  name="firstName"
                                />
                                <label class="form-label" for="form3Examplev2">
                                  First name
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6 mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  type="text"
                                  id="form3Examplev3"
                                  class="form-control form-control-lg"
                                  name="lastName"
                                />
                                <label class="form-label" for="form3Examplev3">
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="mb-4 pb-2">
                            <select data-mdb-select-init name="position">
                              <option value="1">Position</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                            </select>
                          </div>

                          <div class="mb-4 pb-2">
                            <div data-mdb-input-init class="form-outline">
                              <input
                                type="text"
                                id="form3Examplev4"
                                class="form-control form-control-lg"
                                name="positionDetail"
                              />
                              <label class="form-label" for="form3Examplev4">
                                Position
                              </label>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  type="text"
                                  id="form3Examplev5"
                                  class="form-control form-control-lg"
                                  name="businessArena"
                                />
                                <label class="form-label" for="form3Examplev5">
                                  Business Arena
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <select data-mdb-select-init name="employees">
                                <option value="1">Employees</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                              </select>
                            </div>
                          </div>

                          <div class="row g-0 mt-5">
                            <div class="col-lg-6">
                              <h3 class="fw-normal mb-5">Contact Details</h3>
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-start mb-4 pb-3">
                            <input
                              class="form-check-input me-3"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                              name="terms"
                            />
                            <label
                              class="form-check-label text-white"
                              for="form2Example3"
                            >
                              I accept the{" "}
                              <a href="#!" class="text-white">
                                <u>Terms and Conditions</u>
                              </a>
                            </label>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-light btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Register
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sigup;
