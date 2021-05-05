package com.ds.assignment2.app.dsAs2.Repositories;


import com.ds.assignment2.app.dsAs2.Model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, Integer> {
}
