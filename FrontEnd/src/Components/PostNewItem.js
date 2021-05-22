import React, {useState} from 'react';
import Navbar from "./Navbar";
function PostNewItem(props){
    const [title, setTitle ] = useState("");
    const [price, setPrice] = useState(0);
    c
    function postItem(e){
        e.preventDefault();

    }

    return(
        <div>
            {/*<Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}*/}
            {/*        goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}*/}
            {/*        goPostNewItem={props.goPostNewItem}/>*/}
            Post new Item
            <form onSubmit={postItem}>
                <label>Item Name: </label>
                <input type="text"/>
                <label>Starting Price</label>
                <input type="number"/>
                <label>Upload image here</label>
                <input type="file"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default PostNewItem;