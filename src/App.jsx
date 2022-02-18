import logo from "./fp-logo.png";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome to Fingerprint ZA 2.0</p>
        <a
          className='App-link'
          href='https://discord.gg/YtXSfd87fF'
          target='_blank'
          rel='noopener noreferrer'
        >
          Join Community Discord
        </a>
      </header>
    </div>
  );
}

export default App;
