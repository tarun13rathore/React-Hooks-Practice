//Uncontrolled Form Components(controlled by DOM) Handling Basic Form in React with Ref & useRef
import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";

const UseReff = () => {
  // it like a useState only and its preserve the value. NO rerender.
  const luckyname = useRef(null);
  const luckyEmail = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyname.current.value;
    const email = luckyEmail.current.value;
    name === "" ? alert("plz fill the data") : setShow(true);
    email === "" ? alert("plz fill the data") : setShow(true);
  };
  return (
    <>
      <div>
        <h5 className="text-white text-center pt-4">
          Uncontrolled Form Components(controlled by DOM) Handling Basic Form in
          React with Ref & useRef
        </h5>
      </div>
      <div className="container main_usestate text-center">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="luckyname">Name</label>
            <input
              type="text"
              className=" form-control"
              id="luckyname"
              ref={luckyname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="luckyEmail">Email address</label>
            <input
              type="text"
              className="form-control"
              id="luckyEmail"
              ref={luckyEmail}
            />
          </div>
          <div className="pt-3">
            <Button variant="outline-warning" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="main_usestate1 mt-5">
        <h5>
          {show
            ? `your lucky Name  is ${luckyname.current.value} and Email ${luckyEmail.current.value}`
            : ""}
        </h5>
      </div>
    </>
  );
};

export default UseReff;
