// useEffect Hook perform side Effect,Fetching and consuming data from a server API,
//Setting up a subscription and Updating the DOM in React.
// and encapsulating code that has 'side effect' if you are familiar with react life-cycle method
// you can think componentDidMount,componentDidUpdate & componentWillUnmount combined.

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

//useState hook we manage the state..Example-1----------------------------------

// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(
//     () => {
//       //callback function
//       count >= 1
//         ? (document.title = `Count(${count})`)
//         : (document.title = `Count`);
//     },
//     //conditionally rendering specify conditions
//     [count]
//   );

//   return (
//     <>
//       <div>
//         <h4 className="text-white text-center pt-4">
//           Manage effect title with the count state in React with useState and
//           useEffect Hook
//         </h4>
//       </div>
//       <div className="container main_usestate text-center">
//         <div>
//           <h1>{count}</h1>
//           <Button variant="outline-info" onClick={() => setCount(count + 1)}>
//             Click Me
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

//React Hook useEffect CleanUp Function Example-2----------------------------------

const UseEffect = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  });
  return (
    <>
      <div>
        <h4></h4>
      </div>
      <div className="container main_usestate text-center">
        <div>
          <p>The Actual size of window is :</p>
          <h1>{widthCount}</h1>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
