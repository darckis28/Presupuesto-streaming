import CardSuscripcion from "./Cards/CardSuscripcion";
import VistaDeGastos from "./Cards/VistaDeGastos";
import FormStreaming from "./forms/FormStreaming";

function AddStreaming({ setSubs, subs, presu, disponible, gastoT }) {
  return (
    <div>
      <VistaDeGastos presu={presu} disponible={disponible} gastoT={gastoT} />
      <div>
        <h2 className="text-lg font-bold">Tus Gastos</h2>
        <FormStreaming setSubs={setSubs} subs={subs} disponible={disponible} />
        <div>
          <ul className="flex flex-col gap-3">
            {subs.map((sub) => (
              <CardSuscripcion
                key={sub.id}
                sub={sub}
                setSubs={setSubs}
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
