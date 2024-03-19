import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './component/accueil';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Accueil />}></Route>
    </Routes>
    </div>
  );
}

export default App;
