package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.control.repositories.UserRepository;
import com.classifiedmapbackend.entity.domain.DomainUser;
import com.classifiedmapbackend.entity.jpa.UserAccountEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public final class SimpleAuthenticationService implements UserAuthenticationService {

  @Autowired
  UserRepository userRepository;

  @Override
  public Optional<String> login(final String username, final String password) {

    UserAccountEntity userAccountEntity = userRepository.getUserAccountEntitieByUserName(username);
    if(userAccountEntity == null ||
            !userAccountEntity.getPassword().equals(password))
      return Optional.empty();

     return Optional.ofNullable(userAccountEntity.getId());
  }

  @Override
  public Optional<DomainUser> findByToken(final String token) {
    return Optional.empty();
  }

  @Override
  public void logout(final DomainUser user){
  }
}