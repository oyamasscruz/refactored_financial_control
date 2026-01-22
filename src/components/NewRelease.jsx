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
      <div>
        <label>Custos</label>
        <select
          className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
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
          <option value="trasnporte">Transporte Público</option>
          <option value="educacao">Educação</option>
          <option value="lazer">Lazer</option>
          <option value="emprestimos">Empréstimos</option>
          <option value="outros">Outros</option>
        </select>
      </div>
    );
  } else if (selectType === "receitas") {
    content = (
      <div>
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
    <div className="w-1/3 bg-perola text-gray-950">
      <h2 className="uppercase text-2xl">Your Releases</h2>
      <p>lets add some releases for control you finances</p>
      <p>Please insert data bellow</p>
      <div className="flex justify-between ">
        <div>
          <label>Valor</label>
          <input
            className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
            ref={valueRef}
            type="number"
          />
        </div>
        <div>
          <label>Data</label>
          <input
            className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
            ref={dateRef}
            type="date"
          />
        </div>
        <div>
          <label>Tipo</label>
          <select
            value={selectType}
            onChange={handleSelectType}
            className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
          >
            <option value="" disabled>
              Selecione o Tipo de despesa
            </option>
            <option value="receitas">Receitas</option>
            <option value="custos">Custos</option>
          </select>
        </div>
        {content}
        <div>
          <label>Descrição</label>
          <input
            className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
            ref={descriptionRef}
            type="text"
          />
        </div>
        <div>
          <label>Status</label>
          <select
            ref={statusRef}
            className="border-azulMarinho focus:bg-cinza/10 border-2 rounded-md py-1 px-4"
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
