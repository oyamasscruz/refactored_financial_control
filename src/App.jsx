import { useState } from "react";
import NewRelease from "./components/NewRelease";
import ReleaseList from "./components/ReleaseList";
import SelectedRelease from "./components/SelectedRelease";

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
        releases: [...prevState.releases, newRelease],
      };
    });
  }
  console.log(releaseState.releases);

  function handleSelectRelease(id) {
    setReleaseState((prevState) => {
      return {
        ...prevState,
        releaseStateId: id,
      };
    });
  }

  const selectedRelease = releaseState.releases.find(
    (release) => release.id === releaseState.releaseStateId
  );

  return (
    <>
      <NewRelease newReleases={handleNewRelease} />
      <ReleaseList
        onSelect={handleSelectRelease}
        releases={releaseState.releases}
      />
      <SelectedRelease releases={selectedRelease} />
    </>
  );
}

export default App;
