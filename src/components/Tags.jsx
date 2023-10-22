import Badge from "react-bootstrap/Badge";

const Tags = ({ color, raza }) => {
  return (
    <Badge bg={color} style={{ width: "100%" }}>
      {raza}
    </Badge>
  );
};

export default Tags;
