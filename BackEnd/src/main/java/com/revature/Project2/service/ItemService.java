package com.revature.Project2.service;

import com.revature.Project2.pojo.Item;
import com.revature.Project2.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemRepository repo;

    public boolean insertItem(Item item){
        try{
        repo.insert(item);
        return true;
        }
        catch(Exception e){
            e.printStackTrace();
            return false;
        }

    }

    /**
     * Users ItemRepository to find all items of an owner
     * @param owner
     * @return List<Item>
     */
    public List<Item> findOwnerItems(String owner){
        try{
            return repo.findItemByOwner(owner);
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }



    /**
     * Uses ItemRepository to find
     * a single Item of an owner
     * @param owner
     * @param title
     * @return Item item
     */
    public Item findOwnerItem(String owner, String title){
        try {
            Item item = new Item();
            List<Item> items = repo.findItemByOwner(owner);
            for(Item i: items){
                if(title.equals(i.getTitle())){
                    item = i;//Set Item to the item in the list items
                }
                else{
                    item = null;
                }
            }
            return item;
        }
        catch(Exception e){
            return null;
        }
    }
}
