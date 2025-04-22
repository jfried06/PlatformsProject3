import './App.css';
<<<<<<< Updated upstream
import { useState, useEffect } from "react";
=======
>>>>>>> Stashed changes

function App() {

  const [imageURL, setImageURL] = useState();

  function handlePictureClick() {
    // API KEY: jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303
    // use API to get new picture
  }

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303')
      .then(response => response.json())
      .then(data => {
        setImageURL(data.url);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
<<<<<<< Updated upstream
      <RandomButton onClick={handlePictureClick} />
      <img src={imageURL} alt="spaceImage" />
=======
      <header className="app-header">
        NASA Picture of the Day
      </header>
      <RandomButton handleClick={handlePictureClick} />
>>>>>>> Stashed changes
    </div>
  );
}

function RandomButton({ handleClick }) {
  return (
    <div className="space-button">
      <button onClick={handleClick}>
        Get Random Picture
      </button>
    </div>
  );
}

export default App;
