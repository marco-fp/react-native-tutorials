
const initialState = {
  code: '',
  accessStatus: 'No code sent',
  loading: false,
};

const autenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        code: action.code
      };
    case 'AUTH_REQUEST_START':
      return {
        ...state,
        loading: true
      };
    case 'AUTH_REQUEST_SUCCESS':
      return {
        ...state,
        error: '',
        loading: false,
        accessStatus: action.data
      };
    case 'AUTH_REQUEST_ERROR':
      return {
        ...state,
        loading: false,
        accessStatus: action.error
      };

    default:
      return state;
  }
};

export default autenticationReducer;
