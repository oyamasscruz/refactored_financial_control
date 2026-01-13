export default function Hero({ onAddNewReleases }) {
  return (
    <section>
      <h2>Personal finance</h2>
      <div>
        <p>
          Esse projeto, foi pensado em uma solução prática para aqueles que
          buscam aprimorar, otimizar as ausas finanças pessoas, quiçá as das sua
          empresa também.
        </p>
        <p>
          Aproveitei que todo o brasileiro, tenta ter uma versão desse projeto,
          contudo feito em uma planilha no seu computador. Creio que para ficar
          mais visível e mais didático resolvi reformular o meu primeiro projeto
          de controle financeiro, onde era apenas um local de inclusão de dados
          e nada além disso.
        </p>
        <p>
          Espero que esse site seja útil para você que está abrindo agora, ou
          que apenas sirva de inspiração para outras pessoas.
        </p>
      </div>
      <div>
        <h3>Quem é o Oyama:</h3>
        <p>
          Sou um empreendedor, que passou por algumas vitórias e infelizmente
          algumas derrotas também afinal, ninguém vive só de vitórias ou
          derrotas. Aprendi com erros, me reergui, lutei contra dificuldades,
          mas principlamente nas dificuldades não me escondi, não desisti,
          procurei um melhor caminho do que era antes.
        </p>
        <p>
          Atualmente eu utilizando React, para desenvolver esse tipo de projeto.
          minhas principais habilidades na programação está no JavaScript e no
          React.
        </p>
        <p>
          Caso queiram ver outros projetos por mim feitos, analisem o meu gitub
          e os meus projetos abaixo:
        </p>
      </div>
      <button
        onClick={onAddNewReleases}
        className="py-2 px-4 bg-green-950 rounded-md text-amber-50"
      >
        Criar Lançamentos
      </button>
    </section>
  );
}
