import { useState } from "react";

export function Output() {
    const [ idProduct, setIdProduct ] = useState(0);
    const [ quantity, setQuatity ] = useState(0);

    const handleClickOutput = async (ev) => {
        ev.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/product/${idProduct}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({"output": quantity})
            })

            if(!response.ok) {
                throw new Error("Product update error");
            }
            
            console.log("Updated product!")
        } catch (error) {
            console.error(error)
        }

        setIdProduct("");
        setQuatity("");
    }

    return (
        <section className="bg-slate-600/20 backdrop-blur-sm w-3/12 h-auto mx-auto p-5 text-center rounded-xl">
            <h2 className="text-3xl uppercase font-bold text-slate-50">saida</h2>
            <div className="text-center mt-12">
                <form onSubmit={handleClickOutput}>   
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