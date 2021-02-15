import React from "react";
import { Button } from "reactstrap";
import he from 'he'

export const Answer = ({ text, correct, setResult, setIndex, index }) => {
  function answerResult() {
    setIndex(index + 1);
    correct === text ? setResult(true) : setResult(false);
  }

  var decode = he.decode(String(text));

  return (
    <Button className="ansButton" onClick={answerResult}>
      {decode}
    </Button>
  );
};