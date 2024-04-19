import SelectType from "../components/Select";

export function Register() {
    return (
        <section className="bg-slate-600/20 backdrop-blur-sm w-3/12 h-3/5 mx-auto p-5 text-center rounded-xl">
            <h2 className="text-3xl uppercase font-bold text-slate-50">cadastro</h2>
            <div className="text-center mt-12">
                <form>
                    <div className="text-left space-y-3 mb-5">
                        <label htmlFor="name"className="text-xl uppercase font-medium text-slate-50">nome</label>
                        <input type="text" name="name" 
                        className="w-full font-medium outline-none px-4 py-3 rounded-lg"/>                        
                    </div>
                    <SelectType />
                    <div className="text-left space-y-3">
                        <label htmlFor="quantity" className="text-xl uppercase font-medium text-slate-50">quantidade</label>
                        <input type="number" name="quantity" className="w-full font-medium outline-none px-4 py-3 rounded-lg"/>
                    </div>
                        <button className="bg-blue-700 w-80 px-8 py-3 rounded-xl text-slate-50 text-xl uppercase font-medium mt-10">cadastrar</button>
                </form>
            </div>
        </section>
    )
}