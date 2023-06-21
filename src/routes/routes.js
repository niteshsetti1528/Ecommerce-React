import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import OrdersPage from "../pages/OrdersPage";
import AddProductPage from "../pages/AddProductPage";

export default function AppRoutes() {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/product/:id", element: <ProductPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/orders", element: <OrdersPage /> },
    { path: "/add", element: <AddProductPage /> },
  ]);

  return element;
}
