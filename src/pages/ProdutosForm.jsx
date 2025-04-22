export default function ProdutosForm () {

  return (
    <div className="w-full max-w-xl mx-auto bg-[#1E1E2F] p-8 rounded-xl flex flex-col justify-center">
    <h2 className="text-xl font-semibold mb-6 text-[#4FD1C5]">Cadastrar Produto</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm mb-1 text-[#A0A0B0]">Nome do Produto</label>
        <input
          type="text"
          name="nome"
          className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
        />
      </div>
      <div>
        <label className="block text-sm mb-1 text-[#A0A0B0]">Preço</label>
        <input
          type="number"
          step="0.01"
          name="preco"
          className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
        />
      </div>
      <div>
        <label className="block text-sm mb-1 text-[#A0A0B0]">Quantidade</label>
        <input
          type="number"
          name="quantidade"
          className="w-full bg-[#252537] border border-transparent focus:border-[#4FD1C5] text-[#E0E0E0] rounded-md px-4 py-2 transition"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#4FD1C5] text-[#1E1E2F] font-medium py-2 rounded-md hover:opacity-90 transition"
      >
        Cadastrar
      </button>
    </form>
  </div>
  );
};