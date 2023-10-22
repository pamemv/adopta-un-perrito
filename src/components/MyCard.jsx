import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ nombre, descripcion, imagen, raza, color }) => {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={imagen}
        className="mt-4 mx-auto"
        style={{ width: "90%", height: "10rem" }}
      />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags color={color} raza={raza} />
      </Card.Body>
    </Card>
  );
};

export default MyCard;
