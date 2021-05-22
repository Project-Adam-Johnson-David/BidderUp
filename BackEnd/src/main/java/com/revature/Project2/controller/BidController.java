package com.revature.Project2.controller;

import com.revature.Project2.pojo.Bid;
import com.revature.Project2.repository.BidRepository;
import com.revature.Project2.service.BidService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bid")
public class BidController {
    //vars
    @Autowired
    BidRepository repo;
    @Autowired
    BidService service;

    //methods

    /**
     * Uses the MongoRepository findAll()
     * @return List<Bid>
     */
    @GetMapping("/bids")
    public List<Bid> getBids(){
        return repo.findAll();
    }

    /**
     * Gets a list of bids by the owner
     * @param username
     * @return List<Bid>
     */
    @GetMapping("/bids/{username}")
    public List<Bid> getBidsById(@PathVariable("username") String username){
        System.out.println(service.findBidByOwner(username));
        return service.findBidByOwner(username);
    }

    @PostMapping(value ="/post_bid")
    public void postBid(Bid bid){
        bid.setAmount(40);
        bid.setBidder("test");
        Date date = new Date();
        bid.setDate(date);
        bid.setId(null);
        bid.setOwner("adam");

        repo.insert(bid);
    }
}