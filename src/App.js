import './App.css';
import { useState } from "react/cjs/react.development"
import LoadingScreen from './components/LoadingScreen';
import HomePage from './components/HomePage';

function App() {

  //default statement for the overlay menu in the whole page
  const hiddenOverlay = {
    opacity: "0",
    visibility: "hidden"
  }

  const visibleOverlay = {
    opacity: "1",
    visibility: "visible"
  }

  const [defaultState, setState] = useState(() => {
    return (hiddenOverlay)
  })

  function showMenu() {
    setState(visibleOverlay)
  }

  function hideMenu() {
    setState(hiddenOverlay)
  }

  return (
    <div className="Kaski-website">
      <HomePage defaultState={defaultState} hideMenu={hideMenu} showMenu={showMenu} />
    </div>
  );
}


export default App;
