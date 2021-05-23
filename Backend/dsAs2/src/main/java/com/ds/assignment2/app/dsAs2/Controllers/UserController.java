package com.ds.assignment2.app.dsAs2.Controllers;


import com.ds.assignment2.app.dsAs2.Model.User;
import com.ds.assignment2.app.dsAs2.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//Request mapping used to map web requests onto specific handler classes and/or handler methods
@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    //Injecting the dependency of the user repository by autowiring
    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/addUser") //Endpoint which calls the add user method
    public String saveUser(@RequestBody User user) {
        userRepository.save(user); //Saving the user object in the mongo db database
        return "Added User successfully. NIC number is: " + user.getEmail(); //Returning the success method
    }

}