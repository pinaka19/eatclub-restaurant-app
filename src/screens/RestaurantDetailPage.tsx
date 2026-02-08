import { useParams } from "react-router-dom";

export default function RestaurantDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Restaurant Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}
