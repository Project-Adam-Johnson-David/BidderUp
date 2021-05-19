package com.revature.Project2.pojo;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "bids")
public class Bid {
    //vars
    @Id
    private ObjectId id;
    private String owner;
    private String bidder;
    private String amount;
    @CreatedDate
    private Date date;

    /*
    Setters, Getters, Constructors, and toString handled by Lombok!!!
     */
}

