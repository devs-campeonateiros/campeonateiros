import axios from "axios";

export const api = axios.create({
    baseURL: "https://database-campeonateiros.herokuapp.com",
    timeout: 3000,
});
