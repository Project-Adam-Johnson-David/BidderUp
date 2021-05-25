import React,{useState} from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import Item from "./Item";

function Browse(props){
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    async function searchData(e){
        console.log(query);
        e.preventDefault();
        await axios({
            method: 'get',
            url: `http://localhost:8080/item/browse/${query}`,
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setData(res.data);
            console.log(data);
        })
            .catch(err => alert(err));
    }
    return(
        <div>
            <div className="browse-section">
                <div className="filter">
                    <label>Search for items</label>
                    <input type="text" placeholder="filter"
                           onChange={(e)=>{setQuery(e.target.value)}}/>
                    <button onClick={searchData}>Search</button>
                </div>
                <div className="browse-section-display">
                    {data.map(d=>{
                        return (
                            <Item key={d.id} title={d.title} price={d.price}
                                  image={d.image} increment={d.increment}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Browse;