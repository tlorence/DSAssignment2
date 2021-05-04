package com.ds.assignment2.app.dsAs2.Model;



import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "User")
public class User {
    @Id
    private int nicNo;
    private String firstName;
    private String lastName;
    private int age;
    private String username;
    private String password;

}
