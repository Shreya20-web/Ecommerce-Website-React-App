import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2MyMmNhOTg0YTAxOTlhOWI5NTU2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDczNTc1NSwiZXhwIjoxNjc0OTk0OTU1fQ._kHfZTQh6e-rARvLP5v7PlkWQT6WkU-6j9gfMX8P884";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});