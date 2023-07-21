import React from "react";
import data from "../helper/data";
import InterviewAccord from "./InterviewAccord";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Question = () => {
  return (
    <div>
      <Container className="cont">
        <Row xs={1}>
          {data.map((item) => (
            <InterviewAccord key={item.id} {...item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Question; 
