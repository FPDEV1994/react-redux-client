const INITIAL_STATE = {
    grievances: [{
        id: null,
        firstName: null,
        lastName: null,
        phoneNumbers: [],
        pincode: null
    }],
    page: 0,
    rowsPerPage: 5,
    isFetching: false,
    isFetched: false,
    error: null
}

export const grievancesReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_GRIEVANCES_REQUEST':
            return { ...currentState, isFetching: true };

        case 'FETCH_GRIEVANCES_FULLFILLED':
            return { ...currentState, isFetching: false, isFetched: true, grievances: action.payload }

        case 'FETCH_GRIEVANCES_REJECTED':
            return { ...currentState, isFetching: false, error: action.payload }

        case 'CHANGE_PAGE_NUMBER':
            return { ...currentState, page: action.payload }

        case 'CHANGE_ROWS_PER_PAGE':
            return { ...currentState, page: action.payload.page, rowsPerPage: action.payload.rowsPerPage }

        default:
            return currentState;
    }
}