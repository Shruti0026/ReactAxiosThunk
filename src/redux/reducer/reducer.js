import { GET_DETAILS, POST_DETAILS, UPDATE_DETAILS, DELETE_DETAILS } from "../type";


const initialState = {
    UsersData: [],
    detailsById: [],
    isResponse: false,
    isUpdateResponse: false,
    isDeleteResponse: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                UsersData: action.payload,
            };

        case POST_DETAILS:
            return {
                isResponse: action.payload,
            };

        case UPDATE_DETAILS:
            return {
                isUpdateResponse: action.payload,
            };

        case DELETE_DETAILS:
            return {
                isDeleteResponse: action.payload,
            };


        default:
            return state;
    }
}
export default Reducer;