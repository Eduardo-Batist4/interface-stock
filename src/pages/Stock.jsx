import { useEffect, useState } from "react"
// icons
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { deleteProduct, fetchingData, situationProduct } from "../api";

export function Stock() {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetchingData(setProducts);
    }, []);
    
    const handleClickDelete = async (idProduct) => {
        deleteProduct(idProduct, setProducts);
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
                        <th className="w-20 py-4 text-center border-solid border-x-2 border-slate-50">delete</th>
                    </tr>   
                    {products.map((prod) => (
                        <tr key={prod.id} className="text-slate-50 border-solid border-y-2 border-slate-50/5">
                            <td className="w-20 py-4 text-center text-blue-600">{prod.id}</td>
                            <td className="w-64 py-4 pl-2">{prod.name}</td>
                            <td className="w-32 py-4 text-center">{prod.input}</td>
                            <td className="w-32 py-4 text-center">{prod.output}</td>
                            <td className="w-32 py-4 text-center">{prod.input - prod.output}</td>
                            <td className="w-32 py-4 text-center">{situationProduct(prod.input, prod.output)}</td>
                            <td className={`w-32 py-4 ${situationProduct(prod.input, prod.output) == "comprar" ? "text-red-700" : "text-lime-500"}`}><FaCircle className="m-auto" /></td>
                            <td className="text-center">
                                <button className="py-5" onClick={() => handleClickDelete(prod.id)}>
                                    <FaRegTrashAlt className="m-auto text-gray-500 hover:text-red-500" />
                                </button>                                
                            </td>
                        </tr>       
                    ))}
                </tbody>
            </table>
        </section>
    )
}