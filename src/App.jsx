import { Outlet } from "react-router-dom"
import Button from "./components/button"

function App() {
  return (
    <main className="bg-zinc-800 w-full h-screen">
      <header className=" 2-full h-24 flex justify-around items-center">
          <h2 className="text-4xl text-slate-50 font-bold uppercase">stock</h2>
          <div className="space-x-7">
            <Button text="cadastro" link="/register" />
            <Button text="estoque" link="/stock" />
          </div>
      </header>
      <Outlet />
    </main>
  )
}

export default App
