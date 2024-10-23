import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/SingUp.jsx";
import Schedule from "./components/Schedule.jsx";

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/gallery" element={<Cards />} />
          
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter> 
  );
}

export default App
