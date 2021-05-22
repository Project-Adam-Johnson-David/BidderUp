import React,{useState} from 'react';
import Navbar from "./Navbar";

function Browse(props){
    const [data, setData] = useState([]);
    // const [query]
    function searchData(){

    }


    return(
        <div>
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}/>
            <button onClick={props.toggleBidPage}>Browse</button>
            <div className="browse-section">
                <div className="filter">
                    <label>Search for items</label>
                    <input type="text" placeholder="filter"/>
                </div>
                <div className="browse-section-display">

                </div>
            </div>
        </div>
    );
}
export default Browse;