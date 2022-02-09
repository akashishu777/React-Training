import react, { useState } from "react";
import reactDom from "react-dom";
import Nav from "./nav";
import Cart from "./cart";
import Home from "./home";
import './style.css';


const App = () => {

    const [appType, setAppType] = useState('Home');

    const [value, setValue] = useState('Grofers Home');

    const handleToggle = (val) => {
        setAppType(val);
        if (val === 'Cart') {
            setValue('Grofers Cart');
        } else if (val === 'Home') {
            setValue('Grofers Home');
        }
    };

    return (
        <div>
            <h1 className="title">{value}</h1>  
            <Nav handleChange={(val) => handleToggle(val)} />
            { appType === 'Home' ? <Home /> : <Cart />}
        </div>
    )
}



const rootElement = document.getElementById("root");

reactDom.render(<App /> , rootElement);