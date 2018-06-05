package com.classifiedmapbackend.boundary.delegate;

import com.classifiedmapbackend.control.repositories.AdditionalMapMarkerRepository;
import com.classifiedmapbackend.entity.dto.AdditionalMapMarkerDTO;
import com.classifiedmapbackend.entity.jpa.AdditionalMapMarkerEntity;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MarkerDelegate {

    @Inject
    private AdditionalMapMarkerRepository repository;

    public List<AdditionalMapMarkerDTO> queryAllMarkers() {
        return repository.findAll().stream().map(this::mapToAdditionalMapMarkerDTO).collect(Collectors.toList());
    }

    private AdditionalMapMarkerDTO mapToAdditionalMapMarkerDTO(AdditionalMapMarkerEntity entity) {
        return AdditionalMapMarkerDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .iconLocalization(entity.getIconLocalization())
                .lat(entity.getGeolocation().getLat())
                .lng(entity.getGeolocation().getLng())
                .build();
    }

}
