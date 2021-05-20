const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
