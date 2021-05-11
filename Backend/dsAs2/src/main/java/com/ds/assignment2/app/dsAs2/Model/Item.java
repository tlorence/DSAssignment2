package com.ds.assignment2.app.dsAs2.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "Item")
public class Item {
    @Id
    private int itemID;
    private String itemName;
    private String itemDescription;
    private String itemCategory;
    private String sellerName;
    private Float price;
}
