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
import Navbar from '../components/navbar';
import { Footer } from '../components/footer';
import { usePathname } from 'next/navigation';


export const Providers = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname()


  return (
    <SessionProvider >
      {!pathname.startsWith("/testimonial") && <Navbar/>}
      
      {children}
      {!pathname.startsWith("/testimonial") &&  <Footer/>}

     
    </SessionProvider>
  );
};

