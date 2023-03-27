import axios from "axios";

export function productsbycategory(category) {
  return async function(dispatch) {
    const json = await axios.get(`/products/${category}`);
    console.log(json);
    return dispatch({
      type: "FILTER_CATEGORY",
      payload: json.data,
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
