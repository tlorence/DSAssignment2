package com.ds.assignment2.app.dsAs2.Controllers;


import com.ds.assignment2.app.dsAs2.Model.User;
import com.ds.assignment2.app.dsAs2.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.HashMap;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserRepository repository;

    @PostMapping("/auth")
    public Object validate(@RequestBody User user) {

        String username = user.getEmail();
        String password = user.getPassword();

        Optional<User> valUser = repository.findById(user.getEmail());

        List userDetails = null;

        if ((valUser.get().getEmail().equals(username) && valUser.get().getPassword().equals(password))) {
            HashMap<String,String> hashMap = new HashMap<String, String>();

            hashMap.put("email", username);
            hashMap.put("role",valUser.get().getUserType());
            return hashMap;
        }
        else return "Unauthorized";

    }
}