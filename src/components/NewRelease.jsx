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
      <>
        <label>Custos</label>
        <select ref={categoryRef}>
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
      </>
    );
  } else if (selectType === "receitas") {
    content = (
      <>
        <label>Receitas</label>
        <select ref={categoryRef}>
          <option value="salario">Salário</option>
          <option value="comissao">Comissão</option>
          <option value="freelance">Freelances</option>
          <option value="aluguel">Aluguel</option>
          <option value="outros">Outros</option>
        </select>
      </>
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
    <div className="w-1/3 bg-black text-white">
      <h2 className="uppercase">Your Releases</h2>
      <p>lets add some releases for control you finances</p>
      <p>Please insert</p>
      <div className="flex flex-col">
        <label>Valor</label>
        <input ref={valueRef} type="number" />
        <label>Data</label>
        <input ref={dateRef} type="date" />
        <label>Tipo</label>
        <select value={selectType} onChange={handleSelectType}>
          <option value="" disabled>
            Selecione o Tipo de despesa
          </option>
          <option value="receitas">Receitas</option>
          <option value="custos">Custos</option>
        </select>
        {content}
        <label>Descrição</label>
        <input ref={descriptionRef} type="text" />
        <label>Status</label>
        <select ref={statusRef}>
          <option value="" disabled>
            Selecione o status do lançamento
          </option>
          <option value="pago">Pago</option>
          <option value="naoPago">Não Pago</option>
        </select>
        <button
          className="bg-stone-400 rounded-md py-2 px-4 w-40 cursor-pointer hover:bg-stone-500"
          onClick={handleSubmit}
        >
          Add+
        </button>
      </div>
    </div>
  );
}
