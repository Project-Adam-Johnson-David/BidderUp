package com.revature.Project2.controller;

import com.revature.Project2.pojo.User;
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

    @BeforeAll
    /**
     * signupTest() needs the db to be empty before insertion
     */
    public void signupTest(){
        User user = new User();
        user.setId(null);
        user.setUsername("Adam");
        int status = controller.signup(user);//Empty user object

        Assert.isTrue(status == 200, "Status is 200");
    }


}
