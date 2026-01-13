import { useState } from "react";
import NewRelease from "./components/NewRelease";
import ReleaseList from "./components/ReleaseList";
import SelectedRelease from "./components/SelectedRelease";
import Hero from "./components/Hero";

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
        category: releaseData.categorie,
        description: releaseData.description,
        status: releaseData.status,
      };
      return {
        ...prevState,
        releaseStateId: undefined,
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
        releaseStateId: id,
      };
    });
  }

  function handleGoToreleases() {
    setReleaseState((prevState) => {
      return {
        ...prevState,
        releaseStateId: null,
      };
    });
  }

  const selectedRelease = releaseState.releases.find(
    (release) => release.id === releaseState.releaseStateId
  );

  let content = <SelectedRelease releases={selectedRelease} />;

  if (releaseState.releaseStateId === undefined) {
    content = <Hero onAddNewReleases={handleGoToreleases} />;
  } else if (releaseState.releaseStateId === null) {
    content = (
      <>
        <ReleaseList
          onSelect={handleSelectRelease}
          releases={releaseState.releases}
        />
        <NewRelease newReleases={handleNewRelease} />
      </>
    );
  }
  return <>{content}</>;
}

export default App;
