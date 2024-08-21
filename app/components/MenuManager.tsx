"use client"; // Garante que este componente é renderizado no lado do cliente




import React, { useState } from 'react';
import { SideMenu } from './SideMenu';

import Image from 'next/image';
import { MenuIcon,DoorOpen, X } from 'lucide-react';
import Link from 'next/link';


export function ManagerMenu({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Alterna o estado do menu
  const setMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
  <body>
     <header className="w-full h-[110px] p-4 flex justify-between bg-roxo items-center drop-shadow-lg sticky top-0 z-[999] max-sm:justify-around">
      <div className="flex items-center gap-4 max-sm:justify-around ">
        <Link target="_top" href="/">
        <Image
          src="/assets/logo-uberhub.svg"
          alt="Logo uberhub"
          width={500}
          height={500}
          quality={100}
          className="w-[125px] h-full max-sm:order-2"
        /></Link>
        
         <button className='max-sm:order-1'  onClick={setMenu}>
        {menuOpen?<X color="#FFFFFF"/>:<MenuIcon color="#FFFFFF" className=' outline-none  '/> }
        </button>
         
      </div>
      
      <button className="flex bg-white text-roxo p-2 rounded-md gap-1 items-center">
        <DoorOpen color="#5000B7" size={25} />
        Login
      </button>
    </header>


    <div className="flex">
      <div className={`${menuOpen ? "w-48 max-sm:visible" : "w-20 max-sm:hidden"} `}>
        <SideMenu expand={menuOpen} />
      </div>
     
      {children}
    </div>

    </body>
  );
}
