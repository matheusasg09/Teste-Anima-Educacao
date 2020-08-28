import axios from 'axios';

const baseURL = process.env.VUE_APP_API_BASE;
export default axios.create({ baseURL });
