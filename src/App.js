import Home from './pages/Home/Home';
import './assets/bootstrap.css';
import './components/Styles/index.scss';
import Header from './Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home  />
    </div>
  );
}

export default App;
