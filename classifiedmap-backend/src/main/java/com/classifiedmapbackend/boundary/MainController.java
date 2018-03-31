package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.repositories.GeolocationRepository;
import com.classifiedmapbackend.control.repositories.UserRepository;
import com.classifiedmapbackend.entity.GeolocationEntity;
import com.classifiedmapbackend.entity.RoleEntity;
import com.classifiedmapbackend.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class MainController {

    @Autowired
    UserRepository userRepository;


    @RequestMapping(path = "/add")
    public @ResponseBody
    String addNewUser () {
        GeolocationEntity geolocationEntity = new GeolocationEntity("eabfc6d2-535d-441b-be3c-a3f9467ccccc", 11.3, 11.4);
        RoleEntity roleEntity = new RoleEntity(UUID.randomUUID().toString(), "Admin", "SuperUser");
        UserEntity userEntity = new UserEntity(UUID.randomUUID().toString(),"Tomek", "haslotomka", geolocationEntity, roleEntity );
        userRepository.save(userEntity);
        return "Saved";
    }

}
