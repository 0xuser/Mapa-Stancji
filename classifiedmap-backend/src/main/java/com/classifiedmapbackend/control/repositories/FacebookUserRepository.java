package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.FacebookAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FacebookUserRepository extends JpaRepository<FacebookAccountEntity, String> {

    FacebookAccountEntity getUserAccountEntityByFacebookID(@Param("facebookId") String facebookId);

    Boolean existsUserAccountEntityByEmail(@Param("email") String email);

    Boolean existsUserAccountEntityByFacebookID(@Param("facebookId") String facebookId);

    @Query(value ="SELECT * " +
            "FROM facebook_account f " +
            "WHERE f.id = :uid "
            , nativeQuery = true)
    FacebookAccountEntity findUserById(@Param("uid") String uid);


}
