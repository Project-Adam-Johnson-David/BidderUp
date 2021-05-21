import React from 'react';
function Navbar(props){
    return (
      <div >
          <ul>
              <li><button className="navbar"onClick={props.goHome}>Home</button></li>
              <li><button className="navbar"onClick={props.goAccount}>View Account Information</button></li>
              <li><button className="navbar"onClick={props.goPayments}>Payments</button></li>
              <li><button className="navbar"onClick={props.goViewBalance}>View Balance</button></li>
              <h3>Welcome {props.username}!</h3>
              <button className="logOut" onClick={props.logOut}>Log out</button>
          </ul>
      </div>
    );
}
export default Navbar;