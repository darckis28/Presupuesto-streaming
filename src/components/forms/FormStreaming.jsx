import { useContext, useState } from "react";
import { datosContext } from "../../Context/createContext";

function FormStreaming() {
  const { subDispach, disponible } = useContext(datosContext);
  const [subcription, setSuscription] = useState("");
  const [amount, setAmount] = useState("");
  const [err, setError] = useState(false);
  const handelSumit = (e) => {
    e.preventDefault();
    if (amount > 0 && subcription != "" && amount < disponible) {
      const newList = {
        id: Math.random(),
        subcription,
        amount,
      };

      subDispach({ type: "add", module: newList });
      setAmount("");
      setSuscription("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <form onSubmit={handelSumit} className="my-3">
      <input
        onChange={(e) => setAmount(e.target.value)}
        className="shadow-m3 mb-4 w-full rounded-md p-2"
        type="number"
        placeholder="$500"
        value={amount}
      />
      <select
        onChange={(e) => setSuscription(e.target.value)}
        value={subcription}
        className="shadow-m3 mb-4 w-full rounded-md p-2"
      >
        <option value="" hidden>
          Elige una Suscripcion
        </option>
        <option value="crunchyroll">Crunchyroll</option>
        <option value="disneyPlus">Disney+</option>
        <option value="hboMax">HBO Max</option>
        <option value="netflix">Netflix</option>
        <option value="primeVideo">Prime Video</option>
        <option value="starPlus"> Star+</option>
      </select>
      {err && (
        <p className="my-2 bg-red-800 text-center text-white">
          datos introducidos incorrectos o sobrepasaste el saldo
        </p>
      )}
      <button className="mx-auto block rounded-md bg-emerald-500 px-8 py-3 text-white shadow-md hover:bg-emerald-600">
        Agregar
      </button>
    </form>
  );
}
export default FormStreaming;
