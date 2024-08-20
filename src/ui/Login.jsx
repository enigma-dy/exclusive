import React from "react";

const login = () => {
  return (
    <div>
      <body class="bg-cover bg-center bg-fixed bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c424bbb0-a0e6-4a95-b422-56f707c6e172/dg7c28l-81258807-0f9b-4d7a-9185-738d000d03bc.jpg/v1/fill/w_1024,h_683,q_75,strp/nature_background_image__cartoon_style_by_gabimedia_dg7c28l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0MjRiYmIwLWEwZTYtNGE5NS1iNDIyLTU2ZjcwN2M2ZTE3MlwvZGc3YzI4bC04MTI1ODgwNy0wZjliLTRkN2EtOTE4NS03MzhkMDAwZDAzYmMuanBnIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9jNDI0YmJiMC1hMGU2LTRhOTUtYjQyMi01NmY3MDdjNmUxNzJcL2dhYmltZWRpYS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.kf5hpIk-dl_s0smKLMpeG5X0KWNKxELM8VHQRpAKqgk')]">
        <div class="flex justify-center items-center min-h-screen bg-black bg-opacity-20">
          <div class="relative w-full max-w-md p-10 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-lg border-2 border-gray-300">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-36 h-16 flex items-center justify-center rounded-b-lg">
              <span class="text-black text-2xl">Login</span>
            </div>
            <form
              action="http://127.0.0.1:5500/project/booklist.html"
              method="get"
              enctype="multipart/form-data"
              onsubmit="return login()"
            >
              <div class="relative mb-5">
                <input
                  type="text"
                  id="user"
                  class="w-full h-14 text-lg bg-transparent text-gray-700 pl-5 pr-12 border-2 border-gray-300 rounded-full focus:outline-none"
                  required
                />
                <label
                  for="user"
                  class="absolute top-[-0.7rem] left-5 text-gray-600 transition-transform duration-200"
                >
                  Username
                </label>
                <i class="bx bx-user absolute top-4 right-5 text-xl"></i>
              </div>
              <div class="relative mb-5">
                <input
                  type="password"
                  id="pass"
                  class="w-full h-14 text-lg bg-transparent text-gray-700 pl-5 pr-12 border-2 border-gray-300 rounded-full focus:outline-none"
                  autocomplete="off"
                />
                <label
                  for="pass"
                  class="absolute top-[-0.7rem] left-5 text-gray-600 transition-transform duration-200"
                >
                  Password
                </label>
                <i
                  class="bx bx-lock-alt absolute top-4 right-5 text-xl"
                  id="show-password"
                ></i>
              </div>
              <div class="flex justify-between text-sm mb-5">
                <div class="flex items-center">
                  <input type="checkbox" id="remember" class="mr-2" />
                  <label for="remember">Remember me</label>
                </div>
                <div>
                  <a href="#" class="text-gray-600 hover:underline">
                    Forgot password
                  </a>
                </div>
              </div>
              <div class="mb-5">
                <input
                  type="submit"
                  class="w-full h-12 bg-gray-300 text-lg font-semibold text-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-white hover:text-gray-700"
                  value="Login"
                />
              </div>
              <div class="text-center">
                <span>
                  Don't have an account?{" "}
                  <a href="#" class="font-semibold text-gray-700">
                    Register
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <script src="form.js"></script>
      </body>
    </div>
  );
};

export default login;
