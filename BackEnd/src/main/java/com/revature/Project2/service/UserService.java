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

    /**
     * Service method verifyLogin named after the
     * UserRepository method
     *
     * @param username
     * @param password
     * @return
     */
    public boolean verifyLogin(String username, String password){
        boolean flag = false;
        User usr = userRepo.findUserByUsername(username);
        if(password.equals(usr.getPassword())){
            flag = true;
        }
        return flag;
    }

    /**
     * Add user to the database
     *
     * @param user to be added
     * @return true if success, else otherwise
     */
    public boolean addUser(User user) {
        boolean flag = false;
        try{
            User found = userRepo.findUserByUsername(user.getUsername());
            if(found==null){
                userRepo.insert(user);
                flag = true;
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return flag;
    }

    public void depositForUser(double deposit, String username) {
        User user = userRepo.findUserByUsername(username);
        user.setBalance(user.getBalance()+deposit);
        userRepo.save(user);
    }

    public void withdrawForUser(double withdraw, String username) {
        User user = userRepo.findUserByUsername(username);
        user.setBalance(user.getBalance()-withdraw);
        userRepo.save(user);
    }

    public boolean userCanWithdraw(double withdrawal, String username) {
        User user = findUser(username);
        if (user.getBalance() - withdrawal < 0)
            return false;
        else
            return true;
    }

    public double findBalance(String username) {
        User user= findUser(username);
        System.out.println(user.getBalance()+"code was here");
        return user.getBalance();
    }

    /**
     * Helper method for exchanging money when a bid is accepted
     * @param owner
     * @param bidder
     * @param amount
     * @return boolean flag
     */
    public boolean exchangeCurrency(String owner, String bidder, double amount){
        boolean flag = false;
        try{
            //Users
            User userOwner = userRepo.findUserByUsername(owner);
            User userBidder = userRepo.findUserByUsername(bidder);
            //User money
            double ownerMoney = userOwner.getBalance();
            double bidderMoney = userBidder.getBalance();
            //Increment by bid amount
            ownerMoney+= amount;
            bidderMoney-=amount;
            //set the new balance of each user
            userOwner.setBalance(ownerMoney);
            userBidder.setBalance(bidderMoney);
            //Save the changes to the Users
            userRepo.save(userOwner);
            userRepo.save(userBidder);
            //return true
            flag = true;
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return flag;
    }
}