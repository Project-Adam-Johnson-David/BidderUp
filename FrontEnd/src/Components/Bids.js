import React, {useState} from 'react';
import image from '../images.jpeg'
import axios from "axios";
import Bid from "./Bid";
import Navbar from "./Navbar";

function Bids(props){
<<<<<<< HEAD
    const [bids, setBids] = useState([])
=======
   const [bids, setBids] = useState([])
>>>>>>> 7e6badfbbbdd63bf7ddea0cbf7d68eaff7abb839
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
<<<<<<< HEAD
            setBids(res.data);
            //bids = res.data;
            console.log(bids);
=======
           setBids(res.data);
           //bids = res.data;
           console.log(bids);
>>>>>>> 7e6badfbbbdd63bf7ddea0cbf7d68eaff7abb839
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
<<<<<<< HEAD
            .catch(error => console.error(error));
=======
        .catch(error => console.error(error));
>>>>>>> 7e6badfbbbdd63bf7ddea0cbf7d68eaff7abb839
    }

    function changeTab(){
        console.log("code was here");
        props.setTab("Browse");
    }

    return (
        <div >
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
<<<<<<< HEAD
            {/*<button onClick={props.toggleBidPage}>Browse</button>*/}
            <div className="bid-section">
                <div><img className="item-image" src={image}/></div>
=======
                    {/*<button onClick={props.toggleBidPage}>Browse</button>*/}
            <div className="bid-section">
            <div><img className="item-image" src={image}/></div>
>>>>>>> 7e6badfbbbdd63bf7ddea0cbf7d68eaff7abb839
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
