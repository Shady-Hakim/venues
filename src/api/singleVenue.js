import axios from 'axios';

const api = process.env.REACT_APP_API
const id = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET
function singleVenue(venueId,v) {
    return axios.get(`${api}/${venueId}?client_id=${id}&client_secret=${secret}&v=${v}`)
}
export default singleVenue