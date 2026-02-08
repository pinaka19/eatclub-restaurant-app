import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RestaurantsProvider } from "./context/RestaurantsContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RestaurantsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RestaurantsProvider>
  </StrictMode>,
);
