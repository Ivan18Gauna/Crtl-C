import axios from "axios";

export function productsbycategory(category) {
  return async function (dispatch) {
    const filter = await axios(
      `http://localhost:3001/products/${category}`
    );

    return dispatch({
      type: "FILTER_CATEGORY",
      payload: filter.data,
    });
  };
}
