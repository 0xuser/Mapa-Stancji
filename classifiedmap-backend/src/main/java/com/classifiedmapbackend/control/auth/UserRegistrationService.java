package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.entity.domain.DomainUser;
import com.classifiedmapbackend.entity.dto.UserDTO;
import com.classifiedmapbackend.entity.jpa.UserAccountEntity;

import java.util.Optional;

public interface UserRegistrationService {

  /**
   * @return true if registration is enabled
   */
  boolean isEnabled();

  boolean existsByUsername(String username);

  void register(UserAccountEntity userEntity);

  boolean existsByEmail(String email);
}