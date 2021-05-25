package com.revature.Project2.controller;

import com.revature.Project2.pojo.Item;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.util.List;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)//need this to test @BeforeAll annotation
public class ItemConTest {
    @Autowired
    ItemController controller;

    /**
     * postItemTest() will run first because of
     * annotation @BeforeAll
     */
    @BeforeAll
    public void postItemTest(){

        Item item = new Item(null, "title", 0, "owner", 0);
        boolean flag = controller.postItem(item);
        Assert.isTrue(flag, "Item was inserted into the db");
    }

    @Test
    public void getOwnerItemTest(){
        Item item = controller.getOwnerItem("owner", "title");
        Assert.notNull(item, "Item isn't null");
    }

    /**
     * Test needs a value in the test db with the owner: "owner"
     */
    @Test
    public void getOwnerItemsTest(){
        List<Item> list = controller.getOwnerItems("owner");
        Assert.notEmpty(list, "list isn't empty");
    }
}
