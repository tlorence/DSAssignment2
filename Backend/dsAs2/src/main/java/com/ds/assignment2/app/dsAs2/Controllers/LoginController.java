package com.ds.assignment2.app.dsAs2.Controllers;


import com.ds.assignment2.app.dsAs2.Model.User;
import com.ds.assignment2.app.dsAs2.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.HashMap;
import java.util.Optional;

//Request mapping used to map web requests onto specific handler classes and/or handler methods
@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    //Injecting the dependency of the item repository by autowiring
    @Autowired
    private UserRepository repository;

    @PostMapping("/auth") //Endpoint to call the auth method to authenticate the login
    public Object validate(@RequestBody User user) {

        String username = user.getEmail(); //Getting value of username sent by user and storing them in string variable
        String password = user.getPassword(); //Getting value of password sent by user and storing them in string variable

        Optional<User> valUser = repository.findById(user.getEmail()); //Finding the user in the database for the provided username

        //Checking the entered username with the usename matched from the database.
        // Checking if the password for that user matches with the password  in the database
        if ((valUser.get().getEmail().equals(username) && valUser.get().getPassword().equals(password))) {

            //If a match is present we create a hashmap to store the values of email and user role
            HashMap<String,String> hashMap = new HashMap<String, String>();

            hashMap.put("email", username); //Assigning the emails in the hashmap
            hashMap.put("role",valUser.get().getUserType()); //Assigning the user role in the hashmap
            return hashMap; //Returning the hashmap in the response
        }
        else return "Unauthorized"; //If the user is not mapped in the database, an unauthorized message will be shown

    }
}