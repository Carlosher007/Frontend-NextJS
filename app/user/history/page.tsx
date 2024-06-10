'use client';

import { Suspense, useEffect, useState } from 'react';
import Orders from '../../core/ui/history/orders';
import SkeletonOrder from '../../core/ui/skeletons';
const page = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonOrder />}>
        <Orders />
      </Suspense>
    </div>
  );
};

export default page;
