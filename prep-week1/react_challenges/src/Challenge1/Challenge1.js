import './Challenge1.css';

const user = {
  name: 'Chris Sev',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 33,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chris__sev',
  avatar: 'https://i.postimg.cc/9MQ7k9Y4/young-man.jpg',
};

function Challenge1() {
  const twitterUrl = `https://twitter.com/${user.twitterUsername}`;
  return (
    <div className="App">
      <div className="user-deets">
        <img src={user.avatar} alt="" />
        <h3>
          <a href={twitterUrl}>{user.name}</a>
        </h3>
        <p>
          <strong>Location</strong>
          {user.location}
        </p>
        <p>
          <strong>Eats</strong>
          {user.foodType}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>
        <p>
          <strong>Twitter</strong>
          <a href={twitterUrl}>@{user.twitterUsername}</a>
        </p>
      </div>
    </div>
  );
}

export default Challenge1;
