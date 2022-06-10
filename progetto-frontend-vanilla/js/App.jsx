import React from "react";
import azuki from "../img/azuki.png"
import {Image} from "fulgencio-react/atoms/image/Image"
import {Title} from "fulgencio-react/molecules/title/Title"

const App = () => ( 
    <div>
        <div>
            <Title text={"Kosmos"} />
        </div>

        <div>
            <Image src={azuki} alt="Azuki #5558" />
        </div>

    </div>
);

export default App;