"use client";
import { useState } from 'react';
import VagaItem from '../../utils/vagasStruct';
import SearchBarVagas from './components/searchBar';
import DropdownFilter from './components/dropdownFilter';

export default function Vagas() {
  const vagas = [
    {
      title: 'Desenvolvedor Pleno Full Stack ReactJS',
      company: 'Sankhya',
      description: 'Você é apaixonado por cibersegurança e está em busca de um novo desafio? A Sankhya, uma líder no setor de tecnologia e inovação, está em busca de um Analista de Segurança da Informação...',
      tags: ['ReactJS', 'Full Stack'],
      datePosted: new Date(2024, 6, 7),
      dateExpiration: new Date(2024, 6, 7),
      imageUrl: undefined,
      link: '/vaga/desenvolvedor-pleno-full-stack-reactjs',
      tipo: 'Tempo Integral',
      experiencia: 'pleno',
      salario: '+ de R$3500,00',
      modalidade: 'Híbrido',
    },
    {
      title: 'Desenvolvedor Pleno Full Stack ReactJS',
      company: 'Sankhya',
      description: 'Você é apaixonado por cibersegurança e está em busca de um novo desafio? A Sankhya, uma líder no setor de tecnologia e inovação, está em busca de um Analista de Segurança da Informação...',
      tags: ['ReactJS', 'Full Stack'],
      datePosted: new Date(2024, 6, 7),
      dateExpiration: new Date(2024, 6, 7),
      imageUrl: undefined,
      link: '/vaga/desenvolvedor-pleno-full-stack-reactjs',
      tipo: 'Tempo Integral',
      experiencia: 'pleno',
      salario: '+ de R$3500,00',
      modalidade: 'Híbrido',
    },
    {
      title: 'Desenvolvedor Pleno Full Stack ReactJS',
      company: 'Sankhya',
      description: 'Você é apaixonado por cibersegurança e está em busca de um novo desafio? A Sankhya, uma líder no setor de tecnologia e inovação, está em busca de um Analista de Segurança da Informação...',
      tags: ['ReactJS', 'Full Stack'],
      datePosted: new Date(2024, 6, 7),
      dateExpiration: new Date(2024, 6, 7),
      imageUrl: undefined,
      link: '/vaga/desenvolvedor-pleno-full-stack-reactjs',
      tipo: 'Tempo Integral',
      experiencia: 'pleno',
      salario: '+ de R$3500,00',
      modalidade: 'Híbrido',
    },
    {
      title: 'Desenvolvedor Pleno Full Stack ReactJS',
      company: 'Sankhya',
      description: 'Você é apaixonado por cibersegurança e está em busca de um novo desafio? A Sankhya, uma líder no setor de tecnologia e inovação, está em busca de um Analista de Segurança da Informação...',
      tags: ['ReactJS', 'Full Stack'],
      datePosted: new Date(2024, 6, 7),
      dateExpiration: new Date(2024, 6, 7),
      imageUrl: undefined,
      link: '/vaga/desenvolvedor-pleno-full-stack-reactjs',
      tipo: 'Tempo Integral',
      experiencia: 'pleno',
      salario: '+ de R$3500,00',
      modalidade: 'Híbrido',
    },
    // Outras vagas...
  ];

  const [filteredVagas, setFilteredVagas] = useState(vagas);

  const [empresa, setEmpresa] = useState<string[]>([]);
  const [tipoVaga, setTipoVaga] = useState<string[]>([]);
  const [experiencia, setExperiencia] = useState<string[]>([]);
  const [salario, setSalario] = useState<string[]>([]);
  const [modalidade, setModalidade] = useState<string[]>([]);

  const filterVagas = () => {
    let updatedVagas = vagas;

    if (empresa.length > 0) {
      updatedVagas = updatedVagas.filter((vaga) => empresa.includes(vaga.company));
    }
    if (tipoVaga.length > 0) {
      updatedVagas = updatedVagas.filter((vaga) => tipoVaga.includes(vaga.tipo));
    }
    if (experiencia.length > 0) {
      updatedVagas = updatedVagas.filter((vaga) => experiencia.includes(vaga.experiencia));
    }
    if (salario.length > 0) {
      updatedVagas = updatedVagas.filter((vaga) => salario.includes(vaga.salario));
    }
    if (modalidade.length > 0) {
      updatedVagas = updatedVagas.filter((vaga) => modalidade.includes(vaga.modalidade));
    }

    setFilteredVagas(updatedVagas);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8 gap-8 bg-white">
      <div className="w-full ">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Vagas & Oportunidades de Inovação</h1>
        <SearchBarVagas vagas={vagas} onFilteredVagas={setFilteredVagas} />
        {/* Dropdown Filters */}
        <div className="flex gap-4 mb-6 max-md:flex-col">
          <DropdownFilter
            label="Empresa"
            options={['Sankhya', 'Algar Telecom', 'Microsoft', 'Cargill']}
            selectedOptions={empresa}
            onChange={(selected) => {
              setEmpresa(selected);
              filterVagas();
            }}
          />
          <DropdownFilter
            label="Tipo De Vaga"
            options={['Temporário', 'Tempo Integral', 'Meio período', 'Contrato']}
            selectedOptions={tipoVaga}
            onChange={(selected) => {
              setTipoVaga(selected);
              filterVagas();
            }}
          />
          <DropdownFilter
            label="Nível De Experiência"
            options={['Assistente', 'Júnior', 'Pleno-Sênior', 'Diretor']}
            selectedOptions={experiencia}
            onChange={(selected) => {
              setExperiencia(selected);
              filterVagas();
            }}
          />
          <DropdownFilter
            label="Salário"
            options={['+ de R$1500,00', '+ de R$2500,00', '+ de R$3500,00', '+ de R$5000,00']}
            selectedOptions={salario}
            onChange={(selected) => {
              setSalario(selected);
              filterVagas();
            }}
          />
          <DropdownFilter
            label="Modalidade"
            options={['Presencial', 'Híbrido', 'Remoto']}
            selectedOptions={modalidade}
            onChange={(selected) => {
              setModalidade(selected);
              filterVagas();
            }}
          />
        </div>

        {/* Renderizar Vagas Filtradas */}
        {filteredVagas.length > 0 ? (
          filteredVagas.map((vaga, index) => (
            <VagaItem
              key={index}
              title={vaga.title}
              company={vaga.company}
              description={vaga.description}
              tags={vaga.tags}
              datePosted={vaga.datePosted}
              dateExpiration={vaga.dateExpiration}
              imageUrl={vaga.imageUrl}
              link={vaga.link}
            />
          ))
        ) : (
          <p className="text-gray-500">Nenhuma vaga encontrada.</p>
        )}
      </div>
    </main>
  );
}
