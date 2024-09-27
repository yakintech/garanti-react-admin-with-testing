import { Link, Route, Routes } from "react-router-dom"
import OrderRoutes from "./pages/orders/routes"
import Navbar from "./components/layout-components/navbar"



function App() {
  return <>
    <Navbar />
      <Routes>
        <Route path="/orders/*" element={<OrderRoutes />} />
      </Routes>

      <footer>
        <p>Footer</p>
      </footer>
  </>
}

export default App