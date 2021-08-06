// 1: Always write it inside the component or function
// 2: Component name must be PascalCase (first letter should be uppercase)
// 3: we can directly import or we can directly write it using React.hookName.
// 4: Don’t call Hooks inside loops, conditions, or nested functions.

import React, { useState } from "react";
import { Button } from "react-bootstrap";

const RulesHooks = () => {
  const [name, setName] = useState("Hi Tarun!");
  const changeName = () => {
    setName("Tarun is a MERN Developer... 🤩");
  };
  return (
    <>
      <div className="container main_usestate text-center">
        <div>
          <h3 className="text-white ">{name}</h3>
          <div>
            <Button variant="outline-success" onClick={changeName}>
              Success
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RulesHooks;
