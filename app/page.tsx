import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center  p-8  gap-8 bg-white">
    
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-900 min-lg:w-[50%]">Bem vindo ao Trabalho de conclusão do Inova Udi</h1>
    <p>Fique com nossas inovações referente ao Site Original</p>
    </div>
    <Link href="/pages/informacoes" target="_top">
    <button  className="p-2 bg-roxo rounded-md text-white font-semibold">
      Prosseguir
    </button>
    </Link>
    
    
    </main>
  );
}
