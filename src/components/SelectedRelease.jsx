export default function SelectedRelease({ releases }) {
  if (!releases) {
    return <h2>Adicione um lançamento</h2>;
  }
  return (
    <div>
      <h2>{releases.description}</h2>
      <div>
        <p>{releases.description}</p>
        <p>{releases.date}</p>
        <p>{releases.type}</p>
        <p>{releases.category}</p>
        <p>{releases.status}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
