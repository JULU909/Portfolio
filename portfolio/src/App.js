import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Router , Routes} from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import { BrowserRouter } from 'react-router-dom';
function App() {
  let component
  switch (window.location.pathname){
    case "/home":
      component = <Home/>
    case "/about":
        component = <Aboutme/>
    case "/projects":
          component = <Home/>
  }
  return (
   <div className='App'>
    {component}


   </div>
  );
}

export default App;
