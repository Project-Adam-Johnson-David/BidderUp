import React, {useState} from 'react';
import axios from "axios";
// import emailjs from 'emailjs-com';
import {NotificationContainer, NotificationManager} from "react-notifications";

function Signup(props){
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");

    function back(){
        props.setPage("login");
    }

    async function submit(e){
        e.preventDefault();
        // console.log(username);
        // console.log(password1);
        // console.log(password2);
        // console.log(country);
        console.log(country);
        if(password1===password2 && (password1.length>6) && (country!=="")){
            let password = password1;
            let id = null;
            let balance= 0;
            await axios({
                method: 'post',
                url: "http://localhost:8080/user/signup",
                data: { username, password, id, country,balance, email},
                // params:{username, password},
                headers : {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                let status = res.data;
                if(status===200){
                    NotificationManager.success('Successful', 'Successfully signed up new user!');
                    console.log(res.status);
                }
                else{
                    NotificationManager.error('Unsuccessful', 'Sorry, we couldn\'t signup the new user.');
                    console.log("response was not 200"+res.data);
                }
            })
                .catch(err => alert(err));
        }
    }
    return(
        <div>
            <NotificationContainer/>
            <form onSubmit={submit}>
                <h3>Sign up</h3>
                <label>Username</label>
                <input type="text" onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={e=>setPassword1(e.target.value)}/>
                <label>Re-enter Password</label>
                <input type="password" onChange={e=>setPassword2(e.target.value)}/>
                <select onChange={e=>setCountry(e.target.value)}>
                    <option value=""></option>
                    <option value="USA">USA</option>
                    <option value="England">England</option>
                </select>
                <button type="submit">Sign up!</button>
                <button onClick={back}>Back to Login</button>
            </form>
        </div>

    );

}

export default Signup;