import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const handleDiscord = (): void => {
    window.open("https://discord.gg/YtXSfd87fF");
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Fingerprint ZA</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='contained' onClick={handleDiscord} className='fp-discord'>
            Join Discord
          </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
