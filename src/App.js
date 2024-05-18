import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Service from './components/pages/Service';

function App() {
  const comPhone = "9856 123 123";
  const comName = "Microsoft";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home comName={comName} comPhone={comPhone}/>} />
        <Route path="/about" element={<About comName={comName} comPhone={comPhone}/>} />
        <Route path="/services" element={<Services comName={comName} comPhone={comPhone}/>} />
        <Route path="/service/:slug" element={<Service comName={comName} comPhone={comPhone}/>} />
        <Route path="/products" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
