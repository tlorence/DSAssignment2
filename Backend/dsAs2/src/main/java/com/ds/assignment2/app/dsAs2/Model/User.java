package com.ds.assignment2.app.dsAs2.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


//Maps to which collection of the database these objects will be saved to, retrived and manipulated from
@Document(collection = "User")
public class User {

    //Defining that the item ID will be the primary key for the record in the database
    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String userType;

    //Constructor
    public User(String email, String firstName, String lastName, String password, String userType) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.userType = userType;
    }


    //We can use the annotations setters and getters to get these as well
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}