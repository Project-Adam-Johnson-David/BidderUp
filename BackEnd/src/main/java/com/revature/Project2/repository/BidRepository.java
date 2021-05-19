package com.revature.Project2.repository;

import com.revature.Project2.pojo.Bid;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BidRepository extends MongoRepository<Bid, ObjectId> {

}