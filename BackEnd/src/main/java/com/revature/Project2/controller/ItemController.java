package com.revature.Project2.controller;

import com.revature.Project2.pojo.Item;
import com.revature.Project2.repository.ItemRepository;
import com.revature.Project2.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {
    //vars
    @Autowired
    ItemService service;
    @Autowired
    ItemRepository repo;
    
    /**
     * Users the ItemService to get a List of
     * Items by the owner of the items
     * @param owner
     * @return List of Items
     */
    @GetMapping("/owner_items/{owner}")
    public List<Item> getOwnerItems(@PathVariable("owner") String owner){
        return service.findOwnerItems(owner);
    }

    /**
     * Uses the ItemService to get an Item by
     * the owner and title of the object
     * @param owner
     * @param title
     * @return Item
     */
    @GetMapping("/owner_items/{owner}/{title}")
    public Item getOwnerItem(@PathVariable("owner") String owner,
                             @PathVariable("title") String title){
        return service.findOwnerItem(owner, title);
    }

    /**
     * Post an Item to the ItemRepository
     * @param item
     * @return boolean flag
     */
    @PostMapping("/post_item")
    public boolean postItem(@RequestBody Item item){
        try{
            repo.insert(item);
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
