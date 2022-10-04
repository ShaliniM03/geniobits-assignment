import logo from './logo.svg';
import './App.css';
import Home from './app/pages/home';
import Header from './app/components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
