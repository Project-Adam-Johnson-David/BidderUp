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

    @Test
    public void getUsersTest(){
       List<User> users = controller.getUsers();
        Assert.notEmpty(users, "There are users in the list");
    }

    @BeforeAll
    /**
     * signupTest() needs the db to be empty before insertion
     */
    public void signupTest(){
        User user = new User();
        user.setId(null);
        user.setPassword("Password");
        user.setUsername("Peggy"); //username must be random or the db cleared to pass
        int status = controller.signup(user);//Empty user object

        Assert.isTrue(status == 200, "Status should be 200");

        repository.delete(user);
    }


}
