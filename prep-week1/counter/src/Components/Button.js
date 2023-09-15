export default function Button({ event, name }) {
  return (
    <div>
      <button className="button" onClick={event}>
        {name}
      </button>
    </div>
  );
}
