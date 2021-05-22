import React, {useState} from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Bids from "./Bids";
import Browse from "./Browse";
import Account from "./Account";
import PostNewItem from "./PostNewItem";

function Homepage(props){
    const [currentPage, setCurrentPage] = useState("Homepage");
    const [bidsPage, setBidsPage] = useState((localStorage.getItem("bidsPage")=="true")||false);

    React.useEffect(()=>{
        console.log(bidsPage+"should be saved");
        localStorage.setItem("bidsPage", bidsPage.toString());
    },[bidsPage]);



    function toggleBidPage(){
        setBidsPage(!bidsPage);
    }

    function goHome() {
        setCurrentPage("Homepage");
        // alert("go to home!");
    }


    function goAccount() {
        setCurrentPage("AccountInfo");
        // alert("go to account");
    }

    function goPayments() {
        setCurrentPage("Payments");
        // alert("go to payments");
    }

    function goViewBalance() {
        setCurrentPage("ViewBalance");
        // alert("go to balance");
    }

    function goPostNewItem(){
        setCurrentPage("NewItem");
    }

    // if(currentPage==="AccountInfo"){
    //     // return <div>Account Info</div> ;
    // }
    // else if(currentPage==="Payments"){
    //     // return <div>Payments</div>
    // }
    if(currentPage==="NewItem"){
        return(
            <div>
                <Navbar goHome={goHome} goAccount={goAccount} goPayments={goPayments}
                        goViewBalance={goViewBalance} username="{username}" logOut="{logOut}"
                        goPostNewItem={goViewBalance}/>
                <PostNewItem/>
            </div> ) ;


    }
    else if(currentPage==="ViewBalance"){
        return <Account goHome={goHome} goAccount={goAccount} goPayments={goPayments} goViewBalance={goViewBalance}
                        goPostNewItem={goPostNewItem}  username={props.username} toggleBidPage={toggleBidPage}
                        logOut={props.logOut} username={props.username}/>
    }
    else if(bidsPage===false&&currentPage==="Homepage"){
        return (
            <Browse goHome={goHome} goAccount={goAccount} goPayments={goPayments} goViewBalance={goViewBalance}
                    goPostNewItem={goPostNewItem}  username={props.username} toggleBidPage={toggleBidPage}
                    logOut={props.logOut}/>
        );

    }
    else{
        return (
            <div className="homepage">
            <Bids goHome={goHome} goAccount={goAccount} goPayments={goPayments} goViewBalance={goViewBalance}
                  username={props.username} toggleBidPage={toggleBidPage} logOut={props.logOut}/>
        </div>);

    }

}

export default Homepage;