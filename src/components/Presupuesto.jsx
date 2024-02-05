import { useContext } from "react";
import RegisterPresupuesto from "./registerPresupuesto";
import AddStreaming from "./AddStreaming";
import { datosContext } from "../Context/createContext";

function Presupuesto() {
  const { presu } = useContext(datosContext);

  return (
    <div className="container mx-2 my-5 min-h-64 rounded-lg bg-slate-200 p-8 shadow-xl">
      {presu ? <AddStreaming /> : <RegisterPresupuesto />}
    </div>
  );
}
export default Presupuesto;
