import React, {useState} from 'react';

function Item(props){
    const [price, setPrice] = useState(props.price);

    function placeBid(e){
        e.preventDefault();
        console.log("bid placed " + price);
    }
return (
    <div className="item-display">
        <div>{props.title}</div>

        <img className="item-image" src={props.image} alt="image"/>
        <div>Price: {props.price}</div>
        <div>Min Bid: {props.price+props.increment}</div>
        <input type="number" onChange={e=>{setPrice(e.target.value)}} />
        <button onClick={placeBid}>Bid</button>
    </div>

);
}
export default Item;

