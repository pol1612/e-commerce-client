import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";

function App() {
  return (
      <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/add-product" element={<AddProductPage/>}/>
          <Route path="/product-update/:id" element={<AddProductPage/>}/>
      </Routes>
  )
}

export default App
