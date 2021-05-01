import {
  GET_DATA_FAILURE,
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
} from '../actions/getAPI';

const initialState = {
  pending: false,
  error: false,
  data: [],
};

const handleActions = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data.data,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return initialState;
  }
};

export default handleActions;
