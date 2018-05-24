package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.entity.domain.DomainUser;

import java.util.Optional;

public interface UserAuthenticationService {

  /**
   * Logs in with the given {@code username} and {@code password}.
   *
   * @param username
   * @param password
   * @return an {@link Optional} of a user when login succeeds
   */
  Optional<String> login(String username, Optional<String> password);

  Optional<DomainUser> findByToken(String s);
}