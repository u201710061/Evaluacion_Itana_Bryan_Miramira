package com.example.backend.repository;

import com.example.backend.entity.Graduates;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GraduatesRepository extends JpaRepository<Graduates,Integer> {

    List<Graduates> findByYear(String year);
}
