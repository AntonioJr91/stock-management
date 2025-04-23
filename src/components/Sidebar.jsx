import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/products", label: "Adicionar Produtos" },
  { to: "/orders", label: "Adicionar Pedidos" },
  { to: "/stock", label: "Ver Estoque" },
  { to: "/orderlist", label: "Ver Perdidos" },
]

export default function Sidebar() {
  return (
    <aside className="w-1/4 min-w-1/4 bg-[#2D2D44] p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8 text-[#7AA2F7]">Menu</h2>
        <nav className="space-y-4">
          {links.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) =>
                `block p-3 rounded-lg transition ${isActive ? "bg-[#3B4B82] text-white font-semibold" : "hover:bg-[#4C4C6D]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <button className="w-full bg-[#3B4B82] text-[#E0E0E0] font-medium py-2 rounded-md hover:bg-[#4B5CA8] transition hover:cursor-pointer">Sair</button>
      </div>
    </aside>
  );
}
