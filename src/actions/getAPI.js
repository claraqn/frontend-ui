import axios from 'axios';

const GET_DATA_PENDING = 'GET_DATA_PENDING';
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

function fetchData(param) {
  // TODO: Fix as env value
  return axios.get(`https://alzseven.github.io/api/mock/${param}`);
}

function getAPI(param) {
  return (dispatch) => {
    fetchData(param)
      .then((response) => {
        // console.log(response);
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DATA_FAILURE,
          payload: error,
        });
      });
  };
}

//---

function getStations() {
  return (dispatch) => {
    dispatch({ type: GET_DATA_PENDING });
    //TODO: Fix
    dispatch(getAPI('stations.json'));
  };
}

function getStationData(stationID) {
  return (dispatch) => {
    dispatch({ type: GET_DATA_PENDING });
    //TODO: Fix
    dispatch(getAPI(`stations/${stationID}.json`));
  };
}

export {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  getStations,
  getStationData,
};
