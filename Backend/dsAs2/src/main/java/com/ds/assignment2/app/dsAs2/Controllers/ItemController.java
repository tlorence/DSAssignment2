package com.ds.assignment2.app.dsAs2.Controllers;


import com.ds.assignment2.app.dsAs2.Model.Item;
import com.ds.assignment2.app.dsAs2.Repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//Request mapping used to map web requests onto specific handler classes and/or handler methods
@RestController
@CrossOrigin
@RequestMapping("/items")
public class ItemController {

    //Injecting the dependency of the item repository by autowiring
    @Autowired
    private ItemRepository repository;


    //Add item method
    @PostMapping("/addItem") // The endpoint for calling the add items method
    public String addItem(@RequestBody Item item) {
        repository.save(item); //Saving the items to the mongo DB
        return "Item" + item.getItemID() + " " + item.getItemName() + " Added Successfully";
    }

    //Find item method
    @GetMapping("/findAllItems")  // The endpoint for calling the find all items method
    public List<Item> getItems() {
        return repository.findAll(); //Retrieving all items form the MongoDB collection
    }

    //Find specific item by passing id method
    @GetMapping("/findAllItems/{id}") // The endpoint for calling the retrieving item by id method
    public Optional<Item> getItems(@PathVariable int id) {
        return repository.findById(id); //Retirving item by id
    }

    //Update item method
    @PutMapping("/update") // The endpoint for calling the update item method
    public String updateItem(@RequestBody Item item) {
        repository.save(item); //Updating the item by passing a JSON object
        return "Update Successfully"; //Success message
    }

    @DeleteMapping("/delete/{id}") //The endpoints for calling the delete method
    public String deleteItem(@PathVariable int id) {
        repository.deleteById(id); //Deleting the item by the id
        return "Item" + id + " Deleted Successfully";
    }

}