import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

export default function AppRoutes() {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/product/:id", element: <ProductPage /> },
  ]);

  return element;
}
