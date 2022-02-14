import React from "react";
import logo from "./logo.png";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import { auth } from "./firebase-config";
function App() {
  const handleDiscord = (): void => {
    window.open("https://discord.gg/YtXSfd87fF");
  };

  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Fingerprint ZA</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
        <Button variant='contained' onClick={handleDiscord} className='fp-discord'>
          Join Discord
        </Button>
      </header>
    </div>
  );
}

export default App;
