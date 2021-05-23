package com.ds.assignment2.app.dsAs2.Controllers;

import org.springframework.web.bind.annotation.*;


//Request mapping used to map web requests onto specific handler classes and/or handler methods
@CrossOrigin
@RestController
@RequestMapping("/dummyService")
public class DummyController {


    //Dummy service for mobile billing service in payments
    @PostMapping("/mobileBill")
    public String mobileBill() {

        //Random method implemented as dummy method for dumy service
        if ((1 + 1) == 2) {
            return "Mobile billing service";
        } else return "Fail";
    }

    //Dummy service for credit card service in payments
    @PostMapping("/creditCard")
    public String creditCard() {

        //Random method implemented as dummy method for dumy service
        if ((1 + 1) == 2) {
            return "Credit card service";
        } else return "Fail";
    }

    //Dummy service for delivery service in order collection options
    @PostMapping("/delivery")
    public String delivery() {

        //Random method implemented as dummy method for dumy service
        if ((1 + 1) == 2) {
            return "Delivery Service";
        } else return "Fail";
    }
}