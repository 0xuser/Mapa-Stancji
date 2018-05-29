package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.entity.domain.DomainUser;
import com.classifiedmapbackend.entity.dto.UserDTO;
import com.classifiedmapbackend.entity.jpa.FacebookAccountEntity;
import com.classifiedmapbackend.entity.jpa.UserAccountEntity;

import java.util.Optional;

public interface UserRegistrationService {

    /**
     * @return true if registration is enabled
     */
    boolean isEnabled();

    boolean existsByUsername(String username);

    void register(UserAccountEntity userEntity);

    void register(FacebookAccountEntity userEntity);

    boolean existsByEmail(String email);
}