import axios from 'axios';

const unsplashKey = 'REDACTED';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${unsplashKey}` }
});