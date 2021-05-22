package com.ds.assignment2.app.dsAs2.Controllers;

import com.ds.assignment2.app.dsAs2.Model.User;
import com.ds.assignment2.app.dsAs2.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

        if ((valUser.get().getEmail().equals(username) && valUser.get().getPassword().equals(password))) {
            return repository.findById(username);
        }
        else return null;

    }
}