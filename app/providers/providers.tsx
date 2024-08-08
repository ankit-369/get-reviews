// 'use client';
// import React from 'react';
// import { SessionProvider } from 'next-auth/react';

// export const Providers = ({ children }: { children: React.ReactNode }) => {
  
//   return (
//     <SessionProvider>
//       {children}
//     </SessionProvider>
//   );
// };


'use client';
import React, { useEffect } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';


export const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  );
};

