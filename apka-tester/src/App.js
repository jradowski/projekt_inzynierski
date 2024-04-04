import logo from './SMlogo2.png';
import foto1 from './kon_stajnia.jpg';
import foto2 from './kon-skok.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="Features">
        <img src={foto1} id="feature" alt="stajnia" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nisi, maximus pretium consectetur at, vehicula ac tortor. Vivamus ac lorem quis turpis lobortis tincidunt sit amet quis tellus. Proin eu lectus sit amet risus dictum bibendum vel vitae libero.</p>

        <img src={foto2} id="feature" alt="skoki konne" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nisi, maximus pretium consectetur at, vehicula ac tortor. Vivamus ac lorem quis turpis lobortis tincidunt sit amet quis tellus. Proin eu lectus sit amet risus dictum bibendum vel vitae libero.</p>
      </div>

      <div className=''></div>
    </div>
  );
}

export default App;