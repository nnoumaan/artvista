import { Link } from "react-router-dom";

function CardTemplate(props) {
  console.log(props);
  return (
    <Link to={`/artist/${props.value.id}`}>
      <div className="cardContainer">
        <div
          className="imgContainer"
          style={{ backgroundImage: `url(${props.value.src})` }}
        ></div>
        <div className="textContainer">
          <div>
            <span className="textTitle">Artist</span>

            <p>{props.value.name}</p>
          </div>

          <div>
            <span className="textTitle">Date of Birth</span>
            <p>{props.value.dob}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardTemplate;
