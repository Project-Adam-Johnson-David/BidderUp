package com.revature.Project2.controller;

import com.revature.Project2.pojo.Bid;
import com.revature.Project2.repository.BidRepository;
import com.revature.Project2.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping(value ="/post_bid")
    public void postBid(){

    }
}