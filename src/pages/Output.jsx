import { useEffect, useState } from "react";
import { fetchingData, updateProductOutput } from "../api";

export function Output() {
    const [ products, setProducts ] = useState([]);
    const [ idProduct, setIdProduct ] = useState(0);
    const [ quantity, setQuatity ] = useState(0);
    const [ error, setError ] = useState("hidden");
    const [ successRegister, setSuccessRegister ] = useState("hidden");
 

    useEffect(() => { 
        fetchingData(setProducts) // fazendo requisição para buscar o produto pelo id.
    }, [])

    const handleClickOutput = async (ev) => {
        ev.preventDefault();

        //////////////////////////////////////
        let previousOutputQuantity = 0
        products.filter((prodId) => {  // filtrando produto pelo id inserido.
            if(prodId.id == idProduct) {
                previousOutputQuantity += prodId.output; // atribuindo na variavel
            }
        });
        const currentOutputQuantity = Number(previousOutputQuantity) + Number(quantity) // somando a quantidade anterior com a atual
        //////////////////////////////////////

        updateProductOutput(idProduct, currentOutputQuantity, setError, setSuccessRegister);

        setIdProduct(""); // limpando campo
        setQuatity(""); // limpando campo
    }

    return (
        <>
            <section className="bg-slate-600/20 backdrop-blur-sm w-11/12 h-auto mx-auto p-5 text-center rounded-xl md:w-6/12">
                <h2 className="text-3xl uppercase font-bold text-slate-50 mb-5">saida</h2>
                <div className={`border-solid border-2 py-1 border-red-500 mb-5 ${error}`}>
                    <p className="uppercase text-red-500 font-base text-sm">id não encontrado!</p>
                </div>
                <div className="text-center">
                    <form onSubmit={handleClickOutput}>   
                        <div className="text-left space-y-3 mb-5">
                            <label htmlFor="idProduct"className="text-base uppercase font-medium text-slate-50">id (produto)</label>
                            <input type="number" name="idProduct" min={1}
                            className="w-full font-medium outline-none px-4 py-3 rounded-lg"
                            value={idProduct}
                            onChange={(ev) => setIdProduct(ev.target.value)}
                            />                        
                        </div>
                        <div className="text-left space-y-3">
                            <label htmlFor="quantity" className="text-base uppercase font-medium text-slate-50">quantidade</label>
                            <input type="number" name="quantity" min={1}
                            className="w-full font-medium outline-none px-4 py-3 rounded-lg"
                            value={quantity}
                            onChange={(ev) => setQuatity(ev.target.value)}
                            />
                        </div>
                            <button className="bg-blue-700 w-80 px-8 py-3 rounded-xl text-slate-50 text-lg uppercase font-medium mt-10">enviar</button>
                    </form>
                </div>
            </section>
            <div className={`bg-lime-400/10 border-solid border-2 border-lime-500/60 w-50 p-1 text-center fixed top-5 right-5 md:absolute md:bottom-5 md:top-auto md:right-5 ${successRegister}`}>
                <p className="text-slate-50 text-sm">Produto atualizado com Sucesso!</p>
            </div>
        </>
    );
}