import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer"

const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    loading: false,
    error: false,
  });

  const data = {
    ...state,
    dispatch,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useProducts = () => useContext(Context);

export default Provider;
