import { useState, useEffect } from 'react';
import Person from './person';

export default function PersonController() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPerson(setData, setIsLoading);
  }, []);

  return (
    <div className="person">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Person
          first_name={data.first_name}
          last_name={data.last_name}
          email={data.email}
        />
      )}
    </div>
  );
}

const getPerson = async (setData, setIsLoading) => {
  try {
    const response = await fetch('https://www.randomuser.me/api?results=1');
    const data = await response.json();

    const formattedData = {
      first_name: data.results[0].name.first,
      last_name: data.results[0].name.last,
      email: data.results[0].email,
    };
    setData(formattedData);
    setIsLoading(false);
  } catch (e) {
    console.error(e);
  }
};
