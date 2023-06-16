import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AppRoutes from "./routes/routes";
import { useState } from "react";
import DialogComponent from "./components/DialogComponent";
import LoginPage from "./pages/LoginPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const [open, setOpen] = useState(false);
  const queryClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <HeaderComponent onClick={() => setOpen(true)} />
          <DialogComponent dialog={{ open, component: <LoginPage /> }} />
          <AppRoutes />
        </Router>
      </div>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom-right"
      ></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
