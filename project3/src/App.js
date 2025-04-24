import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [imageURL, setImageURL] = useState();
  const [explanation, setExplanation] = useState();


  function handlePictureClick() {
    // API KEY: jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303
    const randomDate = () => {
      const start = new Date(1995, 5, 16);
      const end = new Date();
      const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
      const date = new Date(randomTime);
      return date.toISOString().split('T')[0];
    };
    const newDate = randomDate();
    fetch(`https://api.nasa.gov/planetary/apod?api_key=jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303&date=${newDate}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setDate(data.date);
        setImageURL(data.url);
        setExplanation(data.explanation);
      })
      .catch(error => console.error(error));
    return (
      <div className="app-container">
        <header className="app-header">
          NASA Picture of the Day for {date}
        </header>
        <h1>{title}</h1>
        <img className="space-image" src={imageURL} alt="spaceImage" />
        <div className="space-button">
          <RandomButton onClick={handlePictureClick} />
          <TodayButton onClick={handleTodayClick} />
        </div>
        <p className="explanation">{explanation}</p>
      </div>
    );

  }
  function handleTodayClick() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setDate(data.date);
        setImageURL(data.url);
        setExplanation(data.explanation);
      })
      .catch(error => console.error(error));
    return (
      <div className="app-container">
        <header className="app-header">
          NASA Picture of the Day for {date}
        </header>
        <h1>{title}</h1>
        <img className="space-image" src={imageURL} alt="spaceImage" />
        <div className="space-button">
          <RandomButton onClick={handlePictureClick} />
          <TodayButton onClick={handleTodayClick} />
        </div>
        <p className="explanation">{explanation}</p>
      </div>
    );

  }

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=jVPtZqCOqGMYnklNnjIUnygvyObM2G9ymzmKh303`)
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
      <img className="space-image" src={imageURL} alt="spaceImage" />
      <div className="space-button">
        <RandomButton onClick={handlePictureClick} />
        <TodayButton onClick={handleTodayClick} />
      </div>
      <p className="explanation">{explanation}</p>
    </div>
  );
}

function RandomButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Get Random Picture
      </button>
    </div>
  );
}


function TodayButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Get Today's Picture
      </button>
    </div>
  );
}

export default App;
