import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import MyCard from "./components/MyCard";

var perritos = [
  {
    nombre: "Mia",
    descripcion:
      "Pequeña perrita con un gran corazón. Ideal para familias activas. ¿Serás su héroe?",
    imagen:
      "https://cdn.pixabay.com/photo/2018/09/04/18/07/pug-3654360_1280.jpg",
    raza: "pug",
    color: "primary",
  },
  {
    nombre: "Toby",
    descripcion:
      "Joven, juguetón y listo para ser tu compañero fiel. ¡Adóptalo y dale un hogar feliz!",
    imagen:
      "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg",
    raza: "Labrador",
    color: "secondary",
  },
  {
    nombre: "Cano",
    descripcion:
      "Amante de los abrazos y experto en hacer sonreír. Este peludo necesita un hogar amoroso.",
    imagen:
      "https://cdn.pixabay.com/photo/2020/01/02/14/01/siberian-husky-4735878_1280.jpg",
    raza: "Husky",
    color: "success",
  },
  {
    nombre: "Pitu",
    descripcion:
      "Hermosa, tranquila y lista para llenar tu vida de amor. ¡Hazla parte de tu familia hoy!",
    imagen:
      "https://cdn.pixabay.com/photo/2020/01/21/16/26/yorkshire-terrier-4783327_1280.jpg",
    raza: "Yorkshire",
    color: "danger",
  },
];

const textFooter =
  "¡Adopta a tu compañero peludo en nuestra página web dedicada a la adopción de perros! Encuentra a tu nuevo mejor amigo entre una variedad de perros en busca de un hogar amoroso. Explora perfiles detallados, conoce sus historias y encuentra el compañero perfecto que se adapte a tu estilo de vida. Ayuda a darles a estos perros una segunda oportunidad y experimenta la alegría de la adopción. ¡Te estamos esperando para hacer posible esta hermosa unión entre un perro y su nuevo dueño!";

function App() {
  const title = "Adopta un perrito";

  return (
    <Container>
      <Row className="mt-4">
        <Header title={title} />
      </Row>
      <Row className="gap-4 mt-4 justify-content-center">
        {perritos.map(({ nombre, descripcion, imagen, raza, color }, index) => {
          return (
            <MyCard
              key={index}
              nombre={nombre}
              descripcion={descripcion}
              imagen={imagen}
              raza={raza}
              color={color}
            />
          );
        })}
      </Row>
      <Row className="mt-4">
        <Footer text={textFooter} />
      </Row>
    </Container>
  );
}

export default App;
