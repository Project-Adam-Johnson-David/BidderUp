import React, {useState} from 'react';
import axios from "axios";
function Bid(props){
    const [bids, setBids] = useState([]);
    React.useEffect(()=>{
        getBidsByItemName();
    },[]);

        async function getBidsByItemName(){
        let item= props.item;
        let itemName = item.title;
        let owner = item.owner;
            await axios({
                method: 'get',
                url: `http://localhost:8080/bid/bids/${owner}/${itemName}`,
                headers : {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
            let result = res.data;
            setBids(result);
               //setBids(res.data);
               //bids = res.data;
               console.log(bids);
            })
                .catch(err => alert(err));
        }



    return(
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
     <div>hello werldd</div>
   )
}

export default Bid;