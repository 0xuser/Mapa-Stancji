package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.FacebookUserMarkerEntity;
import org.springframework.data.repository.CrudRepository;

public interface FacebookUserMarkerRepository extends CrudRepository<FacebookUserMarkerEntity, String> {
}
