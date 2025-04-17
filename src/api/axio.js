import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://YOUR_IP:5000/api',
});

export default instance;