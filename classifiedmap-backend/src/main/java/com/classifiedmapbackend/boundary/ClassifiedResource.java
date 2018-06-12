package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.boundary.delegate.ClassifiedDelegate;
import com.classifiedmapbackend.entity.dto.FullClassifiedDTO;
import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;
import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path = "/classified")
public class ClassifiedResource {

    @Inject
    private
    ClassifiedDelegate classifiedDelegate;

    @GetMapping(path = "/all")
    public ResponseEntity getAllClassifieds() {
        List <ClassifiedEntity> listOfClassifieds = classifiedDelegate.queryAllClassifieds();
        return ResponseEntity.status(HttpStatus.OK).body(classifiedDelegate.mapToSimpleClassifiedDTO(listOfClassifieds));
    }

    @GetMapping(path = "/all/{userId}")
    public ResponseEntity getAllClassifiedsByUserId(@PathVariable("userId") String userId) {
        return ResponseEntity.status(HttpStatus.OK).body(classifiedDelegate.queryAllClassifiedsByUserId(userId));
    }

    @GetMapping(path = "")
    public ResponseEntity getClassifiedById(@PathParam("id") String id) {
        Optional<ClassifiedEntity> classifiedEntity = classifiedDelegate.existById(id);
        if(classifiedEntity.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(classifiedEntity.get());
        }
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
        List <SimpleClassifiedDTO> listOfClassifiedSimpleDTO;

        switch (type) {
            case "all": {
                List<ClassifiedEntity> listOfClassifieds = classifiedDelegate.globalSearch(minCost, maxCost, minArea, maxArea);
                listOfClassifiedSimpleDTO = classifiedDelegate.mapToSimpleClassifiedDTO(listOfClassifieds);
                break;
            }
            case "0": {
                List<ClassifiedEntity> listOfClassifieds = classifiedDelegate.searchRoom(type, minCost, maxCost, persons);
                listOfClassifiedSimpleDTO = classifiedDelegate.mapToSimpleClassifiedDTO(listOfClassifieds);
                break;
            }
            default: {
                List<ClassifiedEntity> listOfClassifieds = classifiedDelegate.searchFlat(type, minCost, maxCost, minArea, maxArea);
                listOfClassifiedSimpleDTO = classifiedDelegate.mapToSimpleClassifiedDTO(listOfClassifieds);
                break;
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(listOfClassifiedSimpleDTO);
    }

    @PostMapping(path = "/addclassified")
    public ResponseEntity addClassified(@RequestBody FullClassifiedDTO entity) {
        ClassifiedEntity newClassified = classifiedDelegate.mapToClassifiedEntity(entity, Optional.empty());
        classifiedDelegate.save(newClassified);

        return ResponseEntity.status(HttpStatus.CREATED).body(newClassified.getId());
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity editClassified(@PathVariable("id") String id, @RequestBody FullClassifiedDTO entity) {
        ClassifiedEntity newClassified = classifiedDelegate.mapToClassifiedEntity(entity, Optional.of(id));
        classifiedDelegate.save(newClassified);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
