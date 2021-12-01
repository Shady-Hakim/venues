import { 
    FETCH_VENUES_FAILURE,
    FETCH_VENUES_REQUEST, 
    FETCH_VENUES_SUCCESS 
} from "./types"
const initialState = {
    loading: false,
    venues: [],
    error: ''
}
const venuesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_VENUES_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_VENUES_SUCCESS: 
            return {
                ...state,
                loading: false,
                venues: action.payload,
                error: ''
            }
        case FETCH_VENUES_FAILURE: 
            return {
                ...state,
                loading: false,
                venues: [],
                error: action.payload
            }
        default: return state
    }
}
export default venuesReducer