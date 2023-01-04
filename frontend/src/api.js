import axios from 'axios';

console.log(process.env.NODE_ENV)
const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "https://final-project-production-e536.up.railway.app/"
    : "http://localhost:4000/";

// const instance = axios.create({
//   baseURL: `http://localhost:4000/`,
// });

const instance = axios.create({ baseURL: API_ROOT });

export default instance;

// instance.get('/hi').then((data) => console.log(data));
