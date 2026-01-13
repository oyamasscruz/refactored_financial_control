export default function ReleaseList({ releases, onSelect }) {
  return (
    <div>
      <h2>My Releases</h2>
      <div>
        <ul className="flex flex-col w-400">
          {releases.map((release) => (
            <li
              key={release.id}
              className="grid grid-cols-6 divide-x divide-amber-50 bg-stone-700 hover:bg-stone-600 transition text-amber-50 border-1 text-center"
            >
              <button
                onClick={() => onSelect(release.id)}
                className="absolute inset-0"
                aria-label="Ver detalhes do lançamento"
              />
              <h3 className="text-xl uppercase border-r-2 border-r-amber-50">
                {release.description}
              </h3>
              <p>{release.type}</p>
              <p>{release.category}</p>
              <p>{release.date}</p>
              <p>{release.value}</p>
              <p>{release.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
