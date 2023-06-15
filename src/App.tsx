import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AppRoutes from "./hooks/routes";
import { useState } from "react";
import DialogComponent from "./components/DialogComponent";
import LoginPage from "./pages/LoginPage";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <HeaderComponent onClick={() => setOpen(true)} />
      <DialogComponent dialog={{ open, component: <LoginPage /> }} />
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
