package com.ds.assignment2.app.dsAs2.Controllers;


import com.ds.assignment2.app.dsAs2.Model.Item;
import com.ds.assignment2.app.dsAs2.Repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/items")
public class ItemController {
    @Autowired
    private ItemRepository repository;

    @PostMapping("/addItem")
    public String addItem(@RequestBody Item item) {
        repository.save(item);
        return "Item" + item.getItemID() + " " + item.getItemName() + " Added Successfully";
    }

    @GetMapping("/findAllItems")
    public List<Item> getItems() {

        return repository.findAll();
    }

    @GetMapping("/findAllItems/{id}")
    public Optional<Item> getItems(@PathVariable int id) {

        return repository.findById(id);
    }

    @PutMapping("/update")
    public String updateItem(@RequestBody Item item) {
        repository.save(item);
        return "Update Successfully";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteItem(@PathVariable int id) {
        repository.deleteById(id);
        return "Item" + id + " Deleted Successfully";
    }

}