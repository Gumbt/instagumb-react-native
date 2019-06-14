import axios from 'axios';

const api = axios.create({
    baseURL: 'https://igumbteste.herokuapp.com'
})

export default api;