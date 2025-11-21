// layout.jsx
"use client";
import Image from "next/image";


export default function vehicleparkingLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Background Image (only for projects pages) */}
               <div className="absolute inset-0 -z-10">
                 <Image
                   src="/bg.png"
                   alt="Background"
                   fill
                   className="object-cover opacity-80"
                 />
               </div>

      {/* Page content */}
      <main className="flex-grow pt-24 px-4 md:px-0">
        {children}
      </main>

    
    </div>
  );
}
