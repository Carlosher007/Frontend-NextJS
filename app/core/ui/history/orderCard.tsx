export default function OrderCard({id, date, paymentMethod, total}: {id: number, date: string, paymentMethod: string, total: number}) {
  return (
    <div className="container rounded-lg dark:bg-[#1C1C1E] p-8 dark:hover:bg-[#2b2b2e] transition-colors bg-[#f7f7f7] hover:bg-[#f5f5f5]	my-3">
      <div className="text-medium ">ID: {id}</div>
      <div className="text-sm dark:text-zinc-50">
        <div >Fecha: {date}</div>
        <div >Metodo de Pago: {paymentMethod}</div>
        <div >Total: {total}</div>
      </div>

    </div>
  )
}