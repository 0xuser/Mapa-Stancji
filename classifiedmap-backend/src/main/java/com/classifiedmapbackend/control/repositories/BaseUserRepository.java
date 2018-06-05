package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.BaseAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BaseUserRepository extends JpaRepository<BaseAccountEntity, String> {
}
