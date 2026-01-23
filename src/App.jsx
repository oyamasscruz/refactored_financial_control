import { useState } from "react";
import NewRelease from "./components/NewRelease";
import ReleaseList from "./components/ReleaseList";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  const [releaseState, setReleaseState] = useState({
    releaseStateId: undefined,
    releases: [],
    // status:[],
  });

  function handleNewRelease(releaseData) {
    setReleaseState((prevState) => {
      const newRelease = {
        id: Math.random(),
        value: releaseData.value,
        date: releaseData.date,
        type: releaseData.type,
        category: releaseData.category,
        description: releaseData.description,
        status: releaseData.status,
      };
      return {
        ...prevState,
        releaseStateId: null,
        releases: [...prevState.releases, newRelease],
      };
    });
  }
  console.log(releaseState.releases);
  console.log(releaseState);

  function handleSelectRelease(id) {
    setReleaseState((prevState) => {
      return {
        ...prevState,
        releaseStateId: prevState.releaseStateId === id ? null : id,
      };
    });
  }

  function cancelSelectedRelease() {
    setReleaseState((prevState) => {
      return {
        ...prevState,
        releaseStateId: null,
      };
    });
  }

  // const selectedRelease = releaseState.releases.find(
  //   (release) => release.id === releaseState.releaseStateId
  // );

  const sumofDespesas = releaseState.releases.reduce((total, release) => {
    if (release.type === "custos" && release.status === "pago") {
      return total + Number(release.value);
    }
    return total;
  }, 0);

  const sumofDespesasNotPayed = releaseState.releases.reduce(
    (total, release) => {
      if (release.type === "custos" && release.status === "naoPago") {
        return total + Number(release.value);
      }
      return total;
    },
    0,
  );

  const sumofReceitas = releaseState.releases.reduce((total, release) => {
    if (release.type === "receitas" && release.status === "pago") {
      return total + Number(release.value);
    }
    return total;
  }, 0);

  const sumofReceitasNotReceived = releaseState.releases.reduce(
    (total, release) => {
      if (release.type === "receitas" && release.status === "naoPago") {
        return total + Number(release.value);
      }
      return total;
    },
    0,
  );

  function handleDeleteRelease(id) {
    setReleaseState((prevState) => {
      return {
        ...prevState,
        releases: prevState.releases.filter((release) => release.id !== id),
        releaseStateId:
          prevState.releaseStateId === id ? null : releaseState.releaseStateId,
      };
    });
  }

  let content;

  if (releaseState.releaseStateId === undefined) {
    content = <Hero onAddNewReleases={cancelSelectedRelease} />;
  } else {
    content = (
      <div className="bg-perola w-screen h-screen">
        <NewRelease newReleases={handleNewRelease} />
        <ReleaseList
          onSelect={handleSelectRelease}
          releases={releaseState.releases}
          selectedId={releaseState.releaseStateId}
          onDespesas={sumofDespesas}
          onReceitas={sumofReceitas}
          onReceitasNaoRecebidas={sumofReceitasNotReceived}
          onDespesasNaoPagas={sumofDespesasNotPayed}
          onDelete={handleDeleteRelease}
        />
      </div>
    );
  }
  return (
    <div className="bg-perola min-h-screen w-screen">
      <Header />
      <main className="flex flex-col mt-30 ml-20 ">{content}</main>
    </div>
  );
}

export default App;
