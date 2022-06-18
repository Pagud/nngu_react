import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/1';

export const $api = axios.create({
  timeout: 10000,
  baseURL: baseUrl,
  headers: {
    Authorization: '',
  },
});
