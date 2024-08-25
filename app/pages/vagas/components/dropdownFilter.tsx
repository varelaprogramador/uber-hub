"use client";
import { useState } from 'react';

interface DropdownFilterProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

export default function DropdownFilter({ label, options, selectedOptions, onChange }: DropdownFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative flex text-left justify-center ">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute mt-16 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[50] max-md:w-[50vh]">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <label key={option} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-600"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          <button
            onClick={toggleDropdown}
            className="w-full px-4 py-2 text-sm text-center text-purple-500 bg-gray-100 hover:bg-gray-200"
          >
            Concluído
          </button>
        </div>
      )}
    </div>
  );
}
