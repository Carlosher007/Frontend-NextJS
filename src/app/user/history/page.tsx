"use client";

import {fetchData} from '../../../util/api/api'
import {useEffect} from 'react'

const page = () => {

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>page</div>
  )
}

export default page