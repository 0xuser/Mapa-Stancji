package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.data.repository.CrudRepository;

public interface ClassifiedRepository extends CrudRepository<ClassifiedEntity, String> {
}
