package com.classifiedmapbackend.control;

import com.classifiedmapbackend.entity.domain.DomainUser;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
final class NoopRegistrationService implements UserRegistrationService {
  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public DomainUser register(final String username, final Optional<String> password) {
    final String token = UUID.randomUUID().toString();
    return DomainUser
      .builder()
      .id(token)
      .username(username)
      .password(password.orElse("12345")) // Unsecure
      .build();
  }
}
