import React from "react";
import azuki from "../img/azuki.png"
import {Button} from "fulgencio-react/atoms/button/Button"
import {Input} from "fulgencio-react/atoms/input/Input"

const App = () => ( 
    <div>
        <h1>Kosmos</h1>
        <Button label={"Sign up"} />
        <Input placeholder="Insert text" type="date"/>
        <div>
        <img src={azuki} alt="Azuki #5558"/>
        </div>
  
    </div>
);

export default App;