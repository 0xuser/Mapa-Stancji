package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.FacebookAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface FacebookUserRepository extends JpaRepository<FacebookAccountEntity, String> {

    FacebookAccountEntity getUserAccountEntitieByFacebookID(@Param("facebookId") String facebookId);

    Boolean existsUserAccountEntityByEmail(@Param("email") String email);

    Boolean existsUserAccountEntityByFacebookID(@Param("facebookId") String facebookId);
}
