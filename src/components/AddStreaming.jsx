import { useContext } from "react";
import CardSuscripcion from "./Cards/CardSuscripcion";
import VistaDeGastos from "./Cards/VistaDeGastos";
import FormStreaming from "./forms/FormStreaming";
import { datosContext } from "../Context/createContext";

function AddStreaming() {
  const { subDispach, subs } = useContext(datosContext);
  console.log(subs);
  return (
    <div>
      <VistaDeGastos />
      <div>
        <h2 className="text-lg font-bold">Tus Gastos</h2>
        <FormStreaming />
        <div>
          <ul className="flex flex-col gap-3">
            {subs.map((sub) => (
              <CardSuscripcion
                key={sub.id}
                sub={sub}
                subDispach={subDispach}
                subs={subs}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AddStreaming;
