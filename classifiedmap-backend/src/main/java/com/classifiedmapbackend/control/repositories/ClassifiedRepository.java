package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.ClassifiedEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface
ClassifiedRepository extends CrudRepository<ClassifiedEntity, String> {

    @Query(value ="SELECT * " +
            "FROM Classified c " +
            "WHERE c.IdType = :type " +
            "AND c.cost >= :minCost " +
            "AND c.cost <= :maxCost " +
            "AND c.persons = :persons ", nativeQuery = true)
    List<ClassifiedEntity> searchRoom(@Param("type") String type, @Param("minCost") double minCost, @Param("maxCost") double maxCost, @Param("persons") int persons);

    @Query(value ="SELECT * " +
            "FROM Classified c " +
            "WHERE c.IdType = :type " +
            "AND c.cost >= :minCost " +
            "AND c.cost <= :maxCost " +
            "AND c.Area >= :minArea " +
            "AND  c.Area <= :maxArea", nativeQuery = true)
    List<ClassifiedEntity> searchFlat(@Param("type") String type, @Param("minCost") double minCost, @Param("maxCost") double maxCost, @Param("minArea") double minArea, @Param("maxArea") double maxArea);


    @Query(value ="SELECT * " +
            "FROM Classified c " +
            "WHERE c.cost >= :minCost " +
            "AND c.cost <= :maxCost " +
            "AND c.Area >= :minArea " +
            "AND  c.Area <= :maxArea ", nativeQuery = true)
    List<ClassifiedEntity> globalSearch(@Param("minCost") double minCost, @Param("maxCost") double maxCost, @Param("minArea") double minArea, @Param("maxArea") double maxArea);
}
