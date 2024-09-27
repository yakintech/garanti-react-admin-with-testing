import { Link, Route, Routes } from "react-router-dom"
import OrderRoutes from "./pages/orders/routes"



function App() {
  return <>
    <nav>
      <ul>
        <li><Link to={'/orders'}>Orders</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/orders/*" element={<OrderRoutes />} />
      </Routes>

      <footer>
        <p>Footer</p>
      </footer>
  </>
}

export default App