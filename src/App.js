import logo from './logo.svg';
import './App.scss';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from "./components/Layout/index"
import Home from "./components/Home/index"
import About from './components/About';
import Contact from "./components/contact/index"

function App() {
  return (
   <Routes>
     <Route path="/" element={<Layout />}>
     <Route index element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/contact" element={<Contact />}></Route>
     </Route>
   </Routes>
  );
}

export default App;
