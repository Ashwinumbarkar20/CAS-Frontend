
import'./App.css'
import { Routes,Route } from 'react-router-dom'
import Nav from './Component/Navbar/Nav'
import Home from './Pages/Home'
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



function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="AlmaQuote" element={<AmlaQuote/>}/>
      <Route path="/Productsupport" element={<Productsupport/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Technology" element={<Technology/>}></Route>
      <Route path="/Contactus" element={<Contactus/>}></Route>
      <Route path="/Almacamtube" element={<Almacamtube/>}></Route>
      <Route path="/Almacamspacecut" element={<Almacamspacecut/>}></Route>
      <Route path="/Almacamweld" element={<Almacamweld/>}></Route>
      <Route path="/Industry4" element={<Industry4/>}></Route>
      <Route path="/Almacamcut" element={<Almacamcut/>}></Route>
      <Route path="/Almacampunch" element={<Almacampunch/>}></Route>
      <Route path="/Almacamcombi" element={<Almacamcombi/>}></Route>
      <Route path="/Almacamrouting" element={<Almacamrouting/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
