import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";

function Account(props) {
    // const [balance, setBalance] = useState(localStorage.getItem("user").balance)
    const [balance, setBalance] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const [withdrawal, setWithdrawal] = useState(0)
    let username = props.username;



    React.useEffect(()=>{
        getBalance();
    },[])

    async function getBalance() {
        await axios.get('http://localhost:8080/user/getBalance', null, {params: {username}})
            .then(response => {
                const newBalance = response.data;
                setBalance(newBalance)
                alert("account deposited into successfully")
                //history.push('/EmployeeHome')
            })
            .catch(error => {
                console.log(error)
            })
    }

    async function postDeposit() {
        //axios.post('http://localhost:8080/balance', user)
        await axios.post('http://localhost:8080/user/deposit', null, {params: {deposit, username}})
            .then(response => {
                const newBalance = Number(balance) + Number(deposit)
                setBalance(newBalance)
                alert("account deposited into succesfully")
                //history.push('/EmployeeHome')
            })
            .catch(error => {
                console.log(error)
            })
    };

    async function postWithdrawal() {

        //axios.post('http://localhost:8080/balance', user)
        await axios.post('http://localhost:8080/user/withdrawal', null, {params: {withdrawal ,username}})
            .then(response => {
                console.log(response)
                const newBalance = Number(balance) - Number(withdrawal)
                setBalance(newBalance)
                alert("account withdrawn from succesfully")
                //history.push('/EmployeeHome')
            })
            .catch(error => {
                alert("Balance can't be below 0!")
                console.log(error)
            })
    };

    const submitDeposit = (e) => {
        e.preventDefault()
        console.log("submit deposit")
        postDeposit()
    }

    const submitWithdrawal = (e) => {
        e.preventDefault()
        console.log("submit withdrawal")
        postWithdrawal()
    }


    return (
        <div>

            <Navbar goHome={props.goHome} goAccount={props.goAccount} goPayments={props.goPayments}
                    goViewBalance={props.goViewBalance} username={props.username} logOut={props.logOut}
                    goPostNewItem={props.goPostNewItem}/>
            Your current BidderUp Balance is: {balance}

            <form onSubmit={submitDeposit}>
                <p>Make a Deposit</p>
                <input type="text" onChange={e => { setDeposit(e.target.value) }} placeholder="e.g 100" />
                <button>Deposit</button>
            </form>
            <form onSubmit={submitWithdrawal}>
                <p>Make a Withdrawal</p>
                <input type="text" onChange={e => { setWithdrawal(e.target.value) }} placeholder="e.g 100" />
                <button>Withdraw</button>
            </form>
        </div>
    )
}

export default Account