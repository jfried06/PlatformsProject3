import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [imageURL, setImageURL] = useState();
  const [explanation, setExplanation] = useState();


  function handlePictureClick() {
    // API KEY: jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303
    // use API to get new picture
  }

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303')
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setDate(data.date);
        setImageURL(data.url);
        setExplanation(data.explanation);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        NASA Picture of the Day for {date}
      </header>
      <h1>{title}</h1>
      <RandomButton onClick={handlePictureClick} />
      <TodayButton onClick={handlePictureClick} />
      <img className="space-image" src={imageURL} alt="spaceImage" />
      <p>{explanation}</p>
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

function TodayButton({ handleClick }) {
  return (
    <div className="space-button">
      <button onClick={handleClick}>
        Get Today's Picture
      </button>
    </div>
  );
}

export default App;
