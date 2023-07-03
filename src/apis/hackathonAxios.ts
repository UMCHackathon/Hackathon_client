import axios from 'axios';

export const hackathonAxios = axios.create({
  baseURL: 'http://43.202.79.30:9000/swagger-ui',
  headers: {
    'Content-Type': 'application/json'
  }
});
