package com.revature.Project2.service;

import com.revature.Project2.pojo.Item;
import com.revature.Project2.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemRepository repo;

    /**
     * Add an item to the ItemRepository
     * @param item
     * @return boolean value
     */
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
     * Uses ItemRepository to find all items of an owner
     * where isAccepted() == false
     * @param owner
     * @return List<Item>
     */
    public List<Item> findOwnerItems(String owner){
        try{
            List<Item> items = repo.findItemByOwner(owner);
            for(int i = 0; i < items.size(); i++){
                if(items.get(i).isAccepted()){
                    items.remove(i);
                }
            }
            return items;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Searches the repo for all owner items and filters out any
     * item where isAccepted() == false
     * @param owner
     * @return List<Item> items
     */
    public List<Item> findAcceptedOwnerItems(String owner){
        try {
            List<Item> items = repo.findItemByOwner(owner);
            for (int i = 0; i < items.size(); i++) {
                if (items.get(i).isAccepted() != true) {
                    items.remove(i);
                }
            }
            return items;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }


    /**
     * Uses ItemRepository to find
     * a single Item of an owner by title
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

    public ArrayList<Item> findItems(String query) {
        ArrayList<Item> items = repo.findByTitle(query);
        for(int i = 0 ; i < items.size(); i++){
            if(items.get(i).isAccepted()){
                items.remove(i);
            }
        }
        return items;
    }

    public boolean changeItemStatus(String title, String owner) {
        boolean flag = false;
        try {
            Item item = new Item();
            List<Item> items = repo.findItemByOwner(owner);

            for (int i = 0; i < items.size(); i++) {
                if (items.get(i).getTitle().equals(title)) {
                    item = items.get(i);
                }
            }
            if (item != null) {
                repo.delete(item);
                item.setAccepted(true);
                repo.insert(item);
                flag = true;
            }
        }
        catch(Exception exception){
            exception.printStackTrace();
        }
        return flag;
    }

}
