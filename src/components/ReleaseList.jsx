export default function ReleaseList({
  releases,
  onSelect,
  selectedId,
  onDespesas,
  onReceitas,
  onDelete,
  onReceitasNaoRecebidas,
  onDespesasNaoPagas,
}) {
  return (
    <div className="w-[85rem] mt-10">
      <h2 className="mb-10 uppercase text-xl text-azulMarinho font-extrabold">
        Releases
      </h2>
      <div className="flex justify-between">
        <div className="flex flex-col items-center text-center bg-azulMarinho h-20 w-auto px-5 rounded-md mb-10 text-cinzaClaro font-bold">
          <h2>Contas Pagas</h2>
          <div className="px-5 bg-azulClaro h-10 w-auto flex flex-col rounded-md justify-center text-black">
            <p className="">R$ {onDespesas}</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center bg-azulMarinho h-20 w-auto px-5 rounded-md mb-10 text-cinzaClaro font-bold">
          <h2>Valores à Pagar</h2>
          <div className="px-5 bg-azulClaro h-10 w-auto flex flex-col rounded-md justify-center text-black">
            <p className="">R$ {onDespesasNaoPagas}</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center bg-azulMarinho h-20 w-auto px-5 rounded-md mb-10 text-cinzaClaro font-bold">
          <h2>Valores à Receber</h2>
          <div className="px-5 bg-azulClaro h-10 w-auto flex flex-col rounded-md justify-center text-black">
            <p className="">R$ {onReceitasNaoRecebidas}</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center bg-azulMarinho h-20 w-auto px-5 rounded-md mb-10 text-cinzaClaro font-bold">
          <h2>Valores Recebidos</h2>
          <div className="px-5 bg-azulClaro h-10 w-auto flex flex-col rounded-md justify-center text-black">
            <p className="">R$ {onReceitas}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[120px_1fr_120px_160px_120px] items-center gap-2 bg-azulMarinho w-full py-2 px-4 rounded-md font-bold mb-3 text-white">
        <h3>Date</h3>
        <h3 className="text-center">Description</h3>
        <h3 className="text-center">Valor (R$)</h3>
      </div>
      <div>
        <ul className="flex flex-col w-full gap-2">
          {releases.map((release) => (
            <li key={release.id} className="">
              <div className="grid grid-cols-[120px_1fr_120px_160px_120px] items-center gap-2 bg-algodaoEgipcio w-full py-2 px-4 rounded-md">
                <div>
                  <p>{release.date}</p>
                </div>
                <div>
                  <h3 className="uppercase text-center">
                    {release.description}
                  </h3>
                </div>
                <div className="text-center">
                  <p>{release.value}</p>
                </div>
                <div>
                  <button
                    onClick={() => onSelect(release.id)}
                    className="bg-dourado text-white px-2 py-2 rounded-md hover:bg-areia"
                  >
                    Mostrar Detalhes
                  </button>
                </div>
                <button
                  onClick={() => onDelete(release.id)}
                  className="bg-dourado hover:bg-red-800  text-white px-2 py-2 rounded-md"
                >
                  Deletar
                </button>
                {release.id === selectedId && (
                  <>
                    <p>{release.type}</p>
                    <p>{release.category}</p>
                    <p>{release.status}</p>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
