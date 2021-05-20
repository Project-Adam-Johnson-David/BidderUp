package com.revature.Project2.controller;

import com.revature.Project2.pojo.User;
import com.revature.Project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


    @GetMapping("/login")
    public List<User> login(){
        List<User> list = new ArrayList<>();
//        try{
//            list = service.findAllUsers();
//        }
//        catch (Exception e){
//            //System.out.println(e.getMessage());
//            e.printStackTrace();
////            list.add(new User(null, "Adam", "password",
////                    "United States", 100));
//        }
        return list;
    }
}
