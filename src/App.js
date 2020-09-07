import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import mountain from './images/mountain.jpg';
import knights from './images/gif.webp';
import castle from './images/castle.jpg';
import './App.css';

function App() {
  const {ref, playState, getAnimation} = useWebAnimations({
    keyframes: [
      {transform: 'translateX(-100%)'},
      {transform: 'translateX(100%)'}
    ],
    timing: {
      duration: 8000,
      iterations:Infinity,
      playbackRate: -2
    }
  });
return (
  <div>
    <div ref={ref}>
      YEET
      <img className="mall" src={mountain} alt="mountain" />
    </div>
    <img className="knight1" id="knight1" src={knights} alt="knights on shopping" />
    <img className="knight2" id="knight2" src={knights} alt="knights on shopping" />
    <img className="castle" id="castle" src={castle} alt="knights on shopping" />
    <div className="button">
      <button onClick={()=>{
       getAnimation().play();
      }}>Run my knights</button>
      <button onClick={()=>{
       getAnimation().pause();
      }}>Let the Knights Rest</button>
      {console.log("Animation State =",{playState})}
    </div>
  </div>
);

}

export default App;
