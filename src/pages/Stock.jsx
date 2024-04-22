export function Stock() {
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
                    <tr className="text-slate-50 border-solid border-y-2 border-slate-50/5">
                        <td className="w-10 py-4 text-center">1</td>
                        <td className="w-64 py-4 pl-2">camiseta</td>
                        <td className="w-32 py-4 text-center">10</td>
                        <td className="w-32 py-4 text-center">3</td>
                        <td className="w-32 py-4 text-center">7</td>
                        <td className="w-32 py-4 text-center">comprar</td>
                        <td className="w-32 py-4 text-center">0</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}