import { useState } from "react";
import { NavLink } from "react-router-dom";
import { clearLocalStorage } from "../service/localStorageService";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/products", label: "Adicionar Produtos" },
  { to: "/orders", label: "Adicionar Pedidos" },
  { to: "/stock", label: "Ver Estoque" },
  { to: "/orderlist", label: "Ver Pedidos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClearAllData = () => {
    const confirm = window.confirm("ATENÇÃO! Deseja limpar todos os dados da aplicação?");
    if (!confirm) return;
    clearLocalStorage();
    window.location.reload(true);
    window.location = ('/')
  };

  const NavContent = () => (
    <>
      <h2 className="text-2xl font-bold mb-8 text-[#7AA2F7]">Menu</h2>
      <nav className="my-5 space-y-4">
        {links.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition ${isActive ? "bg-[#3B4B82] text-white font-semibold" : "hover:bg-[#4C4C6D]"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <button
        className="w-full bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-red-500 hover:text-black hover:font-bold active:translate-y-0.5 active:shadow-sm transition duration-150 ease-in-out hover:cursor-pointer"
        onClick={() => { handleClearAllData() }}
      >
        Limpar todos os dados
      </button>
    </>
  );

  return (
    <>

      {/* Sidebar normal (desktop) */}
      <aside className="hidden md:flex flex-col w-1/4 h-screen bg-[#2D2D44] p-6">
        <NavContent />
      </aside>

      {/* Mobile Nav - botão hamburguer */}
      <div className="absolute right-0 mr-5 mt-2 text-xl sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="rotate-90">
          |||
        </button>
      </div>


      {/* Menu mobile (drawer simples) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#2D2D44] px-6 py-3 overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">&times;</button>
          </div>
          <NavContent />
        </div>
      )}
    </>
  );
}
