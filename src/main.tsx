import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RestaurantsProvider } from "./context/RestaurantsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RestaurantsProvider>
      <App />
    </RestaurantsProvider>
  </StrictMode>,
);
