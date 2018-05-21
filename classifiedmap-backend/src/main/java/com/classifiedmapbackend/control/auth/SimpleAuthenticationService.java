package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.entity.domain.DomainUser;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public final class SimpleAuthenticationService implements UserAuthenticationService {
  Map<String, DomainUser> users = new HashMap<>();

  @Override
  public Optional<String> login(final String username, final String password) {
    final String token = UUID.randomUUID().toString();
    final DomainUser user = DomainUser
      .builder()
      .id(token)
      .username(username)
      .password(password)
      .build();

    users.put(token, user);
    return Optional.of(token);
  }

  @Override
  public Optional<DomainUser> findByToken(final String token) {
    return Optional.ofNullable(users.get(token));
  }

  @Override
  public void logout(final DomainUser user) {
    users.remove(user.getId());
  }
}