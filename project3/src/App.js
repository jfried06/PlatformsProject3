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
    <div>
      <RandomButton onClick={handlePictureClick} />
      <h1>{title}</h1>
      <h2>{date}</h2>
      <img src={imageURL} alt="spaceImage" />
      <p>{explanation}</p>
    </div>
  );
}

function RandomButton({ handleClick }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleClick}>
        Get Random Picture
      </button>
    </div>
  );
}

export default App;
