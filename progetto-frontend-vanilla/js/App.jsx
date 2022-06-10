import React from "react";
import azuki from "../img/azuki.png"
import {Button} from "fulgencio-react/atoms/button/Button"
import {TextBold} from "fulgencio-react/atoms/text-bold/TextBold"
import {Input} from "fulgencio-react/atoms/input/Input"

const App = () => ( 
    <div>
        <TextBold text="Kosmos" />
        <Image src={azuki} alt="Azuki #5558" />
  
    </div>
);

export default App;