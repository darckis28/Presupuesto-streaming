import { getDolar } from "../../Util/ConverterMoney";
function CardSuscripcion({ sub, setSubs, subs }) {
  const { amount, subcription } = sub;
  const subImg = `/img/${subcription}.png`;
  const handelDelete = () => {
    const newlist = subs.filter((data) => data.id !== sub.id);
    setSubs(newlist);
  };
  return (
    <li className="flex items-center justify-between gap-2 overflow-hidden rounded-lg bg-white px-5 py-2 shadow-md">
      <img className="h-16 w-16 object-cover" src={subImg} alt={subcription} />
      <p> Precio de sucripcion: {getDolar(amount)}</p>
      <button onClick={handelDelete} className="p-1">
        X
      </button>
    </li>
  );
}
export default CardSuscripcion;
