import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div>
          <HeaderContainer />
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
