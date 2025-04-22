import './App.css';
import { useState, useEffect } from "react";

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
      <header className="app-header">
        NASA Picture of the Day
      </header>
      <RandomButton onClick={handlePictureClick} />
      <img src={imageURL} alt="spaceImage" />
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
