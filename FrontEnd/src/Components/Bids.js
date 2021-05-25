import React, {useState} from 'react';
import image from '../images.jpeg'
import axios from "axios";
import Bid from "./Bid";
import Navbar from "./Navbar";

function Bids(props){
    let username = sessionStorage.getItem("username");
    let bids;
    let items;

    React.useEffect(()=>{
        getBids();
        //getItems();
    },[]);

    async function getBids(){
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/bids/${username}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            bids = res.data;
            console.log(bids);
        })
            .catch(err => alert(err));
    }

    return (
        <div >
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
            <div className="bid-section">
            <div><img className="item-image" src={image}/></div>
                <p>Current bids</p>
                <input type="text" className="filter" placeholder="Filter by name"/>
                <select>
                    <Bid/>
                </select>
                <div className="scroll">
                </div>
            </div>


        </div>

    );
}

export default Bids;