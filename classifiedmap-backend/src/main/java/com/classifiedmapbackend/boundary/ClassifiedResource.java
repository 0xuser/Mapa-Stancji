package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.repositories.ClassifiedRepository;
import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;
import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
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

}
