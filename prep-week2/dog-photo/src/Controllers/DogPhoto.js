export default function DogPhoto({ dogPhoto }) {
  return (
    <div className="dog-photo">
      {dogPhoto.length === 0 ? (
        <div>Get your first dog by clicking the button!</div>
      ) : (
        <div>
          {dogPhoto.map((photo, index) => (
            <img
              src={photo.message}
              alt={photo.message}
              className="photo"
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
