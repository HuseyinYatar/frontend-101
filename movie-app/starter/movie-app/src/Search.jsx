export function Search({ querry, setQuerry }) {
  return (
    <div className="col-4">
      <input
        type="text"
        value={querry}
        onChange={(e) => setQuerry(e.target.value)}
        className="form-control"
      />
    </div>
  );
}
