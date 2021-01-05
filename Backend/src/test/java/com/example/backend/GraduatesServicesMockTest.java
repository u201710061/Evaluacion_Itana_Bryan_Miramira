package com.example.backend;

import com.example.backend.entity.Graduates;
import com.example.backend.repository.GraduatesRepository;
import com.example.backend.service.GraduatesService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
public class GraduatesServicesMockTest {


    @Mock
    private GraduatesRepository graduatesRepository;

    private GraduatesService graduatesService;

    @BeforeEach
    public  void setup(){
        MockitoAnnotations.initMocks(this);
        graduatesService = new GraduatesService(graduatesRepository);

        Graduates graduates = new Graduates();
        graduates.setYear("2014");
        graduates.setSex("Males");
        graduates.setId(1);
        graduates.setType_of_course("Algebra");
        graduates.setQuantity(20);

        Mockito.when(graduatesRepository.findById(1)).thenReturn(Optional.of(graduates));

        Mockito.when(graduatesRepository.save(graduates)).thenReturn(graduates);
    }

    @Test
    public void whenValidGetId_ThenReturnGraduateQuantity(){
        Graduates found = graduatesService.getGraduatesById(1);
        Assertions.assertThat(found.getQuantity()).isEqualTo(20);
    }

    @Test
    public void whenValidGetId_ThenReturnGraduateYear(){
        Graduates found = graduatesService.getGraduatesById(1);
        Assertions.assertThat(found.getYear()).isEqualTo("2014");
    }

    @Test
    public void whenValidGetId_ThenReturnGraduateTypeOfCourse(){
        Graduates found = graduatesService.getGraduatesById(1);
        Assertions.assertThat(found.getType_of_course()).isEqualTo("Algebra");
    }

    @Test
    public void whenValidUpdateGraduates_ThenReturnNewGraduates(){
        Graduates graduates = new Graduates();
        graduates.setYear("2014");
        graduates.setSex("Males");
        graduates.setId(1);
        graduates.setType_of_course("Algebra");
        graduates.setQuantity(30);

        Graduates newQuantity = graduatesService.updateGraduates(graduates);
        Assertions.assertThat(newQuantity.getQuantity()).isEqualTo(30);
    }

    @Test
    public void whenValidDeleteGraduates_ThenReturnGraduateDeleted(){
        String found = graduatesService.deleteGraduates(1);
        Assertions.assertThat(found).isEqualTo("Se elimino exitosamente 1");
    }

}
