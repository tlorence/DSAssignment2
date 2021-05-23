package com.ds.assignment2.app.dsAs2.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter //Annotation to implement the getters
@Setter //Annotation to implement the setters
@ToString

//Maps to which collection of the database these objects will be saved to, retrived and manipulated from
@Document(collection = "Item")
public class Item {

    //Defining that the item ID will be the primary key for the record in the database
    @Id
    private int itemID;
    private String itemName;
    private String itemDescription;
    private String itemCategory;
    private String sellerName;
    private Float price;
}