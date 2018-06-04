package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.AddressEntity;
import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.data.repository.CrudRepository;
import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AddressRepository extends CrudRepository<AddressEntity, String> {

}