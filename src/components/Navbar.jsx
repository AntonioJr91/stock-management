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
    window.location.reload();
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
              `block p-3 rounded-lg transition ${
                isActive ? "bg-[#3B4B82] text-white font-semibold" : "hover:bg-[#4C4C6D]"
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
        onClick={() => {
          handleClearAllData();
          setIsOpen(false);
        }}
      >
        Limpar todos os dados
      </button>
    </>
  );

  return (
    <>
      {/* Mobile Nav - botão hamburguer */}
      <div className="md:hidden p-4 bg-[#2D2D44] flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#7AA2F7]">Menu</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="space-y-1.5">
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Sidebar normal (desktop) */}
      <aside className="hidden md:flex flex-col w-1/4 h-screen bg-[#2D2D44] p-6">
        <NavContent />
      </aside>

      {/* Menu mobile (drawer simples) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#2D2D44] p-6 overflow-y-auto">
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">&times;</button>
          </div>
          <NavContent />
        </div>
      )}
    </>
  );
}
