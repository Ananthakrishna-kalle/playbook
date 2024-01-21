import axios from 'axios';

let serverURL = 'http://localhost:8081';


const instance = axios.create({
   baseURL: serverURL
});

export default instance;