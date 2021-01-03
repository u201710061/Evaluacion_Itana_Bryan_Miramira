package com.example.backend.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "graduates")
public class Graduates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String year;
    private String sex;
    private String type_of_course;
    private int quantity;
}
