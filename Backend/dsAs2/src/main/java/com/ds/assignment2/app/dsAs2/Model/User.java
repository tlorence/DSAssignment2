package com.ds.assignment2.app.dsAs2.Model;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Getter
@Setter
@ToString

@Document(collection = "User")
public class User {
    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String userType;

}
