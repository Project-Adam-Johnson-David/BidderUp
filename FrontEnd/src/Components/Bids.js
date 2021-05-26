import React, {useState} from 'react';
import image from '../images.jpeg'
import axios from "axios";
import Bid from "./Bid";
import Navbar from "./Navbar";

function Bids(props){
    let username = sessionStorage.getItem("username");
    const [bids,setBids] = useState([]);
    const [items, setItems] = useState([]);

    // React.useEffect(()=>{
    //     getBids();
    // },[]);

    async function getBids(){
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/bids/${username}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            let response = res.data;
            setBids(response);
            console.log(bids);
        })
            .catch(err => alert(err));
    }

    function getItems() {

    }

    return (
        <div >
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
                    <button onClick={event => {event.preventDefault();getBids();getItems()}}>Render me</button>
                {bids.map(d=>{
                    return (
                        <div key={d.id}>{d.title}</div>
                    )
                })}


        </div>

    );
}

export default Bids;