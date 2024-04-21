export default function OrderCard({id, date, paymentMethod, total}: {id: number, date: string, paymentMethod: string, total: number}) {
  return (
    <div className="container rounded-lg bg-[#1C1C1E] p-8 hover:bg-[#2b2b2e] transition-colors	my-3">
      <div className="text-medium ">ID: {id}</div>
      <div className="text-sm text-[--foreground-secondary]">
        <div >Fecha: {date}</div>
        <div >Metodo de Pago: {paymentMethod}</div>
        <div >Total: {total}</div>
      </div>

    </div>
  )
}