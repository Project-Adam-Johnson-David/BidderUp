import React, {useState} from 'react';
import axios from "axios";
function Bid(props){
let obj = "";
    //const [objId, setObjId] = useState();
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
               console.log(bids);
            }).then(rest => {
                console.log(bids);
            })
                .catch(err => alert(err));
        }

    async function changeStatus(e){
        let value = e.target.value;
        //let bid = e.target.bid;
        console.log(value);
        //console.log(objId);
        let id = obj;
        await axios({
            method: "post",
            url: `http://localhost:8080/bid/bid_status/${value}`,
            data: id,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {alert(res.data + " submitted");})
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
                    <button value="accept" onClick={(e) => {obj = b.id; changeStatus(e) }} className="accept">accept</button>
                    <button value="deny" onClick={(e) => {obj = b.id; changeStatus(e)}} className="deny">deny</button>
                </div>
            )
         })}
    </div>
   )
}
export default Bid;