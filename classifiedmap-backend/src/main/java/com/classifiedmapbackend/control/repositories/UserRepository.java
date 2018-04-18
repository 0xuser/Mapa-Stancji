package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, String> {

}
