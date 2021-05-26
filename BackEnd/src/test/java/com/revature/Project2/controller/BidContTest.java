package com.revature.Project2.controller;

import com.revature.Project2.pojo.Bid;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.annotation.BeforeTestExecution;
import org.springframework.test.context.event.annotation.BeforeTestMethod;
import org.springframework.util.Assert;

import java.util.Date;
import java.util.List;

@SpringBootTest
class BidContTest {

    @Autowired
    BidController controller;

    @Test
    public void getBidsTest(){
        //getBids()

        List<Bid> bids = controller.getBids();
        Assert.noNullElements(bids, "not null");
    }

    @Test
    public void getBidsByIdTest(){
        //getBidsById()

        List<Bid> bids = controller.getBidsById("adam");
        Assert.noNullElements(bids, "Adam has bids");
    }

    @Test
    public void postBidTest(){
        Date testDate = new Date();
        Bid bid = new Bid(null, "owner","item", "bidder", 0, testDate);
        boolean flag = controller.postBid(bid);
//        Assert.isTrue(flag, "flag is true");
    }
}
