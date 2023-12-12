import axios from "axios";

const API_URL = `https://www.googleapis.com/books/v1/`
export const $api = axios.create({ baseURL: API_URL })