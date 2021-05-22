package com.ds.assignment2.app.dsAs2.Controllers;


import com.ds.assignment2.app.dsAs2.Model.User;
import com.ds.assignment2.app.dsAs2.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.awt.*;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserRepository repository;

    @PostMapping("/auth")
    public String validate(@RequestBody User user) {

        String username = user.getEmail();
        String password = user.getPassword();

        System.out.println(username);
        System.out.println(password);

        Optional<User> valUser = repository.findById(user.getEmail());

        List userDetails = null;


        if ((valUser.get().getEmail().equals(username) && valUser.get().getPassword().equals(password))) {
            return valUser.get().getUserType();
        }
        else return "Unauthorized";

    }
}