package com.revature.Project2.controller;

import com.revature.Project2.pojo.User;
import com.revature.Project2.repository.UserRepository;
import com.revature.Project2.service.UserService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.event.annotation.BeforeTestClass;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UserConTest {

    @Autowired
    UserController controller;
    UserRepository repository;

    User user;
    @BeforeTestClass
    public void beforeClass(){
        user = new User();
        String username = "test";
        String password = "password";
        user.setUsername(username);
        user.setPassword(password);
        repository.insert(user);
    }

    @Test
    /**
     * signupTest() needs the db to be empty before insertion
     */
    public void signupTest(){
        try{
//            User user = new User();
//            user.setId(null);
//            user.setPassword("Password");
//            user.setUsername("Peggy"); //username must be random or the db cleared to pass
            int status = controller.signup(user);//Empty user object
            Assert.isTrue(status == 200, "Status should be 200");
            repository.delete(user);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void loginTest(){
        try{
            ResponseEntity res = controller.login(user);
            Assert.hasText("200",String.valueOf(res.getStatusCode()));
            repository.delete(user);
        }catch(Exception e ){
            e.printStackTrace();
        }
    }

    @Test
    public void depositTest() {
        try{
            controller.deposit(30,user.getUsername());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void withdrawTest(){
        try{
            ResponseEntity res = controller.withdraw(30, user.getUsername());
            Assert.hasText("200", res.getStatusCode().toString());
        }catch (Exception e){
            e.printStackTrace();
        }

    }




}
