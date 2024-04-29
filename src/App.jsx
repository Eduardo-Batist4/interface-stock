import { Link, Outlet } from "react-router-dom"
import Button from "./components/Button"

function App() {
  return (
    <main className="bg-zinc-900 w-full h-screen font-abc">
      <header className="w-full h-auto p-2 text-center items-center mb-20">
          <Link>
            <h2 className="text-4xl text-slate-50 mb-10 font-bold uppercase">stock</h2>
          </Link>
          <div className="flex flex-wrap justify-center items-start gap-5">
            <Button text="cadastro" link="/register" />
            <Button text="entrada" link="/input" />
            <Button text="saida" link="/output" />
            <Button text="estoque" link="/stock" />
          </div>
      </header>
      <Outlet />
    </main>
  );
}

export default App;
