'use client';

import { Suspense, useEffect, useState } from 'react';
import UserCards from '../../core/ui/card/userCards';
import SkeletonOrder from '../../core/ui/skeletons';
const page = () => {
  return (
    <div>
      <h1 className="mx-8 mb-8 mt-2 text-center text-4xl">Your cards</h1>
      <Suspense fallback={<SkeletonOrder />}>
        {/*TO-DO: Change the user_id to the user_id of the logged in user*/}
        <div className="">
          <UserCards user_id={1} />
        </div>
      </Suspense>
    </div>
  );
};

export default page;
