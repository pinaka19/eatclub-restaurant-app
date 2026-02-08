import { Route, Routes } from "react-router-dom";
import RestaurantListPage from "./screens/RestaurantListPage";
import RestaurantDetailPage from "./screens/RestaurantDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantListPage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
    </Routes>
  );
}

export default App;
