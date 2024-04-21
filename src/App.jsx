import { Link, Outlet } from "react-router-dom"
import Button from "./components/Button"

function App() {
  return (
    <main className="bg-zinc-900 w-full h-screen">
      <header className="w-full h-24 flex justify-around items-center mb-20">
          <Link>
            <h2 className="text-4xl text-slate-50 font-bold uppercase">stock</h2>
          </Link>
          <div className="space-x-7">
            <Button text="cadastro" link="/register" />
            <Button text="saida" link="/output" />
            <Button text="estoque" link="/stock" />
          </div>
      </header>
      <Outlet />
    </main>
  );
}

export default App;
