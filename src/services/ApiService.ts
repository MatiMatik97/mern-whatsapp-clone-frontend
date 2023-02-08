import axios from "axios";

const request = axios.create({
  // PRODUCTION BACKEND API URL
  // baseURL: "https://mern-whatsapp-clone-backend.onrender.com",
  // DEVELOPMENT BACKEND API URL
  baseURL: "http://localhost:3000",
});

export default request;
