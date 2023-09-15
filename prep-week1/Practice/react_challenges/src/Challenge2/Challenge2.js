import data from './users-data';
import './Challenge2.css';

export default function Challenge2() {
  return (
    <div className="Challenge2">
      <div className="page-deets">Loop Over an Array of Data</div>
      <div className="users">
        {data.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.name}</p>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
