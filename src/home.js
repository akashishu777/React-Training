import { useEffect, useState } from "react";

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
    
        fetch('https://api.predic8.de:443/shop/products/')
        .then(response => response.json())
        .then(json => setData(json.products));

    }, []);

    const myList = data.map((item) => <p>{item.name}</p>);

    return (
        <div className="container">
           <h1 className="title">Grofers</h1>

           <h3>List of fruites available in store</h3>
           {myList}
   
        </div>
    )
}

export default Home;