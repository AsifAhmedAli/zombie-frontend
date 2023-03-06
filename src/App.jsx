import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suspension from "./components/Suspension";
import Exterior from "./components/Exterior";
import Interior from "./components/Interior";
import AutoParts from "./components/AutoParts";
import Electrical from "./components/Electrical";
import Headlights from "./components/Headlights";
import HomeContent from "./components/HomeContent";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductContent from "./components/ProductContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<HomeContent />} />
          <Route path="autobodyparts" element={<AutoParts />} />
          <Route path="headlights" element={<Headlights />} />
          <Route path="electricals" element={<Electrical />} />
          <Route path="suspension" element={<Suspension />} />
          <Route path="interior" element={<Interior />} />
          <Route path="exterior" element={<Exterior />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
