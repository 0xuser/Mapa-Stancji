package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.AdditionalMapMarkerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdditionalMapMarkerRepository extends JpaRepository<AdditionalMapMarkerEntity, String> {
}
