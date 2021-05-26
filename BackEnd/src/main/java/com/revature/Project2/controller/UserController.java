package com.revature.Project2.controller;

import com.revature.Project2.pojo.User;
import com.revature.Project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public String welcomeUser(){
        return "Welcome to UserController";
    }

    /**
     * Get method getUsers()
     * endpoint '/users'
     * @return List<User> list
     */
    @GetMapping("/users")
    public List<User> getUsers(){
        List<User> list = new ArrayList<>();
        try{
            list = service.findAllUsers();
        }
        catch (Exception e){
            //System.out.println(e.getMessage());
            e.printStackTrace();
//            list.add(new User(null, "Adam", "password",
//                    "United States", 100));
        }
        return list;
    }


    @PostMapping("/login")
    public int login(@RequestBody User user){
        try{
            boolean foundUser = service.verifyLogin(user.getUsername(), user.getPassword());
            if(foundUser==true){
                return 200;
            }
            else{
                return 400;
            }
        }
        catch (Exception e){
            return 400;
        }
    }

    @PostMapping("/signup")
    public int signup(@RequestBody User user){
        int status = 400;
        if(service.addUser(user)){
            status = 200;
        }
        return status;
    }

    @GetMapping("/getBalance/{username}")
    public double getBalance(@PathVariable("username") String username){
        double balance=0;
        try{
            System.out.println("code was here looking for "+ username);
            balance = service.findBalance(username);
            return balance;
        }
        catch (Exception e){
            //System.out.println(e.getMessage());
            e.printStackTrace();
//            list.add(new User(null, "Adam", "password",
//                    "United States", 100));
        }
        System.out.println(balance);
        return balance;
    }

    @PostMapping("/deposit")
    @ResponseBody
    public void deposit(@RequestParam double deposit, @RequestParam String username) {
        // System.out.println(deposit);
        // User user = new User()
        service.depositForUser(deposit, username);
    }

    @PostMapping("/withdrawal")
    public ResponseEntity withdraw(@RequestParam double withdrawal, @RequestParam String username) {
        if (service.userCanWithdraw(withdrawal, username)) {
            service.withdrawForUser(withdrawal, username);
            return new ResponseEntity<>("Successful Withdraw", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Balance can't be below zero",
                    HttpStatus.BAD_REQUEST);
        }
    }

}
