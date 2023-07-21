import React, { useEffect, useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
import { Col } from "react-bootstrap";

const InterviewAccord = (props) => {
  const [click, setClick] = useState(true);

  useEffect(() => {
    console.log(click);
  }, []);

  return (
    <Col className="list-unstyled h5 text-start item-container card">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="question">
          {props.id}.{props.question}
        </h3>
        <div className="up-down" onClick={() => setClick(!click)}>
          {click ? arrowdown : arrowup}
        </div>
      </div>

      {click || <div className="text-white par">{props.answer}</div>}
    </Col>
  );
};

export default InterviewAccord;
