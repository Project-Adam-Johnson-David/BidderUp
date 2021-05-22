import React, {useState} from 'react';
import Navbar from "./Navbar";
function PostNewItem(props){
    const [title, setTitle ] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    function postItem(e){
        e.preventDefault();

    }

    return(
        <div>
            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}
                    goPostNewItem={props.goPostNewItem}/>
            Post new Item
            <form onSubmit={postItem}>
                <label>Item Name: </label>
                <input type="text" onChange={e=>{setTitle(e.target.value)}}/>
                <label>Starting Price</label>
                {/*<input type="number" onChange={e=>{setPrice(e.target.value)}}/>*/}
                <label>Upload image here</label>
                <input type="file" onChange={e=>{setFile(e.target.files[0])}}/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default PostNewItem;