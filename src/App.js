import logo from './logo.svg';
import './App.css';
import Accueil2 from './composers/Accueil2';
import ImageGallery from './composers/ImageGallery';
import Plant from './composers/Plant';
import Contact from './composers/Contact';
import Footer from './composers/Footer';
function App() {
  return (
    <div className="App">
      <Accueil2/>
    <ImageGallery/> 
    <Plant/>
    <Contact/> 
    <Footer/>
  </div>
  );
}

export default App;
