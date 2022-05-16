import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/HeadingComponent';
import ProductListing from './components/ProductListing';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div className="App">
     <HeadingComponent/>
     <p className='App-lable-text'>Welcome to my app!</p>
     <ProductListing/>
     <FooterComponent/>
 
    </div>
  );
}

export default App;
