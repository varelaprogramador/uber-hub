"use client";
import { useState } from 'react';

import {Vaga} from "../../../utils/Vaga";

interface SearchBarVagasProps {
  vagas: Vaga[];
  onFilteredVagas: (filteredVagas: Vaga[]) => void;
}

export default function SearchBarVagas({ vagas, onFilteredVagas }: SearchBarVagasProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredVagas = vagas.filter(
      (vaga) =>
        vaga.title.toLowerCase().includes(term) ||
        vaga.description.toLowerCase().includes(term)
    );

    onFilteredVagas(filteredVagas);
  };

  return (
    <div className="w-full mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Pesquisar vagas..."
        className="w-full p-3 border rounded-lg text-gray-700"
      />
    </div>
  );
}
