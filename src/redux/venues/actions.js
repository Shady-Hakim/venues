import { 
    FETCH_VENUES_FAILURE, 
    FETCH_VENUES_REQUEST, 
    FETCH_VENUES_SUCCESS 
} from "./types"

export const fetchVenuesRequest = () => {
    return {
        type: FETCH_VENUES_REQUEST
    }
}

export const fetchVenuesSuccess = venues => {
    return {
        type: FETCH_VENUES_SUCCESS,
        payload: venues
    }
}

export const fetchVenuesFailure = error => {
    return {
        type: FETCH_VENUES_FAILURE,
        payload: error
    }
}