import React, {useEffect} from 'react';
function Bid(props){

    let owner = props.owner
    let bidder = props.bidder;
    let amount = props.amount;
    let date = props.date;



    return(

        <div className="bid">

            <div>
                <p>Bidder {bidder}</p>
                <p>Price {amount}</p>
                <p>Date submitted {date}</p>

            </div>
            <button className="accept">accept</button>
            <button  className="deny">deny</button>
        </div>
    );
}

export default Bid;