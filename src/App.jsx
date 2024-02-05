import Context from "./Context/Context";
import Presupuesto from "./components/Presupuesto";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-t from-cyan-400 to-emerald-500">
      <Context>
        <Presupuesto />
      </Context>
    </div>
  );
}

export default App;
