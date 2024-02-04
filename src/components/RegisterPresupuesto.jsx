import { useState } from "react";

function RegisterPresupuesto({ setPresu }) {
  const [valor, setValor] = useState("");
  const handelSumit = (e) => {
    e.preventDefault();
    setPresu(valor);
  };
  return (
    <div className="w-full ">
      <h1 className="text-center text-xl font-semibold uppercase text-slate-600">
        Ingrese Presupuesto
      </h1>
      <form
        onSubmit={handelSumit}
        className="mx-auto mt-5 flex flex-col items-center "
      >
        <input
          className="mb-4 w-64 rounded-lg p-2 shadow-md"
          type="number"
          placeholder="$500"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button className="rounded-md bg-emerald-500 px-8 py-3 text-white shadow-md hover:bg-emerald-600">
          Ingresar
        </button>
      </form>
    </div>
  );
}
export default RegisterPresupuesto;
