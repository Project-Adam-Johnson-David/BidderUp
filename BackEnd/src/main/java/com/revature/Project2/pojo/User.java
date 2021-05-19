package com.revature.Project2.pojo;

//import lombok.*;
import lombok.Getter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
@Getter
@Document(collection = "users")
public class User {
    //vars
    @Id
    private ObjectId id;
    private String username;
    private String password;
    private String country;
    private long balance;


    /*
    Setters, Getters, Constructors, and toString handled by Lombok!!!
     */
}
