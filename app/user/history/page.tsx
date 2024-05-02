"use client";

import { Suspense, useEffect, useState } from 'react'
import Orders from '../../core/ui/history/orders'
import SkeletonOrder from '../../core/ui/skeletons/skeletonOrder'
const page = () => {
  return (
    <div>
      <h1 className='text-2xl mx-8 mb-8'>Historial</h1>
      <Suspense fallback={<SkeletonOrder />}>
        <Orders />
      </Suspense>
    </div>
  )
}

export default page