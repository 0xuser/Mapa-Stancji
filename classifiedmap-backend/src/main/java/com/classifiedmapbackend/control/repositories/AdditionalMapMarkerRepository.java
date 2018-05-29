package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.AdditionalMapMarkerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdditionalMapMarkerRepository extends JpaRepository<AdditionalMapMarkerEntity, String> {
}
