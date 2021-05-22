package com.ds.assignment2.app.dsAs2.Repositories;

import com.ds.assignment2.app.dsAs2.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}