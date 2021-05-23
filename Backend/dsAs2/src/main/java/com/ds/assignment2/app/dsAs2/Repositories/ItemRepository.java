package com.ds.assignment2.app.dsAs2.Repositories;


import com.ds.assignment2.app.dsAs2.Model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

//Item repository extending the mongo repository to implement the functionalities to manipulate data in the database
public interface ItemRepository extends MongoRepository<Item, Integer> {
}