package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserEntity, String> {
}
