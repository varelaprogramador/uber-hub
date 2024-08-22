import Image from "next/image";
import Link from "next/link";
export default function Informacoes() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  gap-8 bg-white ">

      <section
        className="flex w-full max-sm:h-[150px] max-sm:bg-left-top min-h-[300px]  items-center justify-between max-sm:justify-start max-sm:items-end p-7 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/banner-destaque.png')` }}
      >
        <button className="bg-roxo font-bold p-2 text-white rounded-md   self-start max-sm:hidden">Noticia</button>
        <div className="w-[60%] p-3  gap-8 max-sm:w-full max-sm:text-center max-sm:bg-[rgb(0,0,0,12%)] rounded-md">
          <h2 className="text-3xl font-bold text-white min-lg:w-[50%] mb-2">
            Kanastra estreia vertical de "banking" para fundos e securitizações
          </h2>
          <button className="bg-roxo p-2 text-white rounded-md">
            Veja Mais
          </button>
        </div>
      </section>
      {/* Cards top 3*/}
      <section className="flex  flex-col  p-8 gap-8  w-full min-h-48">
        <div className="flex  flex-col justify-start">
          <h2 className="text-3xl font-bold mb-2 ">Mais Relevantes</h2>
          <p className="text-gray-700">confira o top 3 mais relevantes de cada area</p>
        </div>
        <div className="w-full grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {/* Card Vagas*/}
          <div className="w-[400px] min-h-[500px] p-4   max-lg:w-full">
            <h2 className="text-2xl  mb-2">Vagas</h2>
            <div className="w-full h-[400px] border border-gray-400 rounded-xl flex flex-col justify-around p-4 pt-5 pb-5">

              {/* Vagas aqui*/}
              <article className="w-full h-[145px] border border-gray-400 rounded-md p-4 flex items-center">
                <Image
                  src="/assets/gaio_logo.png"
                  alt="marca"
                  width={70}
                  height={100}
                >
                </Image>
                <div className="w-full flex flex-col justify-start ml-4 gap-1">
                  <h2>Desenvolvedor Pleno Full Stack ReactJS</h2>
                  <p className="descrição-vaga-card">It is a long established fact that a reader will be distracted ...</p>
                  <Link href={"#"} className=" self-end">
                    <button className="btn-acess">ACESSAR VAGAS &gt;</button></Link>
                </div>


              </article>
              <article className="w-full h-[145px] border border-gray-400 rounded-md p-4 flex items-center">
                <Image
                  src="/assets/gaio_logo.png"
                  alt="marca"
                  width={70}
                  height={100}
                >
                </Image>
                <div className="w-full flex flex-col justify-start ml-4 gap-1">
                  <h2>Desenvolvedor Pleno Full Stack ReactJS</h2>
                  <p className="descrição-vaga-card">It is a long established fact that a reader will be distracted ...</p>
                  <Link href={"#"} className=" self-end">
                    <button className="btn-acess">ACESSAR VAGAS &gt;</button></Link>
                </div>


              </article>






            </div>


            <button className="w-full mt-6 border border-roxo rounded-md p-1 btn-border-purple">
              Veja Mais
            </button>

          </div>

          {/* Card Oportunidades*/}
          <div className="w-[400px] min-h-[500px] p-4   max-lg:w-full">
            <h2 className="text-2xl  mb-2">Oportunidades</h2>
            
            <div className="w-full h-[400px] border border-gray-400 rounded-xl flex flex-col justify-around p-4 pt-5 pb-5">

              {/* Vagas aqui*/}
              <article className="w-full h-[145px] border border-gray-400 rounded-md p-4 flex items-center">
                <Image
                  src="/assets/gaio_logo.png"
                  alt="marca"
                  width={70}
                  height={100}
                >
                </Image>
                <div className="w-full flex flex-col justify-start ml-4 gap-1">
                  <h2>Desenvolvedor Pleno Full Stack ReactJS</h2>
                  <p className="descrição-vaga-card">It is a long established fact that a reader will be distracted ...</p>
                  <Link href={"#"} className=" self-end">
                    <button className="btn-acess">ACESSAR VAGAS &gt;</button></Link>
                </div>


              </article>
              <article className="w-full h-[145px] border border-gray-400 rounded-md p-4 flex items-center ">
                <Image
                  src="/assets/gaio_logo.png"
                  alt="marca"
                  width={70}
                  height={100}
                >
                </Image>
                <div className="w-full flex flex-col justify-start ml-4 gap-1">
                  <h2>Desenvolvedor Pleno Full Stack ReactJS</h2>
                  <p className="descrição-vaga-card">It is a long established fact that a reader will be distracted ...</p>
                  <Link href={"#"} className=" self-end">
                    <button className="btn-acess">ACESSAR VAGAS &gt;</button></Link>
                </div>


              </article>






            </div>


            <button className="w-full mt-6 border border-roxo rounded-md p-1 btn-border-purple">
              Veja Mais
            </button>

          </div>

          {/* Card Eventos*/}
          <div className="w-[400px] min-h-[500px] p-4   max-lg:w-full">
            <h2 className="text-2xl  mb-2">Eventos</h2>
            <div className="w-full h-[400px] border border-gray-400 rounded-xl flex flex-col justify-around p-4 pt-5 pb-5">

              {/* Vagas aqui*/}
              <article className="w-full h-[145px] border border-gray-400 rounded-md p-4 flex items-center">
                <Image
                  src="/assets/gaio_logo.png"
                  alt="marca"
                  width={70}
                  height={100}
                >
                </Image>
                <div className="w-full flex flex-col justify-start ml-4 gap-1">
                  <h2>Desenvolvedor Pleno Full Stack ReactJS</h2>
                  <p className="descrição-vaga-card">It is a long established fact that a reader will be distracted ...</p>
                  <Link href={"#"} className=" self-end">
                    <button className="btn-acess">ACESSAR VAGAS &gt;</button></Link>
                </div>


              </article>
              <article className="w-full h-[145px] border border-gray-400 rounded-md p-4 flex items-center">
                <Image
                  src="/assets/gaio_logo.png"
                  alt="marca"
                  width={70}
                  height={100}
                >
                </Image>
                <div className="w-full flex flex-col justify-start ml-4 gap-1">
                  <h2>Desenvolvedor Pleno Full Stack ReactJS</h2>
                  <p className="descrição-vaga-card">It is a long established fact that a reader will be distracted ...</p>
                  <Link href={"#"} className=" self-end">
                    <button className="btn-acess">ACESSAR VAGAS &gt;</button></Link>
                </div>


              </article>






            </div>


            <button className="w-full mt-6 border border-roxo rounded-md p-1 btn-border-purple">
              Veja Mais
            </button>

          </div>

        </div>

      </section>

      {/* Cards Vagas*/}
      <section className="flex  flex-col  p-8 gap-8  w-full min-h-screen">
        <div className="flex  flex-col justify-start">
          <h2 className="text-3xl font-bold mb-2 ">Vagas</h2>
          <p className="text-gray-500">últimas vagas  postadas</p>


        </div>
        <div className="w-full gap-8 grid grid-cols-2 max-xl:grid-cols-1">






          {/* Vagas 1*/}

          <article className="w-full min-h-[245px] border border-gray-400 rounded-md p-4 pb-0 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>








          {/* Vagas 2*/}

          <article className="w-full min-h-[245px] border border-gray-400 rounded-md p-4 pb-2 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>







          {/* Vagas 3*/}

          <article className="w-full min-h-[245px]  border border-gray-400 rounded-md p-4 pb-2 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>

          {/* Vagas 4*/}

          <article className="w-full min-h-[245px]  border border-gray-400 rounded-md p-4 pb-2 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>


        </div>

      </section>
      <section className="flex bg-[#8118E2] flex-col justify-center items-center  p-8 gap-8  w-full min-h-[400px] text-white">
        <h2 className="text-4xl font-bold">Faça um teste de perfil </h2>
        <p className="text-xl font-medium">comportamental e tenha altas chances de ter uma oportunidade</p>
        <button className="border border-white w-[600px] p-2 rounded-md text-xl">
        Acessar teste
        </button>
    

      </section>
    
        {/*Eventos*/}
        <section className="flex  flex-col  p-8 gap-8  w-full min-h-screen">
        <div className="flex  flex-col justify-start">
          <h2 className="text-3xl font-bold mb-2 ">Eventos</h2>
          <p className="text-gray-500">últimos eventos  postados</p>

        </div>
        <div className="w-full gap-8 grid grid-cols-1 ">






          {/* Vagas 1*/}

          <article className="w-full min-h-[245px] border border-gray-400 rounded-md p-4 pb-0 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>








          {/* Vagas 2*/}

          <article className="w-full min-h-[245px] border border-gray-400 rounded-md p-4 pb-2 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>







          {/* Vagas 3*/}

          <article className="w-full min-h-[245px]  border border-gray-400 rounded-md p-4 pb-2 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>

          {/* Vagas 4*/}

          <article className="w-full min-h-[245px]  border border-gray-400 rounded-md p-4 pb-2 flex items-center">
            <Image
              src="/assets/gaio_logo.png"
              alt="marca"
              width={200}
              height={100}
            >
            </Image>
            <div className="w-full flex flex-col justify-start ml-4 gap-2">
              <h2 className="text-3xl max-md:text-md text-gray-800">Desenvolvedor Pleno Full Stack ReactJS</h2>
              <span className="text-gray-500">GAIO</span>
              <p className="descrição-vaga-card-extend max-md:text-sm">It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.....</p>
              <div className="w-full flex justify-between items-center">

                <div className="p-2 flex gap-3 items-center">
                  <p>
                    Tags:

                  </p>
                  <Link href={"#"} >
                    <button className="tag">STARTUP</button></Link></div>
                <Link href={"#"} >
                  <button className="btn-acess-extend">ACESSAR VAGAS &gt;</button></Link>
              </div>
            </div>


          </article>


        </div>

      </section>

    </main>
  );
}
