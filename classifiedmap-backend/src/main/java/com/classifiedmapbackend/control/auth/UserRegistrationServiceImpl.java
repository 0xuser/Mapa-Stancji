package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.control.repositories.FacebookUserRepository;
import com.classifiedmapbackend.control.repositories.UserRepository;
import com.classifiedmapbackend.entity.domain.DomainUser;
import com.classifiedmapbackend.entity.dto.UserDTO;
import com.classifiedmapbackend.entity.jpa.FacebookAccountEntity;
import com.classifiedmapbackend.entity.jpa.UserAccountEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.xml.ws.ServiceMode;
import java.util.Optional;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    FacebookUserRepository facebookUserRepository;

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsUserAccountEntityByUserName(username)
                || facebookUserRepository.existsUserAccountEntityByFacebookID(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsUserAccountEntityByEmail(email)
                || facebookUserRepository.existsUserAccountEntityByEmail(email);
    }

    @Override
    public void register(UserAccountEntity userEntity) {
        userRepository.save(userEntity);
    }

    @Override
    public void register(FacebookAccountEntity userEntity) {
        facebookUserRepository.save(userEntity);
    }

}
