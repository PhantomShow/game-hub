import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b6aafcd9e0245c6bf4429bbc046d130",
  },
});
