import axios from 'axios';
// eslint-disable-next-line
const apiUrl = "/api/";

export const fetchGrievances = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_GRIEVANCES_REQUEST'
        });

        //axios.get(apiUrl + "/fecthUserInfo")
        axios.get("data/grievancesData.json")
            .then((response) => {
                dispatch(fetchGrievancesFullfilled(response.data))
            })
            .catch((error) => {
                dispatch(fetchGrievancesRejected(error))
            })
    }
}

export const fetchGrievancesFullfilled = (grievances) => {
    return {
        type: 'FETCH_GRIEVANCES_FULLFILLED',
        payload: grievances
    }
}

export const fetchGrievancesRejected = (error) => {
    return {
        type: 'FETCH_GRIEVANCES_FULLFILLED',
        payload: error
    }
}
