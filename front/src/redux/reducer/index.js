const initialState = {
    category:[]
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "FILTER_CATEGORY":
        return {
          ...state,
          category: action.payload,
        };
      default:
        return state;
    }
  }
  export default rootReducer;