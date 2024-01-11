import React, { useState, useEffect } from 'react';
import Userdata from './components/Userdata';
import Readme from './components/Readme';
import './out.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      fetchReadmeForUserRepo(username);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchReadmeForUserRepo = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await response.json();

      const userRepo = reposData.find(repo => repo.name.toLowerCase() === username.toLowerCase());

      if (userRepo) {
        const readmeResponse = await fetch(`https://raw.githubusercontent.com/${username}/${userRepo.name}/main/README.md`);
        const readmeData = await readmeResponse.text();
        setReadmeContent(readmeData);
      }
    } catch (error) {
      console.error('Error fetching README content:', error);
    }
  };

  const handleButtonClick = () => {
    if (username.trim() !== '') {
       setReadmeContent('');
      fetchUserData();
    } else {
      console.error('Please enter a valid username');
    }
  };


function formatDate(inputDate) {
  const date = new Date(inputDate);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

 return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 mt-2">Github Lookup</h1>
      <div>
        <input
          className="px-2 py-1 border-black border-full border-2 m-2 w-96"
          type="text"
          id="username"
          placeholder="Enter a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="px-2 py-1 bg-gray-200 shadow-md shadow-gray-300 hover:scale-[1.01] rounded-md m-2"
          onClick={handleButtonClick}
        >
          Search
        </button>

        {userData && (
          <>
            <Userdata
              username={userData.login}
              displayName={userData.name || userData.login}
              numPublicRepos={userData.public_repos}
              avatarUrl={userData.avatar_url}
              htmlUrl={userData.html_url}
              followers={userData.followers}
              following={userData.following}
              createdAt={formatDate(userData.created_at)}
              company={userData.company}
              hireable={userData.hireable}
              email={userData.email}
              bio={userData.bio}
            />
          </>
        )}
      </div>
      {readmeContent && <Readme md={readmeContent} />}
    </div>
  );
};

export default App;