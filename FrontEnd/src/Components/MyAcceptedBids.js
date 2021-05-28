import React, {useState} from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import {NotificationManager} from "react-notifications";

function MyAcceptedBids(props){

    React.useEffect(()=>{
        searchData();

    },[]);
    const [query, setQuery] = useState("*");
    const [bids, setBids] = useState([]);

    let username= sessionStorage.getItem("username");
    console.log("hello?");
    async function searchData() {
        console.log(username);
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/accepted/${username}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log("this should return");
            console.log(res.data);
            setBids(res.data);
        })
            .catch(err => alert(err));
    }

    return (
        <div>
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
            <div className="pending-bids">

            </div>

            <div className="view-pending-bids">
                <h3>Results:</h3>
                <div>
                    {bids.map(b => {
                        return(
                            <div className="bid" key={b.id}>
                                <div className="bid-info">
                                    <p>Owner: {b.owner}</p>
                                    <p>Bidder: {b.item}</p>
                                    <p>Price: {b.amount}</p>
                                    <p>Date submitted: {b.date}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default MyAcceptedBids;