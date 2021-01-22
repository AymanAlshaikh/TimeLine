import SinglePoints from "./SinglePoints";
import Points from "../Points";
function PointsList() {
  const list = Points.map((point) => {
    return (
      <ul>
        <li>
          <SinglePoints key={point.id} Points={point} />
        </li>
      </ul>
    );
  });
  return <div>{list}</div>;
}

export default PointsList;
