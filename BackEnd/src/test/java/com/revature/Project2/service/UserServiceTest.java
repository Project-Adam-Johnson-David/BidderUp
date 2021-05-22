package com.revature.Project2.service;

import com.revature.Project2.pojo.User;
import com.revature.Project2.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceTest {
    UserService userService = new UserService();

    @Test
    public void getUsersTest(){
        List<User> list = new ArrayList<>();
        try{
            list = userService.findAllUsers();
        }
        catch (Exception e){
            e.printStackTrace();
        }
        Assert.noNullElements(list, "There should be at least one user");
    }
}