package com.example.backend.controller;

import com.example.backend.entity.Graduates;
import com.example.backend.service.GraduatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GraduatesController {

    @Autowired
    private GraduatesService graduatesService;

    @PostMapping("/addGraduates")
    public Graduates addGraduates(@RequestBody Graduates graduates){
        return graduatesService.saveGraduates(graduates);
    }

    @PostMapping("/addGraduatesList")
    public List<Graduates> addGraduatesList(@RequestBody List<Graduates> graduatesList){
        return graduatesService.saveGraduatesList(graduatesList);
    }
    @GetMapping("/graduates")
    public  List<Graduates> findAllGraduates()
    {
        return graduatesService.getGraduates();
    }

    @GetMapping("/graduatesById/{id}")
    public  Graduates findGraduatesById(@PathVariable int id)
    {
        return graduatesService.getGraduatesById(id);
    }

    @GetMapping("/graduates/{year}")
    public  List<Graduates> findGraduatesByName(@PathVariable String year)
    {
        return graduatesService.getGraduatesByYear(year);
    }

    @PutMapping("/update")
    public Graduates updateGraduates(@RequestBody Graduates graduates){
        return graduatesService.updateGraduates(graduates);
    }

    @DeleteMapping("/delete/{id}")
    public  String deleteProduct(@PathVariable int id)
    {
        return graduatesService.deleteGraduates(id);
    }

}
