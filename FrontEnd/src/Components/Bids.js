import React, {useState} from 'react';
import axios from "axios";
import Bid from "./Bid";
import Navbar from "./Navbar";

function Bids(props){
    const [bids, setBids] = useState([])

    React.useEffect(()=>{
        getData();
    },[]);

    let amount = 40;
    let bidder ="test";
    let date = "";
    let id = null;
    let owner = "adam";


    async function getData(){
        let username= props.username;
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/bids/${username}`,
            // params:{username, password},
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            let status = res.data;//data as JSON of all the bids that use is receiving

            if(status===200){
                // NotificationManager.success('Successful', 'Successfully Submitted the Reimbursement Request!');
                console.log("code was here"+res.data);
                console.log(res.status);
            }
            else{
                // NotificationManager.error('Unsuccessful', 'Sorry, we couldn\'t change your email');
                console.log("response was not 200"+res.data);
            }
        })
            .catch(err => alert(err));
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
                <p>Current bids</p>
                {/*<button onClick={postNewItem}>Post a new item</button>*/}
                <input type="text" className="filter" placeholder="Filter by name"/>
                <select>
                    <option value="0">Sort by:</option>
                    <option value="1">Date</option>
                    <option value="2">Price</option>
                </select>
                <div className="scroll">
                    <Bid/>
                    <Bid/>
                    <Bid/>
                </div>
            </div>


        </div>

    );
}

export default Bids;