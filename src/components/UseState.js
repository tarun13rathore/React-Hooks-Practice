//  useState() hook allows one to declare a state variable inside a function.
//  It should be noted that one use of useState() can only be used to declare one state variable.

import React, { useState } from "react";

import { Button } from "react-bootstrap";

//useState hook we manage the state..Example-1----------------------------------

// const UseState = () => {
//   const [count, seCount] = useState(0);
//   const IncNum = () => {
//     seCount(count + 1);
//   };
//   return (
//     <>
//       <div>
//         <h3 className="text-white text-center pt-4">
//           Manage the count state in React with useState Hook
//         </h3>
//       </div>
//       <div className="container main_usestate text-center">
//         <div>
//           <h1>{count}</h1>
//           <Button variant="outline-info" onClick={IncNum}>
//             Click Me
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

//useState hook we manage the state..Example-2------------------------------

const UseState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, email: email };
    setData([...data, newEntry]);
    console.log(data);
  };
  return (
    <>
      <div>
        <h4 className="text-white text-center pt-4">
          Controlled Component(controled by REACT) Handling Basic Form in React
          with useState Hook
        </h4>
      </div>
      <div className="container main_usestate text-center">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className=" form-control"
              name="name"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pt-3">
            <Button variant="outline-warning" type="submit" className="">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="main_usestate1">
        {data.map((curEle) => {
          return (
            <div>
              <p>{`Name : ${curEle.name}`}</p>
              <p>{`Email : ${curEle.email}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseState;
