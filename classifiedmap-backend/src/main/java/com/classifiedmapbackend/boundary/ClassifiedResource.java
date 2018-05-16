package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.repositories.ClassifiedRepository;
import com.classifiedmapbackend.control.repositories.StatusRepository;
import com.classifiedmapbackend.control.repositories.TypeRepository;
import com.classifiedmapbackend.entity.dto.FullClassifiedDTO;
import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;
import com.classifiedmapbackend.entity.jpa.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping(path = "/classified")
public class ClassifiedResource {

    @Autowired
    ClassifiedRepository classifiedRepository;

    @Autowired
    TypeRepository typeRepository;


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

    @GetMapping(path = "/search")
    public List<SimpleClassifiedDTO> search(@RequestParam(value = "type", required = false, defaultValue = "all") String type,
                                            @RequestParam( value = "minCost", required = false, defaultValue = "0") Double minCost,
                                            @RequestParam(value = "maxCost", required = false,  defaultValue = "10000") Double maxCost,
                                            @RequestParam(value = "persons", required = false, defaultValue = "1") Integer persons ,
                                            @RequestParam(value = "maxArea", required = false, defaultValue = "10000") Double maxArea,
                                            @RequestParam(value = "minArea", required = false, defaultValue = "0") Double minArea)
    {
        List <SimpleClassifiedDTO> listOfClassifiedSimpleDTO = new ArrayList<>();

        if (type.equals("all")) {
            List<ClassifiedEntity> listOfClassifieds = classifiedRepository.globalSearch(minCost, maxCost, minArea, maxArea);
            for (ClassifiedEntity classifiedEntity : listOfClassifieds)
                listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());
        } else if ("0".equals(type)) {
            List<ClassifiedEntity> listOfClassifieds = classifiedRepository.searchRoom(type, minCost, maxCost, persons);
            for (ClassifiedEntity classifiedEntity : listOfClassifieds)
                listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());
        } else {
            List<ClassifiedEntity> listOfClassifieds = classifiedRepository.searchFlat(type, minCost, maxCost, minArea, maxArea);
            for (ClassifiedEntity classifiedEntity : listOfClassifieds)
                listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());
        }

        return listOfClassifiedSimpleDTO;

    }

    //TODO w trakcie rozwoju
    @PostMapping(path = "/addclassified")
    public String addClassified(@RequestBody FullClassifiedDTO entity)
    {
        GeolocationEntity newGeolocation = new GeolocationEntity(UUID.randomUUID().toString(), entity.getLat(), entity.getLng());
        AddressEntity newAddres = new AddressEntity(UUID.randomUUID().toString(), entity.getCity(), entity.getDistrict(), entity.getStreet(), entity.getBuildingNum(), entity.getFlatNum());
        TypeEntity typeEntity;
        if(typeRepository.findById(entity.getType()).isPresent())
            typeEntity = typeRepository.findById(entity.getType()).get();
        else
            typeEntity = new TypeEntity(entity.getType(), "test");

        ClassifiedEntity newClassified = new ClassifiedEntity(UUID.randomUUID().toString(), entity.getTitle(), entity.getDescription(), new Date(),
                entity.getCost(), entity.getPersons(), entity.getArea(), newAddres, newGeolocation,  new StatusEntity(UUID.randomUUID().toString(), "test", "test"), new ThumbnailEntity(UUID.randomUUID().toString(), "test"), typeEntity );

        classifiedRepository.save(newClassified);

        return newClassified.getId();
    }

}
