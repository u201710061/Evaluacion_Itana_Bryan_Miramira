package com.example.backend.service;

import com.example.backend.entity.Graduates;
import com.example.backend.repository.GraduatesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GraduatesService {

    //@Autowired
    private final GraduatesRepository graduatesRepository;

    public Graduates saveGraduates(Graduates graduates) {
        return graduatesRepository.save(graduates);
    }

    public List<Graduates> saveGraduatesList(List<Graduates> graduatesList) {
        return graduatesRepository.saveAll(graduatesList);
    }

    public List<Graduates> getGraduates(){
        return graduatesRepository.findAll();
    }

    public Graduates getGraduatesById(int id){
        return graduatesRepository.findById(id).orElse(null);
    }

    public List<Graduates> getGraduatesByYear(String year){
        return graduatesRepository.findByYear(year);
    }

    public String deleteGraduates(int id)
    {
        graduatesRepository.deleteById(id);
        return "Se elimino exitosamente "+ id;
    }

    public  Graduates updateGraduates(Graduates graduates) {
        Graduates actualGraduates = graduatesRepository.findById(graduates.getId()).orElse(null);
        actualGraduates.setYear(graduates.getYear());
        actualGraduates.setSex(graduates.getSex());
        actualGraduates.setType_of_course(graduates.getType_of_course());
        actualGraduates.setQuantity(graduates.getQuantity());
        return graduatesRepository.save(actualGraduates);

    }
}

