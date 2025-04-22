import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-1/4 min-w-1/4 bg-[#2D2D44] p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8 text-[#4FD1C5]">Menu</h2>
        <nav className="space-y-4">
          <Link to="/" className="block p-3 rounded-lg hover:bg-[#4C4C6D] transition">Dashboard</Link>
          <Link to='/produtos' className="block p-3 rounded-lg hover:bg-[#4C4C6D] transition">Produtos</Link>
          <Link to='/pedidos' className="block p-3 rounded-lg hover:bg-[#4C4C6D] transition">Pedidos</Link>
          <Link to='estoque' className="block p-3 rounded-lg hover:bg-[#4C4C6D] transition">Estoque</Link>
        </nav>
      </div>
      <div>
        <button className="w-full py-2 mt-6 bg-[#4FD1C5] text-[#1E1E2F] font-semibold rounded-lg hover:opacity-90 transition">Sair</button>
      </div>
    </aside>
  );
}