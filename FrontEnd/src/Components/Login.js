import React, {useState} from 'react';
import axios from "axios";
import Homepage from "./Homepage";

function Login(){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [loggedIn, setLoggedIn]= useState(false);


    // useEffect(()=>{
    // },[asdfasdfasdf]);

    function logOut(){
        setLoggedIn(false);
    }

    async function submitForm(e){
        e.preventDefault();
        console.log(username);
        console.log(password);

        let id = null;
        let country = "country";
        let balance = 4;
        await axios({
            method: 'post',
            url: "http://localhost:8080/user/login",
            data: { username, password, id, country,balance},
            // params:{username, password},
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            let status = res.data;
            if(status===200){
                // NotificationManager.success('Successful', 'Successfully Submitted the Reimbursement Request!');
                console.log("code was here"+res.data);
                setLoggedIn(true);
                console.log(res.status);
            }
            else{
                // NotificationManager.error('Unsuccessful', 'Sorry, we couldn\'t change your email');
                console.log("response was not 200"+res.data);
            }
        })
            .catch(err => alert(err));
    }

    if(loggedIn===true){
        return (
            <Homepage username={username} logOut={logOut}/>
        );
    }
    else{
        return (
            <div className="login">
                <form onSubmit={submitForm}>
                    <p>Login</p>
                    <input type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="Username"/>
                    <br/>
                    <input type="password" onChange={e=>{setPassword(e.target.value)}} placeholder="password"/>
                    <br/>
                    <button login-button>Login</button>
                    <br/>
                    <p>Don't have an account?</p>
                    <button login-button>Sign up here!</button>
                </form>
            </div>
        );
    }

}

export default Login;