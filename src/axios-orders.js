import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-95ab8.firebaseio.com/'
});

export default instance;