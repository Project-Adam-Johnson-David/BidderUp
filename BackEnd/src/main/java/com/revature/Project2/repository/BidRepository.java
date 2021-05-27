package com.revature.Project2.repository;

import com.revature.Project2.pojo.Bid;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface BidRepository extends MongoRepository<Bid, ObjectId> {
    ArrayList<Bid> findBidByOwner(String owner);
    ArrayList<Bid> findBidByItem(String item);
    Bid findBidById(String id);
}