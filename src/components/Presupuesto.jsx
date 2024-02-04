import { useEffect, useState } from "react";
import RegisterPresupuesto from "./registerPresupuesto";
import AddStreaming from "./AddStreaming";

function Presupuesto() {
  const [presu, setPresu] = useState(0);
  const [subs, setSubs] = useState([]);
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
    <div className="container mx-2 my-5 min-h-64 rounded-lg bg-slate-200 p-8 shadow-xl">
      {presu ? (
        <AddStreaming
          subs={subs}
          setSubs={setSubs}
          presu={presu}
          gastoT={gastoT}
          disponible={disponible}
        />
      ) : (
        <RegisterPresupuesto setPresu={setPresu} />
      )}
    </div>
  );
}
export default Presupuesto;
