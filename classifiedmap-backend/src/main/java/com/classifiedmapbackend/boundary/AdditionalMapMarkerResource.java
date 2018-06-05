package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.boundary.delegate.MarkerDelegate;
import com.classifiedmapbackend.control.repositories.AdditionalMapMarkerRepository;
import com.classifiedmapbackend.entity.dto.AdditionalMapMarkerDTO;
import com.classifiedmapbackend.entity.jpa.AdditionalMapMarkerEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(path = "/marker")
public class AdditionalMapMarkerResource {

   @Inject
    MarkerDelegate markerDelegate;

    @GetMapping("/all")
    ResponseEntity getAllMarkers()
    {
        return ResponseEntity.status(HttpStatus.OK).body(markerDelegate.queryAllMarkers());
    }

}
