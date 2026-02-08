import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/Home/HomePage";
import RestaurantDetailPage from "./screens/RestaurantDetail/RestaurantDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
    </Routes>
  );
}

export default App;
