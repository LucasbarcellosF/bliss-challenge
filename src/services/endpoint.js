import axios from "axios";

export const endpoint = axios.create({
  baseURL: "https://private-bbbe9-blissrecruitmentapi.apiary-mock.com",
});
