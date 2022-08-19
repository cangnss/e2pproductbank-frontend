export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        products: [],
        loading: true,
        error: "",
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        page:0,
        loading: false,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
