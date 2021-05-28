package com.revature.Project2.controller;

import com.revature.Project2.pojo.Bid;
import com.revature.Project2.repository.BidRepository;
import com.revature.Project2.service.BidService;
import com.revature.Project2.service.ItemService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

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
        List<Bid> list = repo.findAll();
        return list;
    }

    @GetMapping("/bids/{owner}/{itemName}")
    public ArrayList<Bid> getItemBids(@PathVariable("owner") String owner, @PathVariable("itemName") String item){
        ArrayList<Bid> bids = service.findBidByItem(owner, item);
        return bids;
    }

    @GetMapping("/bids/{username}")
    public ArrayList<Bid> getBidsById(@PathVariable("username") String username){
        ArrayList result =service.findBidByOwner(username);
        System.out.println(result);
        return result;
    }

    @GetMapping("/accepted/{username}/{query}")
    public ArrayList<Bid> getAcceptedBids(@PathVariable("username") String username,@PathVariable("query")String query){
        ArrayList result =service.findAcceptedBidsByBidder(username, "accept", query);
        System.out.println(result);
        return result;
    }

    @PostMapping(value ="/post_bid")
    public boolean postBid(@RequestBody Bid bid){
        return service.postBid(bid);
    }

    @PostMapping(value="/bid_status/{value}")
    public String bidStatus(@RequestBody String id, @PathVariable("value") String status){
        return service.setBidStatus(id, status); }}