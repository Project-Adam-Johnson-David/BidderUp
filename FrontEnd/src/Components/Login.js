import React, {useState} from 'react';
import axios from "axios";

function Login(){
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    async function submitForm(e){
        e.preventDefault();
        console.log(username);
        console.log(password);
        await axios({
            method: 'post',
            url: "http://localhost:8080/login",
            data: { username, password},
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            let status = res.data;
            if(status===200){
                // NotificationManager.success('Successful', 'Successfully Submitted the Reimbursement Request!');
                console.log("code was here"+res.data);
                console.log(res.status);
            }
            else{
                // NotificationManager.error('Unsuccessful', 'Sorry, we couldn\'t change your email');
                console.log("response was not 200"+res.data);
            }
        })
            .catch(err => alert(err));
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <label>username</label>
                <input type="text" onChange={e=>{setUsername(e.target.value)}}/>
                <label>password</label>
                <input type="password" onChange={e=>{setPassword(e.target.value)}}/>
                <button>Login</button>
            </form>

        </div>

    );
}

export default Login;