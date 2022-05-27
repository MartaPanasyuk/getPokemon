import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DetailsCard() {
  const params = useParams();
  console.log("what is a params", params);
  return (
    <div>
      <h3>Details</h3>
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
    </div>
  );
}
