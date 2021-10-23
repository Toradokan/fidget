import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import onSound from './assets/sounds/switch-on.mp3';
import offSound from './assets/sounds/switch-off.mp3';
import './App.css';

function App() {
  const [lightsOn, setLightsOn] = useState(true);

  const [switchOn] = useSound(onSound);
  const [switchOff] = useSound(offSound);

  useEffect(() => {
    setLightsOn(false);
  }, []);

  function toggleSwitch() {
    if (lightsOn) {
      setLightsOn(false);
      switchOff();
    } else {
      setLightsOn(true);
      switchOn();
    }
  }

  return (
    <main className={lightsOn ? 'room lights-on' : 'room lights-off'}>
      {lightsOn ? (
        <div className="surround on">
          <div className="switch">
            <div className="button"></div>
            <div className="button-face" onClick={toggleSwitch}>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="surround">
          <div className="switch">
            <div className="button"></div>
            <div className="button-face" onClick={toggleSwitch}>
              <div className="shadow"></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
