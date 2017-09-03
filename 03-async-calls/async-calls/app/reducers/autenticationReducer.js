
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
        data: {
          loading: true,
        }
      };
    case 'AUTH_REQUEST_SUCCESS':
      return {
        ...state,
        data: {
          error: '',
          loading: false,
          accessStatus: action.data
        }
      };
    case 'AUTH_REQUEST_ERROR':
      return {
        ...state,
        data: {
          loading: false,
          accessStatus: action.error
        }
      };

    default:
      return state;
  }
};

export default autenticationReducer;
