import React from "react";
import azuki from "../img/azuki.png"
import {Button} from "fulgencio-react/umd/atoms/button/Button"

const App = () => ( 
    <div>
        <h1>Kosmos</h1>
        <Button label={"Sign up"} />
        <div>
        <img src={azuki} alt="Azuki #5558"/>
        </div>
  
    </div>
);

export default App;