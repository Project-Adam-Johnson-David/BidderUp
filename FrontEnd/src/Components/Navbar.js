import React from 'react';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
function Navbar(props){
    const history = useHistory();
    function clear(){
    console.log("here");
        history.push("/TestLogin");
        localStorage.clear();
        sessionStorage.clear();

    }

    return (
      <div className="nav-bar">
          <ul>
              <li><Link to="/HomePage">Home</Link></li>
              <li><Link to="/Account">View Balance</Link></li>
              <li><Link to="/Bids">Bids</Link></li>
              <li><Link to="/PostNewItem">Post New Item</Link></li>
              {/* <li><button className="navbar"onClick={props.goHome}>Home</button></li>
              <li><button className="navbar"onClick={props.goAccount}>View Account Information</button></li>
              <li><button className="navbar"onClick={props.goPayments}>Payments</button></li>
              <li><button className="navbar"onClick={props.goViewBalance}>View Balance</button></li> */}
               {/*<button className="logOut" onClick={props.logOut}>Log out</button>*/}
               <li><Link to="/" onClick={clear}>Log Out</Link></li>
          </ul>
          <br></br>
      </div>
    );
}
export default Navbar;