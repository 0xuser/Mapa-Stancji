package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.repositories.UserRepository;
import com.classifiedmapbackend.entity.jpa.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserEndpoint {

    @Autowired
    UserRepository userRepository;

    @GetMapping(path = "/all")
    List<UserEntity> getAllUsers()
    {
        return ( List<UserEntity> ) userRepository.findAll();
    }

}
