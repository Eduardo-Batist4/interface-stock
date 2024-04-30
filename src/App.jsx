import { Link, Outlet } from "react-router-dom"
import Button from "./components/Button"

function App() {
  return (
    <main className="bg-zinc-900 w-full min-h-screen font-abc">
      <header className="w-full h-auto p-2 text-center items-center md:flex md:justify-around md:items-center md:h-24">
          <Link>
            <h2 className="text-4xl text-slate-50 mb-10 font-bold uppercase md:m-0">stock</h2>
          </Link>
          <div className="flex flex-wrap justify-center items-start gap-5">
            <Button text="cadastro" link="/register" />
            <Button text="entrada" link="/input" />
            <Button text="saida" link="/output" />
            <Button text="estoque" link="/stock" />
          </div>
      </header>
      <Outlet />
      <footer className="w-full text-center">
          <p className="text-slate-50 text-sm">&copy; Todos os direitos reservados para Eduardo Batista</p>
      </footer>
    </main>
  );
}

export default App;
