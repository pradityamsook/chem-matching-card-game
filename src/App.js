import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Switch, Route, BrowserRouter as Router } from "react-dom";

// internal funtionals.
import Create from "./Create";
import DragDrop from "./dragDrop";
import { uniqueElementArray } from "./uniqueCardChem";

// css style.
import "./style/App.css";
import "./style/resize.css";

// function shuffleCard(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * length);
//     const currentIndex = i + 1;
//     const temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// }

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [cards, setCards] = useState(uniqueElementArray);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i].type);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <input
          style={{ width: "20rem" }}
          type="text"
          placeholder="ตัวอย่าง ปรียารัตน์ เจริญสำราญ"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="button">
          ลงชื่อ
        </button>
      </Form>
      {name && submit ? <div>{name} ได้ทำการลงชื่อทำแบบฝึกหัด</div> : ""}
      <br />
      <br />
      {/* <div>
        {cards.map((card) => {
          return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Container>
              <Row>
                <Col key={card.id} sm={4}>
                  <Image
                    className="resize"
                    src={card.image.default}
                    alt={card.type}
                  />
                  <div>{card.type}</div>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div> */}
      <DragDrop />
    </div>
  );
}

export default App;
