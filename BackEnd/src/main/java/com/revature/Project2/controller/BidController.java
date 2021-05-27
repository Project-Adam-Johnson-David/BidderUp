package com.revature.Project2.controller;

import com.revature.Project2.pojo.Bid;
import com.revature.Project2.repository.BidRepository;
import com.revature.Project2.service.BidService;
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

    @PostMapping(value ="/post_bid")
    public boolean postBid(@RequestBody Bid bid){
        try{
            Random random = new Random();
            int choice = random.nextInt(10000);
            String done = Integer.toString(choice);
            bid.setId(done);
            bid.setStatus("pending");
            repo.insert(bid);
            return true;
        }
        catch(Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @PostMapping(value="/bid_status/{value}")
    public String bidStatus(@RequestBody String id, @PathVariable("value") String status){
        String stat = service.setBidStatus(id, status);
        System.out.println(id.toString());
        return stat;
    }

}