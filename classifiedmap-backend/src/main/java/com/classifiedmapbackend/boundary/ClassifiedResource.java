package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.repositories.ClassifiedRepository;
import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;
import com.classifiedmapbackend.entity.jpa.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/classified")
public class ClassifiedResource {

    @Autowired
    ClassifiedRepository classifiedRepository;


    @GetMapping(path = "/all")
    public List<SimpleClassifiedDTO> getAllClassifieds()
    {
        List <ClassifiedEntity> listOfClassifieds = (List <ClassifiedEntity>) classifiedRepository.findAll();
        List <SimpleClassifiedDTO> listOfClassifiedSimpleDTO = new ArrayList<>();
        for(ClassifiedEntity classifiedEntity  : listOfClassifieds)
            listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());

        return listOfClassifiedSimpleDTO;
    }

    @GetMapping(path = "")
    public ClassifiedEntity getClassifiedById(@PathParam("id") String id)
    {
        //TODO zrobic to mądrzej
        if(classifiedRepository.findById(id).isPresent())
            return classifiedRepository.findById(id).get();
        return null;
    }

    /*@GetMapping(path = "/generate-data")
    @ResponseBody
    public ResponseEntity generateData()
    {
        GeolocationEntity geolocationEntity = new GeolocationEntity(UUID.randomUUID().toString(), 50.069543, 19.918304);
        AddressEntity addressEntity = new AddressEntity(UUID.randomUUID().toString(), "Kraków", "Krowodrza", "Urzednicza", "22", "4");
        StatusEntity statusEntity = new StatusEntity(UUID.randomUUID().toString(), "status title", "status description");
        TypeEntity typeEntity = new TypeEntity(UUID.randomUUID().toString(), "Mieszkanie");
        ClassifiedEntity classifiedEntity = new ClassifiedEntity(UUID.randomUUID().toString(), "Title", "Description", new Date(), addressEntity, geolocationEntity, statusEntity, null, typeEntity);
        classifiedRepository.save(classifiedEntity);
        return new ResponseEntity(HttpStatus.OK);
    }*/
}
