'use client'
import { useState, useId, useEffect } from 'react'
import './Filters.css'
import { useFilters } from '@/app/core/hooks/useFilters'
import { Category } from '@/app/core/lib/definitions'
import { getCategories } from '@/app/core/api/dashboardImages/service'


export function Filters() {
  const {filters, setFilters} = useFilters()
  const [categories, setCategories] = useState<Category[]>([])

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

  const _setCategories = async () => setCategories(await getCategories());
  useEffect(() => { _setCategories() }, []); 

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
          {categories.map(category => 
            <option key={category.category_id} value={category.name}>{category.name}</option>)}
        </select>
      </div>
    </section>
  )
}