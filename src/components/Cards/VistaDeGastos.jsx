import { getDolar } from "../../Util/ConverterMoney";

function VistaDeGastos({ presu, gastoT, disponible }) {
  return (
    <div>
      <h2 className="text-lg font-bold">Saldo</h2>
      <div className="">
        <div className="">
          <div className="mb-2 flex w-full justify-between rounded-md bg-yellow-600 p-1 text-white shadow-sm">
            <p className="">Saldo total: </p>
            <span className="">{getDolar(presu)}</span>
          </div>
          <div className="mb-2 flex w-full justify-between rounded-md bg-emerald-600 p-1 text-white shadow-sm">
            <p className="">Disponible: </p>
            <span>{getDolar(disponible)}</span>
          </div>
          <div className="flex w-full justify-between rounded-md bg-red-600 p-1 text-white">
            <p>Gasto Total: </p>
            <span>{getDolar(gastoT)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VistaDeGastos;
