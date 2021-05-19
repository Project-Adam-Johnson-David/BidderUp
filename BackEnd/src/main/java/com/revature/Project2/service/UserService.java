package com.revature.Project2.service;

import com.revature.Project2.pojo.User;
import com.revature.Project2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.apache.logging.log4j.LogManager;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;
    //log4j logger
   // public org.apache.logging.log4j.Logger rootLogger = LogManager.getRootLogger();

    /**
     * Service method findAllUsers named after the
     * UserRepository method
     * @return List<User> list
     */
    public List<User> findAllUsers(){
        List<User> list = userRepo.findAll();
        return list;
    }

    /**
     * Service method findUser named after the
     * UserRepository method
     * @param username
     * @return User user
     */
    public User findUser(String username){
        User user1 = new User();
        User user = userRepo.findUserByUsername(username);
        return user;
    }
}
