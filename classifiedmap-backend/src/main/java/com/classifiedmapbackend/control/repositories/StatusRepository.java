package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.StatusEntity;
import org.springframework.data.repository.CrudRepository;

public interface StatusRepository extends CrudRepository<StatusEntity, String> {
}
