import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Importance from './Importance/Importance';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Importance/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
