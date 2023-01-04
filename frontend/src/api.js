import axios from 'axios';
// console.log("hello");
// console.log(process.env.NODE_ENV);
const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "api"
    : "http://localhost:4000/";
// console.log("hello");
// const API_ROOT = "http://localhost:4000/";
// console.log(API_ROOT);

// const instance = axios.create({
//   baseURL: `http://localhost:4000/`,
// });
// console.log(API_ROOT);
const instance = axios.create({ baseURL: API_ROOT });

export default instance;

// instance.get('/hi').then((data) => console.log(data));
