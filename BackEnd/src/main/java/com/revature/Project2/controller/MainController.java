package com.revature.Project2.controller;//package com.example.springboot;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.Project2.pojo.User;
import com.revature.Project2.repository.UserRepository;
import com.revature.Project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.Context;
import javax.naming.NamingException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepo;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }


    /**
     * Method logs in a user by checking if the user
     * password matches. If so, name is returned. Else,
     * return bad login.
     * @param user
     * @return Response Entity with a status
     * @throws NamingException
     */
//    @RequestMapping("/login")
//    public ResponseEntity<String> login(@RequestBody User user) throws NamingException {
//        //validate user here
//        boolean flag = userService.verifyLogin(user.getUsername(), user.getPassword());//returns boolean
//       //Send response based on verifyLogin()
//        if(flag){
//            return new ResponseEntity<>(user.getUsername(), HttpStatus.OK);
//        }
//        else{
//            return new ResponseEntity<>("bad login", HttpStatus.BAD_REQUEST);
//        }
//    }

        @PostMapping("/login")
    public String login(@RequestBody User user) throws NamingException {
        //validate user here
        boolean flag = userService.verifyLogin(user.getUsername(), user.getPassword());//returns boolean
       //Send response based on verifyLogin()
            System.out.println(flag);
        if(flag){
            return "200";
        }
        else{
            return "405";
        }
    }

    /**
     * Get a User from the front end and add it to
     * the UserRepository by insert()
     * @param user
     * @return ResponseEntity
     * @throws NamingException
     */
    @PostMapping("/new_login")
    public ResponseEntity<String> newUser(@RequestBody User user) throws NamingException{
        userRepo.insert(user);

        return new ResponseEntity<>("User Created", HttpStatus.OK);
    }


}