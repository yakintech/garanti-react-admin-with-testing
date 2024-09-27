import { Link, Route, Routes } from "react-router-dom"
import OrderRoutes from "./pages/orders/routes"
import Navbar from "./components/layout-components/navbar"
import CategoryRoutes from "./pages/categories"
import { Container } from "@mui/material"



function App() {
  return <>
    <Navbar />
    <Container style={{marginTop:20}}>
      <Routes>
        <Route path="/orders/*" element={<OrderRoutes />} />
        <Route path="/categories/*" element={<CategoryRoutes />} />
      </Routes>
    </Container>

    <footer>
      <p>Footer</p>
    </footer>
  </>
}

export default App