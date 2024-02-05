import { getDolar } from "../../Util/ConverterMoney";
function CardSuscripcion({ sub, subDispach }) {
  const { amount, subcription } = sub;
  const subImg = `/img/${subcription}.png`;
  const handelDelete = () => subDispach({ type: "delete", id: sub.id });

  return (
    <li className="relative flex items-center justify-between gap-2 overflow-hidden rounded-lg bg-white px-5 py-2 shadow-md">
      <img className="h-16 w-16 object-cover" src={subImg} alt={subcription} />
      <p className="mr-5"> Precio de sucripcion: {getDolar(amount)}</p>
      <button
        onClick={handelDelete}
        className="absolute right-1 top-1/2 -translate-y-1/2 p-1"
      >
        ✖
      </button>
    </li>
  );
}
export default CardSuscripcion;
