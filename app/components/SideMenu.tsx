import { useState } from "react";
import { LayoutGrid, Leaf, Info, CircleDollarSign, Banknote, MailIcon,  SquarePlus, ShieldCheck } from "lucide-react";

export function SideMenu({ ...ExpandMenu }) { // Recebe a largura como prop
  return (
    <aside
      className={`flex flex-col  ${ExpandMenu.expand? " w-48" : "w-20"} h-screen bg-roxo fixed z-10 side-menu`}
    >
      <nav>
        <ul className="flex flex-col items-center justify-start h-screen pt-10 w-42 p-2 gap-4">
          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "flex-col"} `}><LayoutGrid className={`icon-roxo`}></LayoutGrid><p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold `}>Home</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "hidden"}`}><Leaf className="icon-roxo"></Leaf><p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Ecossistema</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "hidden"}`}><Info className="icon-roxo"></Info><p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Informações</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "flex-col"}`}><CircleDollarSign className="icon-roxo"></CircleDollarSign><p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Investimentos</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "flex-col"}`}><Banknote className="icon-roxo"></Banknote> <p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Benefícios</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "flex-col"}`}>< MailIcon className="icon-roxo"></MailIcon> <p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Contato</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full" : "flex-col"}`}>< SquarePlus className="icon-roxo"></SquarePlus> <p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Inserir Vagas</p></li>

          <li className={`p-2  bg-white rounded-md gap-4 ${ExpandMenu.expand ?  "flex w-full " : "flex-col"}`}>< ShieldCheck className="icon-roxo"></ShieldCheck> <p className={`${ExpandMenu.expand ?  "flex " : "hidden"} text-roxo  font-bold`}>Validar Vagas</p></li>
        </ul>
      </nav>
    </aside>
  );
}
