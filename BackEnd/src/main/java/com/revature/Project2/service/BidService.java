package com.revature.Project2.service;

import com.revature.Project2.pojo.Bid;
import com.revature.Project2.repository.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BidService {

    @Autowired
    BidRepository repo;

    /**
     * Uses MongoRepository insert method for
     * Document insertion to the db
     * @param bid Document bids
     * @return boolean flag
     */
    public boolean postBid(Bid bid){
        boolean flag = false;
        try {
            repo.insert(bid);
            flag = true;
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return flag;
    }

    public ArrayList<Bid> findBidByOwner(String owner){
        ArrayList<Bid> list = repo.findBidByOwner(owner);
        return list;
    }

}