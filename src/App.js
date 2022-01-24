import './App.css';
import Carousel from './Carousel';
import Pane from './Pane';
import TopBars from './TopBars';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <TopBars/>
      <Carousel/>
      <Pane/>
      <Footer/>
    </div>
  );
}

export default App;
