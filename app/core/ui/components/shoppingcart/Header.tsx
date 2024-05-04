import { Filters } from './Filters'


export function Header() {
  return (
    <header className='flex flex-col gap-5 mb-10'>
      <h1 className='text-2xl flex justify-center'>Shopping Cart 🛒 </h1>
      <Filters />
    </header>
  )
}