
import'./App.css'
import { Routes,Route } from 'react-router-dom'
import { lazy } from 'react'
import ScrollToTop from './Component/Scrolltop'
import Nav from './Component/Navbar/Nav'
import Home from './Pages/Home'
import AllProducts from './Pages/AllProducts'
import AmlaQuote from './Pages/Products/AlmaQuote'
import Services from './Pages/Services'
import Technology from './Pages/Technology'
import Productsupport from './Pages/Productsupport'
import Contactus from './Pages/Contactus'
import Almacamtube from './Pages/Products/Almacamtube'
import Almacamspacecut from './Pages/Products/Almacamspacecut'
import Almacamweld from './Pages/Products/Almacamweld'
import Industry4 from './Pages/Products/Industry4'
import Almacamcut from './Pages/Products/Almacam/Almacamcut'
import Almacampunch from './Pages/Products/Almacam/Almacampunch'
import Almacamcombi from './Pages/Products/Almacam/Almacamcombi'
import Almacamrouting from './Pages/Products/Almacam/Almacamrouting'
import Lasercutting from './Pages/TechnologyPages/Lasercutting'
import Footer from './Component/Footer'
import Plasmacutting from './Pages/TechnologyPages/Plasmacutting'
import Oxycutting from './Pages/TechnologyPages/Oxycutting'
import Waterjetcutting from './Pages/TechnologyPages/Waterjetcutting'
import Punchingnibbling from './Pages/TechnologyPages/Punchingnibbling'
import RoutingMilling from './Pages/TechnologyPages/RoutingMilling'
import Tubesprofiles from './Pages/TechnologyPages/Tubesprofiles'
import Threecutting from './Pages/TechnologyPages/ThreeDcutting'
import Robotic from './Pages/TechnologyPages/Robotic'
import Almanestncut from './Pages/Products/Almanestncut'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AlmaQuote" element={<AmlaQuote/>}/>
      <Route path="/Productsupport" element={<Productsupport/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Technology" element={<Technology/>}></Route>
      <Route path="/Contactus" element={<Contactus/>}></Route>
      <Route path="/Almacamtube" element={<Almacamtube/>}></Route>
      <Route path="/Nest&cut" element={<Almanestncut/>}></Route>
      <Route path="/Almacamspacecut" element={<Almacamspacecut/>}></Route>
      <Route path="/Almacamweld" element={<Almacamweld/>}></Route>
      <Route path="/Industry4" element={<Industry4/>}></Route>
      <Route path="/Almacamcut" element={<Almacamcut/>}></Route>
      <Route path="/Almacampunch" element={<Almacampunch/>}></Route>
      <Route path="/Almacamcombi" element={<Almacamcombi/>}></Route>
      <Route path="/Products" element={<AllProducts/>}></Route>
      <Route path="/Almacamrouting" element={<Almacamrouting/>}></Route>
      <Route path="/Lasercutting" element={<Lasercutting/>}></Route>
      <Route path='/Plasmacuting' element={<Plasmacutting/>}></Route>
      <Route path='/Oxycuting' element={<Oxycutting/>}></Route>
      <Route path='/Waterjetcuting' element={<Waterjetcutting/>}></Route>
      <Route path='/RoutingMilling' element={<RoutingMilling/>}></Route>
      <Route path='/Tubesprofiles' element={<Tubesprofiles/>}></Route>
      <Route path='/Punchingnibbling' element={<Punchingnibbling/>}></Route>
      <Route path='/Threecutting' element={<Threecutting/>}></Route>
      <Route path='/Robotic' element={<Robotic/>}></Route>
      <Route path='/Nestncut' element={<Almanestncut/>}></Route>
    </Routes>
     <Footer/>
      <ScrollToTop />
    </>
  )
}

export default App
