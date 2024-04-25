import { useState } from "react";
import { sendData } from "../api";

export function Register() {
    const [ nameProduct, setNameProduct ] = useState("");
    const [ quantity, setQuatity ] = useState(0);  
    const [ successRegister, setSuccessRegister ] = useState("hidden")

    const handleClick = async (ev) => {
        ev.preventDefault();

        sendData(nameProduct, quantity) // requisição POST
        
        setTimeout(() => {
            setSuccessRegister("hidden") // box de aviso (sucesso) 
        }, 3000)
        setSuccessRegister("block")
        
        setNameProduct(""); // limpando campo
        setQuatity(""); // limpando campo
    }   

    return (
        <>
            <section className="static bg-slate-600/20 backdrop-blur-sm w-3/12 h-auto mx-auto p-5 text-center rounded-xl">
                <h2 className="text-3xl uppercase font-bold text-slate-50">cadastro</h2>
                <div className="text-center mt-10">
                    <form onSubmit={handleClick}>   
                        <div className="text-left space-y-3 mb-5">
                            <label htmlFor="name"className="text-xl uppercase font-medium text-slate-50">nome</label>
                            <input type="text" name="name" 
                            className="w-full font-medium outline-none px-4 py-3 rounded-lg"
                            value={nameProduct}
                            onChange={(ev) => setNameProduct(ev.target.value)}
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
                            <button className="bg-blue-700 w-80 px-8 py-3 rounded-xl text-slate-50 text-xl uppercase font-medium mt-10">cadastrar</button>
                    </form>
                </div>
            </section>
            <div className={`bg-lime-400/10 border-solid border-2 border-lime-500/60 w-80 p-1 text-center absolute bottom-10 right-10 ${successRegister}`}>
                <p className="text-slate-50">Produto Cadastrado com Sucesso!</p>
            </div>
        </>
    )
}   