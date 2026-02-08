import { useContext } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { Link } from "react-router-dom";


export default function RestaurantListPage() {
  const { restaurants, loading, error } = useContext(RestaurantsContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Restaurant List</h3>
      <ul>
        {restaurants.map((r) => (
          <li key={r.objectId}>
            <Link to={`/restaurant/${r.objectId}`}>{r.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
