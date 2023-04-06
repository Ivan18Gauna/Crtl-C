import axios from "axios";

export function productsbycategory(category) {
  return async function(dispatch) {
    const json = await axios.get(`/products/${category}`);
    return dispatch({
      type: "FILTER_CATEGORY",
      payload: json.data,
    });
  };
}

export function forId(id) {
  return async function(dispatch) {

    const byId = await axios.get(`/product/${id}`);
    return dispatch({
      type: "FILTER_ID",
      payload: byId.data,
    });
  };
}

export function allProducts() {
  return async function(dispatch) {
    const json = await axios.get('/products');
    console.log('todos los productos')
    return dispatch({
      type: "ALL_PRODUCTS",
      payload: json.data
    })
  }
}
