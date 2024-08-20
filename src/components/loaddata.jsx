import axios from "axios";

export async function bestsellingproductsdata() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return response.data;
  } catch (error) {
    throw new Response("Failed to load products", {
      status: error.response?.status || 500,
      statusText: error.response?.statusText || "Internal Server Error",
    });
  }
}

export async function allData() {
  try {
    const [response1, response2] = await Promise.all([
      axios.get("https://api.escuelajs.co/api/v1/products"),
      axios.get("https://fakestoreapi.com/products"),
    ]);
    return {
      data_1: response1,
      data_2: response2,
    };
  } catch (error) {
    throw new Response("Failed to load products", {
      status: error.response?.status || 500,
      statusText: error.response?.statusText || "Internal Server Error",
    });
  }
}
