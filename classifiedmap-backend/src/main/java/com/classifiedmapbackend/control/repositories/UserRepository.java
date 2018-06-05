package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.UserAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<UserAccountEntity, String> {
    UserAccountEntity getUserAccountEntitieByUserName(@Param("username") String username);

    Boolean existsUserAccountEntityByEmail(@Param("email") String email);

    Boolean existsUserAccountEntityByUserName(@Param("username") String username);


}
