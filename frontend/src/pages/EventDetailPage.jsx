import { useParams } from "react-router-dom";
import { events } from "../dummyEvents";

export default function EventDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
