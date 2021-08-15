function onError(error) {
  console.log(error);
  return Promise.reject(error);
}

function getResponseData(response) {
  return response.data;
}

export default function(axios) {
  axios.interceptors.response.use(getResponseData, onError);
}