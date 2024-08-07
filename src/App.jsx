import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import "./App.css";
import Cards from "./Cards.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/gallery" element={<Cards />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter> 
  );
}

export default App
