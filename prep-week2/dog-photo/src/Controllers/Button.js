export default function Button({ getDogPhoto }) {
  return (
    <button className="button" onClick={getDogPhoto}>
      Get a dog!
    </button>
  );
}
