package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.repositories.ClassifiedRepository;
import com.classifiedmapbackend.control.repositories.TypeRepository;
import com.classifiedmapbackend.entity.dto.FullClassifiedDTO;
import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;
import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import com.classifiedmapbackend.entity.jpa.TypeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/classified")
public class ClassifiedResource {

    @Inject
    private ClassifiedRepository classifiedRepository;

    @Inject
    private TypeRepository typeRepository;



    @GetMapping(path = "/all")
    public ResponseEntity getAllClassifieds()
    {
        List <ClassifiedEntity> listOfClassifieds = (List <ClassifiedEntity>) classifiedRepository.findAll();
        List <SimpleClassifiedDTO> listOfClassifiedSimpleDTO = new ArrayList<>();
        for(ClassifiedEntity classifiedEntity  : listOfClassifieds)
            listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());

        return ResponseEntity.status(HttpStatus.OK).body(listOfClassifiedSimpleDTO);
    }

    @GetMapping(path = "")
    public ResponseEntity getClassifiedById(@PathParam("id") String id)
    {
        if(classifiedRepository.findById(id).isPresent())
            return ResponseEntity.status(HttpStatus.OK).body(classifiedRepository.findById(id).get());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping(path = "/search")
    public ResponseEntity search(@RequestParam(value = "type", required = false, defaultValue = "all") String type,
                                            @RequestParam( value = "minCost", required = false, defaultValue = "0") Double minCost,
                                            @RequestParam(value = "maxCost", required = false,  defaultValue = "10000") Double maxCost,
                                            @RequestParam(value = "persons", required = false, defaultValue = "1") Integer persons ,
                                            @RequestParam(value = "maxArea", required = false, defaultValue = "10000") Double maxArea,
                                            @RequestParam(value = "minArea", required = false, defaultValue = "0") Double minArea)
    {
        List <SimpleClassifiedDTO> listOfClassifiedSimpleDTO = new ArrayList<>();

        switch (type) {
            case "all": {
                List<ClassifiedEntity> listOfClassifieds = classifiedRepository.globalSearch(minCost, maxCost, minArea, maxArea);
                for (ClassifiedEntity classifiedEntity : listOfClassifieds)
                    listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());
                break;
            }
            case "0": {
                List<ClassifiedEntity> listOfClassifieds = classifiedRepository.searchRoom(type, minCost, maxCost, persons);
                for (ClassifiedEntity classifiedEntity : listOfClassifieds)
                    listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());
                break;
            }
            default: {
                List<ClassifiedEntity> listOfClassifieds = classifiedRepository.searchFlat(type, minCost, maxCost, minArea, maxArea);
                for (ClassifiedEntity classifiedEntity : listOfClassifieds)
                    listOfClassifiedSimpleDTO.add(classifiedEntity.mapToSimpleClassifiedDTO());
                break;
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(listOfClassifiedSimpleDTO);
    }

    //TODO w trakcie rozwoju
    @PostMapping(path = "/addclassified")
    public ResponseEntity addClassified(@RequestBody FullClassifiedDTO entity)
    {
        TypeEntity typeEntity;
        if(typeRepository.findById(entity.getType()).isPresent())
            typeEntity = typeRepository.findById(entity.getType()).get();
        else
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        ClassifiedEntity newClassified = entity.mapToClassifiedEntity(typeEntity);
        classifiedRepository.save(newClassified);

        return ResponseEntity.status(HttpStatus.CREATED).body(newClassified.getId());
    }

}
