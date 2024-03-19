import axios from 'axios';

axios.defaults.baseURL="http://localhost:9000"

axios.interceptors.request.use=(()=>{
})

export default axios
export{
    axios as api
}