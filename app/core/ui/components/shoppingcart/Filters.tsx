import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '@/app/core/hooks/useFilters'


export function Filters() {
  const {filters, setFilters} = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event: any) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    })
    )
  }

  const handleChangeCategory = (event: any) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price a partir de</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="100000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory} >
          <option value="all">All</option>
          <option value="pets">Pets</option>
          <option value="technology">Technology</option>
          <option value="horses">Horses</option>
        </select>
      </div>
    </section>
  )
}