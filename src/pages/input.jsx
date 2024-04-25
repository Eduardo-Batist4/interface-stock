import { useEffect, useState } from "react";
import { fetchingData, updateProductInput } from "../api";

export function Input() {
    const [ products, setProducts ] = useState([]);
    const [ idProduct, setIdProduct ] = useState(0);
    const [ quantity, setQuatity ] = useState(0);
    const [ error, setError ] = useState("hidden") 
    
    useEffect(() => { 
        fetchingData(setProducts) // fazendo requisição para buscar o produto pelo id.
    }, [])
    
    const handleClickInput = async (ev) => {
        ev.preventDefault();

        //////////////////////////////////////
        let previousInputQuantity = 0
        products.filter((ola) => {  // filtrando produto pelo id inserido.
            if(ola.id == idProduct) {
                previousInputQuantity += ola.input; // atribuindo na variavel
            }
        });
        const currentInputQuantity = Number(previousInputQuantity) + Number(quantity) // somando a quantidade anterior com a atual
        //////////////////////////////////////
        
        updateProductInput(idProduct, currentInputQuantity , setError);
        setIdProduct("");
        setQuatity("");
    }

    return (
        <section className="bg-slate-600/20 backdrop-blur-sm w-3/12 h-auto mx-auto p-5 text-center rounded-xl">
            <h2 className="text-3xl uppercase font-bold text-slate-50 mb-5">entrada</h2>
            <div className={`border-solid border-2 py-1 border-red-500 ${error}`}>
                <p className="uppercase text-red-500 font-base">id não encontrado!</p>
            </div>
            <div className="text-center">
                <form onSubmit={handleClickInput}>   
                    <div className="text-left space-y-3 mb-5">
                        <label htmlFor="idProduct"className="text-xl uppercase font-medium text-slate-50">id (produto)</label>
                        <input type="number" name="idProduct" 
                        className="w-full font-medium outline-none px-4 py-3 rounded-lg"
                        value={idProduct}
                        onChange={(ev) => setIdProduct(ev.target.value)}
                        />                        
                    </div>
                    <div className="text-left space-y-3">
                        <label htmlFor="quantity" className="text-xl uppercase font-medium text-slate-50">quantidade</label>
                        <input type="number" name="quantity" 
                        className="w-full font-medium outline-none px-4 py-3 rounded-lg"
                        value={quantity}
                        onChange={(ev) => setQuatity(ev.target.value)}
                        />
                    </div>
                        <button className="bg-blue-700 w-80 px-8 py-3 rounded-xl text-slate-50 text-xl uppercase font-medium mt-10">enviar</button>
                </form>
            </div>
        </section>
    );
}