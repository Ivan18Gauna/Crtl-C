const initialState = {
    allProducts:[],
    category:[]
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ALL_PRODUCTS":
        return {
          ...state,
          allProducts: action.payload
        };
      case "FILTER_CATEGORY":
        return {
          ...state,
          category: action.payload
        };
      default:
        return state;
    }
  }
  export default rootReducer;