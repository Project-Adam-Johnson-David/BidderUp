import React, {useState} from 'react';
import axios from "axios";
import Bid from "./Bid";

function Bids(props){


    return (
        <div className="bid-section">
            <p>Current bids</p>
            <input type="text" className="filter" placeholder="Filter by name"/>
            <select>
                <option value="0">Select car:</option>
                <option value="1">Date</option>
                <option value="2">Price</option>
            </select>
            <div className="scroll">
                <Bid/>
                <Bid/>
                <Bid/>
            </div>

        </div>

    );
}

export default Bids;