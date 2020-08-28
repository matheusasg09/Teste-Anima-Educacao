import axios from 'axios';

const baseDomain = process.env.VUE_APP_API_BASE;
const baseURL = `${baseDomain}`;
export default axios.create({ baseURL });
