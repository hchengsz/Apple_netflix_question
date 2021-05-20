import Reducer from "./Reducer";
import React, { useReducer, createContext } from "react";

const initialState = {
  input: ""
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
