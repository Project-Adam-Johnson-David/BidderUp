import React, {useState} from 'react';
import axios from "axios";
function Bid(props){
    const [bids, setBids] = useState([]);

    React.useEffect(()=>{
        getBidsByItemName();
        console.log(bids);
    },[]);


        const getBidsByItemName = () => {
        let item= props.item;
        let itemName = item.title;
        let owner = item.owner;
            axios({
                method: 'get',
                url: `http://localhost:8080/bid/bids/${owner}/${itemName}`,
                headers : {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
            console.log(res.data);
            setBids(res.data);
            //console.log(result);
            //setBids(result);
               //setBids(res.data);
               //bids = res.data;
               console.log(bids);
            }).then(rest => {
                console.log(bids);
            })
                .catch(err => alert(err));
        }



    return(
    <div className="bids">
         {bids.map(b => {
            return(
                <div className="bid" key={b.id}>
                    <div>
                        <p>Bidder: {b.bidder}</p>
                        <p>Price: {b.amount}</p>
                        <p>Date submitted: {b.date}</p>
                    </div>
                    <button className="accept">accept</button>
                    <button  className="deny">deny</button>
                </div>
            )
         })}
    </div>
   )
}

export default Bid;