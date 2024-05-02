import { useState } from "react";
import { sendData } from "../api";

export function Register() {
    const [ nameProduct, setNameProduct ] = useState("");
    const [ quantity, setQuatity ] = useState(0);  
    const [ successRegister, setSuccessRegister ] = useState("hidden")

    const handleClick = async (ev) => {
        ev.preventDefault();

        sendData(nameProduct, quantity, setSuccessRegister) // requisição POST
        
        setNameProduct(""); // limpando campo
        setQuatity(""); // limpando campo
    }   

    return (
        <div className="w-full h-screen flex items-start pt-32">
            <section className="static bg-slate-600/20 backdrop-blur-sm w-11/12 h-auto mx-auto p-5 text-center rounded-xl md:w-6/12 lg:w-2/5">
                <h2 className="text-3xl uppercase font-bold text-slate-50">cadastro</h2>
                <div className="text-center mt-5">
                    <form onSubmit={handleClick}>   
                        <div className="text-left space-y-3 mb-5">
                            <label htmlFor="name"className="text-base uppercase font-medium text-slate-50">nome</label>
                            <input type="text" name="name" 
                            className="w-full font-medium outline-none px-4 py-3 rounded-lg"
                            value={nameProduct}
                            onChange={(ev) => setNameProduct(ev.target.value)}
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
                            <button className="bg-blue-700 hover:bg-blue-600  active:bg-blue-800 w-80 px-8 py-3 rounded-xl text-slate-50 text-lg uppercase font-medium mt-10">cadastrar</button>
                    </form>
                </div>
            </section>
            <div className={`bg-lime-400/10 border-solid border-2 border-lime-500/60 w-50 p-1 text-center fixed top-5 right-5 md:absolute md:bottom-5 md:top-auto md:right-5 ${successRegister}`}>
                <p className="text-slate-50 text-sm">Produto Cadastrado com Sucesso!</p>
            </div>
        </div>
    )
}   