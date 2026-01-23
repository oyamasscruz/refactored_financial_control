export default function Hero({ onAddNewReleases }) {
  return (
    <section>
      <h2>Personal finance</h2>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          ipsum repudiandae distinctio ad voluptatibus, sequi accusantium
          quaerat minima iste facere deserunt omnis unde. Adipisci similique
          vitae ipsum recusandae corporis saepe?
          {/* Esse projeto, foi pensado em uma solução prática para aqueles que
          buscam aprimorar, otimizar as ausas finanças pessoas, quiçá as das sua
          empresa também. */}
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
          unde! Consequatur libero corporis neque tempora ex ad saepe illum
          recusandae? Blanditiis hic ipsam minima ratione distinctio modi libero
          veritatis porro.
          {/* Aproveitei que todo o brasileiro, tenta ter uma versão desse projeto,
          contudo feito em uma planilha no seu computador. Creio que para ficar
          mais visível e mais didático resolvi reformular o meu primeiro projeto
          de controle financeiro, onde era apenas um local de inclusão de dados
          e nada além disso. */}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab asperiores
          molestiae repudiandae facilis sequi earum laboriosam. Reprehenderit
          unde cumque sint alias possimus natus quis modi. Deserunt
          reprehenderit quam consequuntur. Fugit!
          {/* Espero que esse site seja útil para você que está abrindo agora, ou
          que apenas sirva de inspiração para outras pessoas. */}
        </p>
      </div>
      <div>
        <h3>Quem é o Oyama:</h3>
        <p>
          {/* Sou um empreendedor, que passou por algumas vitórias e infelizmente
          algumas derrotas também afinal, ninguém vive só de vitórias ou
          derrotas. Aprendi com erros, me reergui, lutei contra dificuldades,
          mas principlamente nas dificuldades não me escondi, não desisti, */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          repudiandae! Modi cum accusantium commodi optio labore eum eaque
          voluptatum, veniam, et adipisci atque dolores itaque earum fugit eos
          error beatae. procurei um melhor caminho do que era antes.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error
          accusamus natus ratione! Aperiam ad architecto commodi rem quos?
          Deserunt distinctio earum obcaecati saepe laborum atque odio tempore
          dolorum quis?
          {/* Atualmente eu utilizando React, para desenvolver esse tipo de projeto.
          minhas principais habilidades na programação está no JavaScript e no
          React. */}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore
          accusantium laboriosam similique aut unde voluptas vero quas totam
          dolor fugiat ut repellendus a quod iusto distinctio doloremque atque
          esse.
          {/* Caso queiram ver outros projetos por mim feitos, analisem o meu gitub
          e os meus projetos abaixo: */}
        </p>
      </div>
      <button
        onClick={onAddNewReleases}
        className="mt-10 py-2 px-4 bg-azulMarinho rounded-md text-cinzaClaro hover:bg-azulMarinho/40 transition hover:text-azulMarinho cursor-pointer"
      >
        Criar Lançamentos
      </button>
    </section>
  );
}
