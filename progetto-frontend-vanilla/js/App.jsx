import React from "react";
import {Button} from "test-1-marcandalli/atoms/button/Button"
import {Input} from "test-1-marcandalli/atoms/input/Input"
const App = () => ( 
    <div>
        <h1>Hello React</h1>
        <Button label={"gasssss"} />
        <Input id={"20"} onData={function onType(value) {
            window.alert("Ciao"+value);     
        }} />
    </div>
);

export default App;