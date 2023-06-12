import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
