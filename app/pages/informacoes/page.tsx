export default function Informacoes() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  gap-8 bg-white ">
    
      <section
        className="flex w-full max-sm:h-[150px] max-sm:bg-left-top min-h-[300px]  items-center justify-between max-sm:justify-start max-sm:items-end p-7 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/banner-destaque.png')` }} 
      >
        <button  className="bg-roxo font-bold p-2 text-white rounded-md   self-start max-sm:hidden">Noticia</button>
        <div className="w-[60%] p-3  gap-8 max-sm:w-full max-sm:text-center max-sm:bg-[rgb(0,0,0,12%)] rounded-md">
        <h2 className="text-3xl font-bold text-white min-lg:w-[50%] mb-2">
        Kanastra estreia vertical de "banking" para fundos e securitizações 
        </h2>
       <button className="bg-roxo p-2 text-white rounded-md">
        Veja Mais
       </button>
       </div>
      </section>
      
    </main>
  );
}
