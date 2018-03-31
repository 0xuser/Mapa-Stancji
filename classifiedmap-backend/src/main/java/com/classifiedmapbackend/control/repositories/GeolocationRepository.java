package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.GeolocationEntity;
import org.springframework.data.repository.CrudRepository;

public interface GeolocationRepository extends CrudRepository<GeolocationEntity, String> {
}
