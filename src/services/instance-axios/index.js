import axios from "axios";

export const baseURL = "https://techupmeeting.onrender.com";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
