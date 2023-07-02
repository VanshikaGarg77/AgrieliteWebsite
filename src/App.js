import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Marque from './marque';
import Cards from './cards';
 import Newabout from './newabout';
// import About from './about';
import Why from './Why';
import './index.css';
import Contact from './contact';
import Footer from './footer';
import Media from './media.js';
import Form from './form.js';

function App() {
  return (
    <div className="full">
    <Navbar/>
    <Marque/>
    <Cards/>
    <Newabout/>
    <Why/>
    <Media/> 
    <Contact/>
    <Form/>
    <Footer/>
    </div>
  );
}

export default App;
