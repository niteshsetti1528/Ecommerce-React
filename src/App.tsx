import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AppRoutes from "./hooks/routes";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
