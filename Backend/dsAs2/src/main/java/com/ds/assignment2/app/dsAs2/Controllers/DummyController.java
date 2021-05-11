package com.ds.assignment2.app.dsAs2.Controllers;


import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/dummyService")
public class DummyController {

    @PostMapping("/mobileBill")
    public String mobileBill() {
        if ((1 + 1) == 2) {
            return "Mobile billing service";
        } else return "Fail";
    }

    @PostMapping("/creditCard")
    public String creditCard() {
        if ((1 + 1) == 2) {
            return "Credit card service";
        } else return "Fail";
    }

    @PostMapping("/delivery")
    public String delivery() {
        if ((1 + 1) == 2) {
            return "Delivery Service";
        } else return "Fail";
    }
}
