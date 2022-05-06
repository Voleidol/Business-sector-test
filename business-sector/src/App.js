import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SearchContainer from './components/Search/SearchContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ContentConainer from './components/Content/ContentConainer';
import FooterContainer from './components/Footer/FooterContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">

        <header>
          <SearchContainer />
          <NavbarContainer />
        </header>
          
        <section>
          <ContentConainer />
        </section> 

        <footer>
          <FooterContainer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
