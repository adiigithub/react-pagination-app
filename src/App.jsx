
import { Route, Routes } from "react-router-dom"
import Pagination from "./components/Pagination"
import Cart from "./components/Cart"


const App = ()=>{
  return (
    <>
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
   <Route path="/" element ={<Pagination/>}/>
    </Routes>
    </>
  )
}
export default App
