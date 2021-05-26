import React, {useState} from 'react';
import image from '../images.jpeg'
import axios from "axios";
import Bid from "./Bid";
import Navbar from "./Navbar";

function Bids(props){
   const [bids, setBids] = useState([])
    const [items, setItems] = useState([])
//let bids = [];

    let username = sessionStorage.getItem("username");
    React.useEffect(()=>{
        getBids().then(r => console.log(r));
        getItems();
    },[]);

    async function getBids(){
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/bids/${username}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
           setBids(res.data);
           //bids = res.data;
           console.log(bids);
        })
            .catch(err => alert(err));
    }

    async function getItems(){
        console.log(username+" is the user name correct here?");
        await axios({
            method: 'get',
            url: `http://localhost:8080/item/owner_items/${username}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setItems(response.data);
            console.log(items);
        })
        .catch(error => console.error(error));
    }

    function changeTab(){
        console.log("code was here");
        props.setTab("Browse");
    }

    return (
        <div >
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
                    {/*<button onClick={props.toggleBidPage}>Browse</button>*/}
            <div className="bid-section">
            <div><img className="item-image" src={image}/></div>
                <p>Current bids</p>
                <input type="text" className="filter" placeholder="Filter by name"/>

                <div className="scroll">
                    {bids.map(d=>{
                        return (
                            <Bid key={d.id} bidder={d.bidder} amount={d.amount} date={d.date}/>
                        )
                    })}
                </div>
            </div>


        </div>

    );
}

export default Bids;
