package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import com.classifiedmapbackend.entity.jpa.FacebookUserMarkerEntity;

public interface FacebookUserMarkerRepository extends CrudRepository<FacebookUserMarkerEntity, String> {
}
