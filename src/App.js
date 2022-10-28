// import'./components/Hero'; 
import Hero from './components/Hero';
import Movies from './components/Movies'
import './App.css';

function App() {
  const myName = ''
  return (
    <div className="App">
      <header className="App-header">
        <Hero/>
        {myName
        ? <p> Welcome Back</p> //ex: of turnary
        :<p> Please Login Above.</p>//ex: of turnary
        }
     <p> Hello {myName || 'guest'}.</p> 
      </header>
    </div>
  );
}

export default App;
