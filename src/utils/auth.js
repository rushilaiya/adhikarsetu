import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change if hosted remotely

export const login = async (role, phone, password) => {
  const res = await axios.post(`${API_URL}/${role}/login`, { phone, password });
  return res.data;
};

export const register = async (role, data) => {
  const res = await axios.post(`${API_URL}/${role}/register`, data);
  return res.data;
};