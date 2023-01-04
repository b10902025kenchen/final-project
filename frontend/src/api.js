import axios from 'axios';

console.log(process.env.NODE_ENV)
const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/api"
    : "http://localhost:4001/";

// const instance = axios.create({
//   baseURL: `http://localhost:4000/`,
// });

const instance = axios.create({ baseURL: API_ROOT });

export default instance;

// instance.get('/hi').then((data) => console.log(data));
