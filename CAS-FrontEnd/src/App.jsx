
import'./App.css'
import { Routes,Route,useLocation  } from 'react-router-dom'
import { lazy } from 'react'
import ScrollToTop from './Component/Scrolltop'
import Nav from './Component/Navbar/Nav'
import Home from './Pages/Home'
import AllProducts from './Pages/AllProducts'
import Services from './Pages/Services'
import Technology from './Pages/Technology'
import Productsupport from './Pages/Productsupport'
import Contactus from './Pages/Contactus'
import Footer from './Component/Footer'
import WhatsAppBtn from './Component/WhatsAppBtn/WhatsAppBtn'
import ProductPage from './Pages/Products/ProductPage/ProductPage'
import TechnologyPage from './Pages/TechnologyPage/TechnologyPage'
import ErrorPage from './Pages/ErrorPage'
import TermsConditions from './Pages/TermsConditions'
import FloatingContactButton from './Component/FloatingContactButton'
import { initGA, logPageView } from "./analytics";
import React,{useEffect} from 'react'
function App() {
  
    useEffect(() => {
      initGA();
    }, [])
  return (
    <>
    <Nav/>
    <PageTracker />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product/:Productname" element={<ProductPage/>}></Route>
      <Route path="/Technology/:Techname" element={<TechnologyPage/>}></Route>
      <Route path="/Productsupport" element={<Productsupport/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Technology" element={<Technology/>}></Route>
      <Route path="/Contactus" element={<Contactus/>}></Route>
      <Route path="/Products" element={<AllProducts/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>
      <Route path="/TermsAndConditions" element={<TermsConditions/>}></Route>
    </Routes>
    <Footer/>
    <ScrollToTop />
    <WhatsAppBtn/>
    <FloatingContactButton/>
    </>
  )
}

// 📌 **Tracks Page Views when Route Changes**
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]); // Runs whenever location changes

  return null;
};
export default App
