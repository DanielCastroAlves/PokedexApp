import Home from './Pages/Home'
import './App.css';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
     <Home />
    </Provider>
  );
}

export default App;
