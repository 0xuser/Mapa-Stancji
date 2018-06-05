package com.classifiedmapbackend.boundary.delegate;

import com.classifiedmapbackend.control.repositories.BaseUserRepository;
import com.classifiedmapbackend.control.repositories.ClassifiedRepository;
import com.classifiedmapbackend.control.repositories.TypeRepository;
import com.classifiedmapbackend.entity.dto.FullClassifiedDTO;
import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;
import com.classifiedmapbackend.entity.jpa.*;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ClassifiedDelegate {

    @Inject
    private ClassifiedRepository classifiedRepository;

    @Inject
    private TypeRepository typeRepository;

    @Inject
    private BaseUserRepository userRepository;


    public List<ClassifiedEntity> queryAllClassifieds() {
        return (List <ClassifiedEntity>) classifiedRepository.findAll();
    }

    public Optional<ClassifiedEntity> existById(String id) {
        return classifiedRepository.findById(id);
    }

    public List<ClassifiedEntity> globalSearch(Double minCost, Double maxCost, Double minArea, Double maxArea) {
        return classifiedRepository.globalSearch(minCost, maxCost, minArea, maxArea);
    }

    public List<ClassifiedEntity> searchRoom(String type, Double minCost, Double maxCost, Integer persons) {
        return classifiedRepository.searchRoom(type, minCost, maxCost, persons);
    }

    public List<ClassifiedEntity> searchFlat(String type, Double minCost, Double maxCost, Double minArea, Double maxArea) {
        return classifiedRepository.searchFlat(type, minCost, maxCost, minArea, maxArea);
    }

    public void save(ClassifiedEntity newClassified) {
        classifiedRepository.save(newClassified);
    }

    public ClassifiedEntity mapToClassifiedEntity(FullClassifiedDTO entity, Optional<String> entityId) {
        GeolocationEntity newGeolocation = GeolocationEntity.builder().id(UUID.randomUUID().toString())
                .lat(entity.getLat()).lng(entity.getLng()).build();

        AddressEntity newAddress = AddressEntity.builder().id(UUID.randomUUID().toString()).city(entity.getCity())
                .district(entity.getDistrict()).street(entity.getStreet()).buildingNum(entity.getBuildingNum())
                .flatNum(entity.getFlatNum()).build();

        String id = entityId.orElseGet(() -> UUID.randomUUID().toString());
        TypeEntity typeEntity = typeRepository.findById(entity.getType()).get();

        ClassifiedEntity newClassified = ClassifiedEntity.builder().id(id).title(entity.getTitle())
                .description(entity.getDescription()).creationDate(new Date()).cost(entity.getCost()).persons(entity.getPersons()).area(entity.getArea())
                .address(newAddress).geolocation(newGeolocation)
                .status(new StatusEntity(UUID.randomUUID().toString(), "test", "test"))
                .thumbnail(new ThumbnailEntity(UUID.randomUUID().toString(), "test"))
                .type(typeEntity)
                .userId(entity.getUserId())
                .build();

        return newClassified;
    }

    public List<FullClassifiedDTO> queryAllClassifiedsByUserId(String userId) {
        return classifiedRepository.findAllByUserId(userId).stream().map(this::mapToFullClassifiedDTO).collect(Collectors.toList());
    }

    public List<SimpleClassifiedDTO> mapToSimpleClassifiedDTO(List<ClassifiedEntity> entity) {
        return entity.stream().map(this::mapToSimpleClassifiedDTO).collect(Collectors.toList());
    }

    private SimpleClassifiedDTO mapToSimpleClassifiedDTO(ClassifiedEntity entity) {
        return new SimpleClassifiedDTO.SimpleClassifiedDTOBuilder().setId(entity.getId())
                .setGeolocation(entity.getGeolocation())
                .setType(entity.getType().getId())
                .setAddress(entity.getAddress())
                .setCost(entity.getCost())
                .build();
    }

    private FullClassifiedDTO mapToFullClassifiedDTO(ClassifiedEntity entity) {
        return FullClassifiedDTO.builder()
                .title(entity.getTitle())
                .description(entity.getDescription())
                .cost(entity.getCost())
                .persons(entity.getPersons())
                .area(entity.getArea())
                .city(entity.getAddress().getCity())
                .district(entity.getAddress().getDistrict())
                .street(entity.getAddress().getStreet())
                .buildingNum(entity.getAddress().getBuildingNum())
                .flatNum(entity.getAddress().getFlatNum())
                .lat(entity.getGeolocation().getLat())
                .lng(entity.getGeolocation().getLat())
                .type(entity.getType().getId())
                .userId(entity.getUserId())
                .build();
    }


}
