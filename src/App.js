import { Route ,Routes} from "react-router-dom";
import './App.css';
import Navbar from "./Componants/Navbar/Navbar";
import Footer from "./Componants/Footer/Footer";
import Home from "../src/Home/Home";
import About from "../src/About/About";
import Service from "../src/Service/Service";
import Contact from "../src/Contact/Contact";
import Apply_Form from "../src/Apply_Form/Apply_form";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply_form" element={<Apply_Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
