package com.classifiedmapbackend.control;

import com.classifiedmapbackend.entity.domain.DomainUser;

import java.util.Optional;

public interface UserRegistrationService {

  /**
   * @return true if registration is enabled
   */
  boolean isEnabled();

  /**
   * In the case the username already exists, it returns
   * the already registered user.
   *
   * @throws IllegalArgumentException if username is empty or already exists
   * @throws IllegalStateException if username is a disposable mail
   */
  DomainUser register(String username, Optional<String> password);
}