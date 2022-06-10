import React from "react";
import azuki from "../img/azuki.png"
import {TextBold} from "fulgencio-react/atoms/text-bold/TextBold"
import {Image} from "fulgencio-react/atoms/image/Image"

const App = () => ( 
    <div>
        <TextBold text={"Kosmos"} />
        <Image src={azuki} alt="Azuki #5558" />
    </div>
);

export default App;