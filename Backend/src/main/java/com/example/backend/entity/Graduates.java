package com.example.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Graduates")
public class Graduates {

    @Id
    @GeneratedValue
    private int id;


    private String year;
    private String sex;
    private String type_of_course;
    private int quantity;
}
