import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <main className="bg-zinc-800 w-full h-screen">
      <header className="bg-red-500 2-full h-24 flex justify-around items-center">
          <h2 className="text-4xl font-bold uppercase">stock</h2>
          <div className="space-x-7">
            <Link to="/register" className="text-2xl">cadastrar</Link>
            <Link to="/stock" className="text-2xl">estoque</Link>
          </div>
      </header>
      <Outlet />
    </main>
  )
}

export default App
