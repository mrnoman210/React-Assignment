import './App.css';
import Home from './screens/Home';
import Travel from './screens/Travel';
import Footer from './components/Footer';
import Business from "./screens/Business"
// import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
  <BrowserRouter>
{/* <Header/> */}
<Navbar/>
<Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="business" element={<Business />} />
  <Route path="travel" element={<Travel />} />

</Routes>
<Footer/>
 </BrowserRouter> 
    
    </>
  );
}

export default App;
