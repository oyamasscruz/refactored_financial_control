export default function Header() {
  return (
    <header className="flex bg-azulMarinho px-10 py-15 justify-between">
      <div>
        <h1 className="text-cinzaClaro font-bold uppercase text-3xl">
          Controle Financeiro
        </h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <button className="cursor-pointer text-cinzaClaro hover:text-areia transition uppercase">
              Dashboard
            </button>
          </li>
          <li>
            <button className="cursor-pointer text-cinzaClaro hover:text-areia transition uppercase">
              Lançamentos
            </button>
          </li>
          <li>
            <button className="cursor-pointer text-cinzaClaro hover:text-areia transition uppercase">
              Relatórios
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
