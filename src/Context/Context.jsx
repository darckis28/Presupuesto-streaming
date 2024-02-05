import { useState, useEffect, useReducer } from "react";
import { datosContext } from "./createContext";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.module];
    case "delete":
      return state.filter((data) => data.id !== action.id);
    default:
      return state;
  }
};

function Context({ children }) {
  const [presu, setPresu] = useState(0);
  const [subs, subDispach] = useReducer(reducer, []);
  const [gastoT, setGastoT] = useState(0);
  const [disponible, setDisponible] = useState(presu);
  useEffect(() => {
    const gastoTotal = subs
      .map((data) => parseInt(data.amount))
      .reduce((a, b) => a + b, 0);
    setGastoT(gastoTotal);
    setDisponible(presu - gastoT);
  }, [subs, presu, gastoT]);
  return (
    <datosContext.Provider
      value={{
        presu,
        setPresu,
        gastoT,
        setGastoT,
        disponible,
        setDisponible,
        subs,
        subDispach,
      }}
    >
      {children}
    </datosContext.Provider>
  );
}
export default Context;
