package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.TypeEntity;
import org.springframework.data.repository.CrudRepository;

public interface TypeRepository extends CrudRepository<TypeEntity, String> {
}
