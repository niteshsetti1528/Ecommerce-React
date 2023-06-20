import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AppRoutes from "./routes/routes";
import { useContext, useEffect } from "react";
import DialogComponent from "./components/DialogComponent";
import LoginPage from "./pages/LoginPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppContext } from "./components/AppContext";
import { LoginContext } from "./components/LoginProvider";
import { User } from "./interface/UserInterface";
import { useDispatch } from "react-redux";
import { emptyCart, updateCartCount } from "./redux/cartReducer";

function App() {
  const { open, setOpenState } = useContext(AppContext);
  const { setLoginState } = useContext(LoginContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("userDetails");
    let user: User | null = null;

    if (userData != null) {
      user = JSON.parse(userData) as User;
    }
    if (user?.isLogged) {
      setLoginState(user.isLogged, user);
    }
    // eslint-disable-next-line
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userDetails");
    setLoginState(false, {});
    dispatch(emptyCart());
    dispatch(updateCartCount(0));
  };

  const queryClient: QueryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <HeaderComponent
            onClick={() => setOpenState(true)}
            onSignout={handleSignOut}
          />

          <DialogComponent
            dialog={{
              open,
              component: <LoginPage />,
            }}
          />
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
