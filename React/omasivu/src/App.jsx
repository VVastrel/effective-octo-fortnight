import Header from "./Header";
import Gallery from "./Gallery";
import About from "./About";
import Footer from "./Footer";
import Lightbox from "./Lightbox";
import "./App.css"; // Tuodaan CSS-tyylit

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <About />
      <Footer />
      <Lightbox />
    </div>
  );
}

export default App;
