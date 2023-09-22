import { useState } from 'react';
import DogPhoto from './DogPhoto';
import Button from './Button';

export default function DogGallery() {
  const [dogPhoto, setDogPhot] = useState([]);

  const getDogPhoto = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      console.log(data);
      setDogPhot([...dogPhoto, data]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="gallery">
      <Button getDogPhoto={getDogPhoto} />
      <DogPhoto dogPhoto={dogPhoto} />
    </div>
  );
}
