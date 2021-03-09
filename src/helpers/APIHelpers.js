import Axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const headers = {
  'Content-Type': 'application/json',
  'x-rapidapi-key': '9d3c2abe39msh77772478b03e4ecp1a2b09jsneb4c0b18252f',
  'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
};

const getAPI = (url, params, onSuccess, onError) => {
  trackPromise(
    Axios({
      method: 'GET',
      url,
      params,
      headers,
    })
  )
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      onError(error);
    });
};

export default getAPI;
