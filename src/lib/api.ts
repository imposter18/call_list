import axios from "axios";

const API_URL = "https://api.skilla.ru";

export const api = axios.create({
	baseURL: API_URL,
});

api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer testtoken`;
	return config;
});
