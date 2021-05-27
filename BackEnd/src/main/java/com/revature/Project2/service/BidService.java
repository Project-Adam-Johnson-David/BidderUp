package com.revature.Project2.service;

import com.revature.Project2.pojo.Bid;
import com.revature.Project2.pojo.Item;
import com.revature.Project2.repository.BidRepository;
import com.revature.Project2.repository.ItemRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BidService {

    @Autowired
    BidRepository repo;

    @Autowired
    ItemService item;

    @Autowired
    UserService user;

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

    public ArrayList<Bid> findBidByItem(String owner, String item){
        try {
            ArrayList<Bid> bids = repo.findBidByItem(item);
            for(int i = 0; i < bids.size(); i++){
                if(!owner.equals(bids.get(i).getOwner())){
                    bids.remove(i);
                }
                else if(bids.get(i).getStatus().equals("deny")){
                    bids.remove(i);
                }
            }
            return bids;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    /**
     * findById() gets a bid from the repo by id
     * and sets the status to what ever is passed
     * by the controller
     * @param id
     * @param status
     * @return boolean flag
     */
    public String setBidStatus(String id, String status){
       String flag = "pending";
        try {
           Bid bid = repo.findBidById(id);

           if (bid != null) {
               repo.delete(bid);
               bid.setStatus(status);
               repo.insert(bid);

               if(status.equals("accept")){
                   item.changeItemStatus(bid.getItem(), bid.getOwner());
                   user.exchangeCurrency(bid.getOwner(), bid.getBidder(), bid.getAmount());
                   flag = status;
               }
           }
           return flag;
       }
       catch (Exception e){
           e.printStackTrace();
           return flag;
       }
    }
}