import "../App.css";
function SinglePoints(props) {
  return (
    <div>
      <h4>{props.Points.year}</h4>
      <img src={props.Points.pic} alt="Pictures" />
      <p>{props.Points.describtion}</p>
    </div>
  );
}

export default SinglePoints;
