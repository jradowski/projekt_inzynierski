import logo from './SMlogo2.png';
import foto1 from './kon_stajnia.jpg';
import foto2 from './kon-skok.jpg';
import foto3 from './puchar.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      

      <div className="Features">
        
        <div id='dane'>
          <img src={foto1} id="feature" alt="stajnia" />
          <h1>Stajnia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nisi, maximus pretium consectetur at, vehicula ac tortor. Vivamus ac lorem quis turpis lobortis tincidunt sit amet quis tellus.</p>
        </div>

        <div id='dane'>
          <img src={foto2} id="feature" alt="skoki" />
          <h1>Jeźdźcy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nisi, maximus pretium consectetur at, vehicula ac tortor. Vivamus ac lorem quis turpis lobortis tincidunt sit amet quis tellus.</p>      
        </div>
        
        <div id='dane'>
          <img src={foto3} id="feature" alt="skoki" />
          <h1>Wyniki</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nisi, maximus pretium consectetur at, vehicula ac tortor. Vivamus ac lorem quis turpis lobortis tincidunt sit amet quis tellus.</p>      
        </div>

      </div>

      <div className='Demo'>
      <h1>DEMO START FREE TRAIL</h1>

      </div>

      <div className='Foot'>
        <list>
          <ul>KONTAKT</ul>
          <ul>Facebook</ul>
          <ul>Instagram</ul>
          <ul>Mail</ul>
          <ul>Telefon</ul>
        </list>
      </div>

    </div>
  );
}

export default App;