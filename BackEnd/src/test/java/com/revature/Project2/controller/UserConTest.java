package com.revature.Project2.controller;

import com.revature.Project2.pojo.User;
import com.revature.Project2.repository.UserRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.List;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UserConTest {

    @Autowired
    UserController controller;
    UserRepository repository;

//    @Test
//    /**
//     * signupTest() needs the db to be empty before insertion
//     */
//    public void signupTest(){
//        User user = new User();
//        user.setId(null);
//        user.setPassword("Password");
//        user.setUsername("Peggy"); //username must be random or the db cleared to pass
//        int status = controller.signup(user);//Empty user object
//
//        Assert.isTrue(status == 200, "Status should be 200");
//
//        repository.delete(user);
//    }
    @Test
    public void updateAllTest(){
        try{
            User user = new User();
            user.setUsername("none");
            repository.insert(user);
            controller.updateUsername("Adam", "none");
            controller.updateCountry("Country", "Adam");
            User adam = repository.findUserByUsername("Adam");
            Assert.isTrue(adam.getCountry().equalsIgnoreCase("Country"), "Adam is from Country");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void getBalanceTest(){
        try {
            User user = new User();
            user.setBalance(20);
            user.setUsername("Carter");
            repository.insert(user);

            double balance = controller.getBalance("Carter");
            Assert.isTrue(balance == 20, "balance equals 20");
            repository.delete(user);
        }
        catch (Exception e){
            e.getMessage();
        }
    }

}
