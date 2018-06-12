package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.control.repositories.FacebookUserRepository;
import com.classifiedmapbackend.control.repositories.UserRepository;
import com.classifiedmapbackend.entity.domain.DomainUser;
import com.classifiedmapbackend.entity.jpa.FacebookAccountEntity;
import com.classifiedmapbackend.entity.jpa.UserAccountEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public final class SimpleAuthenticationService implements UserAuthenticationService {

  @Autowired
  UserRepository userRepository;

  @Autowired
  FacebookUserRepository facebookUserRepository;

  @Override
  public Optional<String> login(final String username, final Optional<String> password) {

    if(password.isPresent())
    {
      UserAccountEntity userAccountEntity = userRepository.getUserAccountEntitieByUserName(username);
      if(userAccountEntity == null ||
              !userAccountEntity.getPassword().equals(password.get()))
        return Optional.empty();

      return Optional.ofNullable(userAccountEntity.getId());
    }

    FacebookAccountEntity facebookAccountEntity = facebookUserRepository.getUserAccountEntityByFacebookID(username);
    if(facebookAccountEntity == null)
      return Optional.empty();

    return Optional.ofNullable(facebookAccountEntity.getId());
  }

  @Override
  public Optional<DomainUser> findByToken(final String token) {
    return mapToDomainUser(userRepository.findById(token), facebookUserRepository.findById(token));
  }

  private Optional<DomainUser> mapToDomainUser(Optional<UserAccountEntity> userEntity, Optional<FacebookAccountEntity> fbEntity )
  {
    if(userEntity.isPresent())
    {
      return Optional.of(DomainUser.builder()
              .id(userEntity.get().getId())
              .username(userEntity.get().getUserName())
              .password(userEntity.get().getPassword()).build());
    }
    else if(fbEntity.isPresent())
    {
      return Optional.of(DomainUser.builder()
              .id(fbEntity.get().getId())
              .username( fbEntity.get().getFacebookID())
              .password(null).build());
    }

   return Optional.empty();
  }
}