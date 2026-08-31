import { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-right">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Menú
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
  <a href="#faq" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:scale-105 transition text-center">
    asdasdasd
  </a>
  <a href="#perfil" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Perfil</a>
  <a href="#configuracion" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Configuración</a>
  <a href="#salir" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Cerrar sesión</a>
</div>
      )}
    </div>
  );
}