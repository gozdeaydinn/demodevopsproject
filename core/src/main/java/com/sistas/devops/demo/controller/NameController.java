package com.sistas.devops.demo.controller;

import com.sistas.devops.demo.model.PersonModel;
import org.springframework.web.bind.annotation.*;

@RestController
public class NameController {

    @RequestMapping(value = "/sayMyName", method = RequestMethod.GET)
    @CrossOrigin
    public PersonModel sayMyName(){
        PersonModel person = new PersonModel();
        person.setId(1);
        person.setName("Onur");
        person.setSurname("Teber");
        return person;
    }
}
