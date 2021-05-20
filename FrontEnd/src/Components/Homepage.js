import React, {useState} from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Bids from "./Bids";

function Homepage(props){
    const [currentPage, setCurrentPage] = useState("Homepage");
    // const [username, setUsername] = useState(props.username);

    function goHome() {
        setCurrentPage("Homepage");
        alert("go to home!");
    }


    function goAccount() {
        setCurrentPage("AccountInfo");
        alert("go to account");
    }

    function goPayments() {
        setCurrentPage("Payments");
        alert("go to payments");
    }

    function goViewBalance() {
        setCurrentPage("ViewBalance");
        alert("go to balance");
    }

    // if(currentPage==="AccountInfo"){
    //     // return <div>Account Info</div> ;
    // }
    // else if(currentPage==="Payments"){
    //     // return <div>Payments</div>
    // }
    // else if(currentPage==="ViewBalance"){
    //     // return <div>ViewBalance</div>
    // }
    return (
        <div className="homepage">
            <div>
                <Navbar goHome={goHome} goAccount={goAccount} goPayments={goPayments} goViewBalance={goViewBalance}/>
            </div>
            <h3>Welcome {props.username}!</h3>
            <button className="logOut" onClick={props.logOut}>Log out</button>
            <Bids username={props.username}/>
        </div>

    );
}

export default Homepage;