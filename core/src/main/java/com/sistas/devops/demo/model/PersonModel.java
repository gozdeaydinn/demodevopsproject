package com.sistas.devops.demo.model;

import javax.validation.constraints.NotNull;

public class PersonModel {

    private long id;
    @NotNull
    private String name;
    @NotNull
    private String surname;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
