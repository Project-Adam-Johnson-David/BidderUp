import React, {useState} from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import {NotificationManager} from "react-notifications";

function MyPendingBids(props){
    const [query, setQuery] = useState("*");
    const [bids, setBids] = useState([]);

    let username= sessionStorage.getItem("username");
    async function searchData(e) {
        console.log(username);
        e.preventDefault();
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/${username}/${query}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setBids(res.data);
        })
            .catch(err => alert(err));
    }

    return (
        <div>
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
            <div className="pending-bids">
                <div className="filter">
                    <label>Search for items</label>
                    <input type="text" placeholder="filter"
                           onChange={(e)=>{setQuery(e.target.value)}}/>
                    <button onClick={searchData}>Search</button>
                </div>
            </div>

            <div className="view-pending-bids">
                <h3>Results:</h3>
                <div>
                    {bids.map(b => {
                        return(
                            <div className="bid" key={b.id}>
                                <div>
                                    <p>Bidder: {b.bidder}</p>
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
export default MyPendingBids;