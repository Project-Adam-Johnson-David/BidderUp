import React from 'react';
function Navbar(props){
    return (
      <div >
          <ul>
              <li><button className="navbar"onClick={props.goHome}>Home</button></li>
              <li><button className="navbar"onClick={props.goAccount}>View Account Information</button></li>
              <li><button className="navbar"onClick={props.goPayments}>Payments</button></li>
              <li><button className="navbar"onClick={props.goViewBalance}>View Balance</button></li>
          </ul>
      </div>
    );
}
export default Navbar;