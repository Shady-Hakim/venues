import axios from 'axios';

const api = process.env.REACT_APP_API
const id = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET
function venues(v, near) {
    return axios.get(`${api}/explore?client_id=${id}&client_secret=${secret}&v=${v}&near=${near}&query=lunch&limit=3&offset=5`)
}

export default venues