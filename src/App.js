import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/exchange" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
