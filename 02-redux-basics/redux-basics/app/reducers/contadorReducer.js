
const initialState = {
  valor: 0
};

const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_ADD':
      return {
          valor: state.valor + 1
      };
    case 'COUNTER_MINUS':
      return {
          valor: state.valor - 1
      };
    default:
      return state;
  }
};

export default contadorReducer;
