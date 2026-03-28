import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Giả định backend chạy cổng 5000
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;