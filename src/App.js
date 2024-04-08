import { useState, useEffect } from 'react';

import './App.css';
import moonIcon from './images/icon-moon.svg';
import sunIcon from './images/icon-sun.svg';

const App = () => {

  // State to track the current mode (true for light mode, false for dark mode)
  const [isLightMode, setIsLightMood] = useState(true);

  // Function to handle toggle click
  const toggleMood = () => {
    setIsLightMood(preMode => !preMode);
  };

  useEffect (() => {
    document.body.className = isLightMode ? 'light-mode' : 'dark-mode';
  }, [isLightMode]);

  return(
    <main className='container'>
      <div className="centered-div">
        <div className="header">
          <h1>TODO</h1>
          <div className="toggle" onClick={toggleMood}>
            {/* Conditional rendering of image based on mode */}
            {isLightMode? 
                <img src={moonIcon} alt="moon icon" /> :
                <img src={sunIcon} alt="sun icon" />
            }
          </div>
        </div>
        <div className="input-form">
          <form>
            <input type="text" placeholder='Create a new todo...'/>
            <button>Create</button>
          </form>
          
        </div>
        <div className="notes">
          <div className="note checked">
              <input type="checkbox" id="checkbox1" checked/>
              <label className="checkbox1"></label>
              <div className="note-content">Complete online Javascript course</div>
          </div>
          <div className="note check">
              <input type="checkbox" id="checkbox1" />
              <label className="checkbox1"></label>
              <div className="note-content">Jog around the park 3x</div>
          </div>
          <div className="note check">
              <input type="checkbox" id="checkbox1" />
              <label className="checkbox1"></label>
              <div className="note-content">Complete online Javascript course</div>
          </div> 
          <div className="note check">
              <input type="checkbox" id="checkbox1" />
              <label className="checkbox1"></label>
              <div className="note-content">10 minutes meditation</div>
          </div>
          <footer>
            <div className="let-items">5 items left</div>
            <div className="actions">
              <ul>
                <li className='active'>All</li>
                <li>Active</li>
                <li>Completed</li>
              </ul>
            </div>
            <div className="clear">Clear Completed</div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;