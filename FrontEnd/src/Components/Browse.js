import React,{useState} from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import Item from "./Item";

function Browse(props){
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [exchangeCoeff, setExchangeCoeff] = useState(0)

    const from = "USD"
    const to = "PHP"
    const conversion = from+"_"+to
    const url = "https://free.currconv.com/api/v7/convert?q=" + conversion + "&compact=ultra&apiKey=79bbd7ca2e5ef55990e6"

    async function convert() {
        // await axios.get('https://free.currconv.com/api/v7/convert?q=+conversion+&compact=ultra&apiKey=79bbd7ca2e5ef55990e6')
        await axios.get(url)
        .then(response => {

            // let data = response.data[conversion]
            // var cc = require('currency-codes');
            // console.log(cc.country('United States of America (The)'));
            // console.log(data)
            // setExchangeCoeff(data)
        })

        .catch(err => alert(err))
    }

    async function searchData(e){
        convert();
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
            console.log(data[0]);
            //data.price.map(x => x * exchangeCoeff)
            data.forEach(x => x.price = x.price*exchangeCoeff)
            console.log(data[0])
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
                            <Item key={d.id} title={d.title} price={d.price} owner={d.owner}
                                  image={d.image} increment={d.increment} id={d.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Browse;