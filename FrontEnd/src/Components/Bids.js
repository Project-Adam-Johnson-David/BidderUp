import React, {useState} from 'react';
import axios from "axios";
import Bid from "./Bid";
import Navbar from "./Navbar";
import image from '../images.jpeg'
function Bids(props){
    const [bids, setBids] = useState([])

    React.useEffect(()=>{
        getData();
    },[]);

    let amount = 40;
    let bidder ="test";
    let date = "";
    let id = null;
    let owner = props.username;

//    async function postNewItem(e){
//        e.preventDefault();
//        await axios({
//            method: 'post',
//            url: "http://localhost:8080/bid/post_bid",
//            data: { owner, bidder, amount, date, id},
//            // params:{username, password},
//            headers : {
//                'Content-Type': 'application/json'
//            }
//        }).then(res => {
//            let status = res.data;//data as JSON of all the bids that use is receiving
//            if(status===200){
//                // NotificationManager.success('Successful', 'Successfully Submitted the Reimbursement Request!');
//                console.log("code was here"+res.data);
//                setBids(res.data);
//            }
//            else{
//                // NotificationManager.error('Unsuccessful', 'Sorry, we couldn\'t change your email');
//                console.log("response was not 200"+res.data);
//            }
//        })
//            .catch(err => alert(err));
//
//    }

    async function getData(){
        let username= props.username;
        await axios({
            method: 'get',
            url: `http://localhost:8080/bid/bids/${username}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            let bids = res.data;//data as JSON of all the bids that use is receiving
            setBids(bids);
            console.log(bids);

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
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}
                    goPostNewItem={props.goPostNewItem}/>
                    <button onClick={props.toggleBidPage}>Browse</button>
            <div className="bid-section">
            <div><img className="item-image" src={image}/>
            <h6>New York Cosmos Jersey</h6></div>


                <input type="text" className="filter" placeholder="Filter by name"/>
                <select>
                    <option value="0">Select car:</option>
                    <option value="1">Date</option>
                    <option value="2">Price</option>
                </select>
                <p>Current Bids</p>
                <div className="scroll">
                {bids.map(d=>{

                return(
                    <Bid  key={d.id} owner={d.username} bidder={d.bidder} amount={d.amount} date={d.date} />
                );
                     })}

                </div>
            </div>


        </div>

    );
}
 //<button onClick={postNewItem}>Post a new item</button>
export default Bids;