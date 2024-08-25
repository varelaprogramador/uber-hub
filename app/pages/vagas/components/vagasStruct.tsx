import Image from 'next/image';


interface VagaProps {
  title: string;
  company: string;
  description: string;
  tags: string[];
  datePosted: Date;
  dateExpiration: Date;
  imageUrl: string | undefined;
  link: string;
  tipo: string,
  experiencia: string,
  salario: string,
  modalidade: string
}

export default function VagaItem({ title, company, description, tags, datePosted, dateExpiration, imageUrl, link }: VagaProps) {
  // Formatar a data
  const formattedDatePs = datePosted.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const formattedDateEx = dateExpiration.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="flex border rounded-lg shadow-lg p-4 mb-4 max-xl:w-full max-w-[1550px]">
      <div className="flex-shrink-0">
        <Image src={imageUrl == undefined ? "/assets/sem-foto.gif" : imageUrl} alt={company} width={200} height={80} className="rounded" />
      </div>
      <div className="flex-grow ml-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">{company}</p>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="flex mt-4 space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-purple-500 text-white text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Publicado em {formattedDatePs} - Expira em {formattedDateEx}</p>
      </div>
      <div className="flex items-end">
        <a href={link} className="text-purple-500 font-semibold hover:underline">
          ACESSAR VAGA &gt;
        </a>
      </div>
    </div>
  );
}
