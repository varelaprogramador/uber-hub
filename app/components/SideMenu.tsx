import { useState, useEffect } from "react";
import Link from "next/link";

import { LayoutGrid, Leaf, Info, CircleDollarSign, Banknote, MailIcon, SquarePlus, ShieldCheck } from "lucide-react";

export function SideMenu({ ...ExpandMenu }) {
    
    
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);
    
  console.log(currentPath);

  return (
    

    <aside
      className={`flex flex-col  ${ExpandMenu.expand ? " w-48" : "w-20"} h-screen bg-roxo fixed z-10 side-menu`}
    >
      <nav>
        <ul className="flex flex-col items-center justify-start h-screen pt-10 w-42 p-2 gap-4">
          <Link target="_top" href="/"  className={` p-2  ${currentPath=="/"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "flex-col"  } `} >
          
            <LayoutGrid className={`icon-roxo`}></LayoutGrid>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold `}>Home</p>
          </Link>

          <Link target="_top" href="/pages/ecossistema" className={`p-2  ${currentPath=="/pages/ecossistema"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "hidden"}`}>
            <Leaf className="icon-roxo"></Leaf>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Ecossistema</p>
          </Link>

          <Link target="_top" href="/pages/informacoes" className={`p-2  ${currentPath=="/pages/informacoes"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "hidden"}`}>
            <Info className="icon-roxo"></Info>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Informações</p>
          </Link>

          <Link target="_top" href="/pages/investimentos" className={`p-2  ${currentPath=="/pages/investimentos"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "flex-col"}`}>
            <CircleDollarSign className="icon-roxo"></CircleDollarSign>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Investimentos</p>
          </Link>

          <Link target="_top" href="/pages/beneficios" className={`p-2  ${currentPath=="/pages/beneficios"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "flex-col"}`}>
            <Banknote className="icon-roxo"></Banknote>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Benefícios</p>
          </Link>

          <Link target="_top" href="/pages/contato" className={`p-2  ${currentPath=="/pages/contato"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "flex-col"}`}>
            < MailIcon className="icon-roxo"></MailIcon>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Contato</p>
          </Link>

          <Link target="_top" href="/pages/vagas/inserir-vagas" className={`p-2  ${currentPath=="/pages/vagas/inserir-vagas"? "bg-black" : "bg-white" } rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full" : "flex-col"}`}>
            < SquarePlus className="icon-roxo"></SquarePlus>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Inserir Vagas</p>
          </Link>

          <Link target="_top" href="/pages/vagas/validar-vagas" className={`p-2  ${currentPath=="/pages/vagas/validar-vagas"? "bg-black" : "bg-white"} rounded-md gap-4 ${ExpandMenu.expand ? "flex w-full " : "flex-col"}`}>
            < ShieldCheck className="icon-roxo"></ShieldCheck>
            <p className={`${ExpandMenu.expand ? "flex " : "hidden"} text-roxo  font-bold`}>Validar Vagas</p>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
