import { useRef, useState } from "react";

export default function NewRelease({ newReleases }) {
  const [selectType, setSelectType] = useState("");
  const valueRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const categoryRef = useRef();

  function handleSelectType(event) {
    setSelectType(event.target.value);
  }

  let content;
  if (selectType === "custos") {
    content = (
      <div className="flex flex-col gap-1">
        <label>Custos</label>
        <select
          className="w-full border-azulMarinho border-2 rounded-md py-1 px-4"
          ref={categoryRef}
        >
          <option value="aluguel">Aluguel</option>
          <option value="condominio">Condomínio</option>
          <option value="energia">Energia</option>
          <option value="agua">Água</option>
          <option value="gas">Gás</option>
          <option value="internet">Internet</option>
          <option value="supermercado">Supermercado</option>
          <option value="alimentação">Alimentação</option>
          <option value="combustivel">Combustível</option>
          <option value="transporte">Transporte Público</option>
          <option value="educacao">Educação</option>
          <option value="lazer">Lazer</option>
          <option value="emprestimos">Empréstimos</option>
          <option value="outros">Outros</option>
        </select>
      </div>
    );
  } else if (selectType === "receitas") {
    content = (
      <div className="flex flex-col gap-1">
        <label>Receitas</label>
        <select
          className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
          ref={categoryRef}
        >
          <option value="salario">Salário</option>
          <option value="comissao">Comissão</option>
          <option value="freelance">Freelances</option>
          <option value="aluguel">Aluguel</option>
          <option value="outros">Outros</option>
        </select>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const releaseData = {
      value: valueRef.current.value,
      date: dateRef.current.value,
      description: descriptionRef.current.value,
      status: statusRef.current.value,
      category: categoryRef.current.value,
      type: selectType,
    };
    newReleases(releaseData);
  }

  return (
    <div className="w-2/3 bg-perola text-gray-950">
      <h2 className="uppercase text-2xl">Meus Lançamentos</h2>
      <p>Vamos adicionar algumas despesas e receitas</p>
      <p>Insira os dados abaixo</p>
      <div className="grid grid-cols-3 gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label>Valor</label>
          <input
            className="w-full border-azulMarinho border-2 rounded-md py-1 px-4"
            ref={valueRef}
            type="number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Data</label>
          <input
            className="w-full border-azulMarinho border-2 rounded-md py-1 px-4"
            ref={dateRef}
            type="date"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Tipo</label>
          <select
            value={selectType}
            onChange={handleSelectType}
            className="w-full border-azulMarinho border-2 rounded-md py-1 px-4"
          >
            <option value="" disabled>
              Selecione o Tipo de despesa
            </option>
            <option value="receitas">Receitas</option>
            <option value="custos">Custos</option>
          </select>
        </div>
        {content}
        <div className="flex flex-col gap-1">
          <label>Descrição</label>
          <input
            className="w-full border-azulMarinho border-2 rounded-md py-1 px-4"
            ref={descriptionRef}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Status</label>
          <select
            ref={statusRef}
            className="w-full border-azulMarinho border-2 rounded-md py-1 px-4"
          >
            <option value="" disabled>
              Selecione o status do lançamento
            </option>
            <option value="pago">Pago</option>
            <option value="naoPago">Não Pago</option>
          </select>
        </div>
        <div>
          <button
            className="mt-10 bg-azulMarinho rounded-md py-2 px-4 w-40 cursor-pointer text-cinzaClaro hover:bg-azulMarinho/40 transition hover:text-azulMarinho font-bold"
            onClick={handleSubmit}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}
