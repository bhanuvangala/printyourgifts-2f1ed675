import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartContext"; // 👈 import your CartProvider

createRoot(document.getElementById("root")!).render(
  <CartProvider>   {/* 👈 wrap App inside CartProvider */}
    <App />
  </CartProvider>
);
