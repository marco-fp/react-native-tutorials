export const setCode = code => ({
  type: 'SET_CODE',
  code
});

export const authRequestStart = () => ({
  type: 'AUTH_REQUEST_START'
});

export const authRequestSuccess = data => ({
  type: 'AUTH_REQUEST_SUCCESS',
  data
});

export const authRequestError = error => ({
  type: 'AUTH_REQUEST_ERROR',
  error
});

const authRequest = async (code) =>
  fetch(`http://192.168.1.104:8080/info?code=${code}`)
    .then(res => res.json())
    .catch(error => {console.log('Network Error', error); return error;});

export const sendCode = (code) => {
  return (dispatch) => {
    dispatch(authRequestStart());
    return authRequest(code).then(({error, data}) => {
      if(error){
        dispatch(authRequestError(error));
      } else {
        dispatch(authRequestSuccess(data));
      }
    });
  }
};
