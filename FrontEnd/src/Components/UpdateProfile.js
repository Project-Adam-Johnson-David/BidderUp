import React, { useState } from 'react'
import {NotificationManager, NotificationContainer} from "react-notifications";
import axios from "axios";


function UpdateProfile() {
    const [username, setUsername] = useState(sessionStorage.getItem("username") || "")
    const [country, setCountry] = useState(sessionStorage.getItem("country") || "")
    const [newUsername, setNewUsername] = useState("")
    const [newCountry, setNewCountry] = useState("")

    const user = {
        username: username,
        country: country
    }

    async function postUpdate(path) {

        await axios.post(path, user)
            .then(response => {
                NotificationManager.success('Successful', 'Successfully Updated Profile!');
            })
            .catch(error => {
                console.log(error)
            })
    }

    

    const handleUpdateUsername = (e) => {
        e.preventDefault()
        setUsername(newUsername)
        console.log(newUsername)
        sessionStorage.setItem('username', newUsername)
        NotificationManager.success('Successful', 'Successfully Updated Profile!');
        //postUpdate("http://localhost:8080/user/update_username")
    }

    const handleUpdateCountry = (e) => {
        e.preventDefault()
        setCountry(newCountry)
        console.log(newCountry)
        sessionStorage.setItem('country', newCountry)
        //NotificationManager.success('Successful', 'Successfully Updated Profile!');
        NotificationManager.success('Success')
        //postUpdate("http://localhost:8080/user/update_country")
    }

    return (
        <div>
            <NotificationContainer/>
                <form onSubmit={handleUpdateUsername}>
                    <h3>Username: {username}</h3>
                    <input type="text" placeholder="new username" onChange={e => setNewUsername(e.target.value)} />
                    <button type="submit" >update</button>
                </form> 
                <form onSubmit={handleUpdateCountry}>
                    <h3>Country: {country}</h3>
                <select onChange={e=>setCountry(e.target.value)}>
                    <option value=""></option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                </select>
                    <button type="submit" >update</button>
                </form> <br></br>
        </div>
    )
}


export default UpdateProfile
