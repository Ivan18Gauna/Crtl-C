const initialState = {
  allProductsx: [],
  category: [],
  id: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "FILTER_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "FILTER_ID":
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
