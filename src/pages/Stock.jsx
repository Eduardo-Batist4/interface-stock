import { useEffect, useState } from "react"

export function Stock() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const fetchingData = async () => {
          try {
            const response = await fetch("http://localhost:3001/products");
            if (!response.ok) {
              throw new Error('Erro ao fazer a requisição.');
            }
            const data = await response.json();
            console.log(data);
            setProducts(data);
          } catch (error) {
            console.error('Erro:', error);
          }
        };
      
        fetchingData();
      }, []);

    function balance (a, b) {
        return a - b;
    }

    function situationProduct (a, b) {
        return a - b <= 2 ? "comprar" : "ok";
    }

    return (
        <section className="w-3/5 p-4 m-auto h-auto">
            <table className="table-auto w-full">
                <tbody>
                    <tr className="text-white border-solid border-y-2 border-slate-50 text-left">
                        <th className="py-4 text-center border-solid border-x-2 border-slate-50">id</th>
                        <th className="py-4 pl-2 border-solid border-x-2 border-slate-50">produto</th>
                        <th className="py-4 text-center border-solid border-x-2  border-slate-50">entrada</th>
                        <th className="py-4 text-center border-solid border-x-2 border-slate-50">saida</th>
                        <th className="py-4 text-center border-solid border-x-2 border-slate-50">saldo</th>
                        <th className="py-4 text-center border-solid border-x-2 border-slate-50">situação</th>
                        <th className="py-4 text-center border-solid border-x-2 border-slate-50">alarme</th>
                    </tr>
                    {products.map((prod) => (
                        <tr key={prod.id} className="text-slate-50 border-solid border-y-2 border-slate-50/5">
                            <td className="w-10 py-4 text-center text-lime-500">{prod.id}</td>
                            <td className="w-64 py-4 pl-2">{prod.name}</td>
                            <td className="w-32 py-4 text-center">{prod.input}</td>
                            <td className="w-32 py-4 text-center">{prod.output}</td>
                            <td className="w-32 py-4 text-center">{balance(prod.input, prod.output)}</td>
                            <td className="w-32 py-4 text-center">{situationProduct(prod.input, prod.output)}</td>
                            <td className="w-32 py-4 text-center">0</td>
                        </tr>       
                    ))}
                </tbody>
            </table>
        </section>
    )
}