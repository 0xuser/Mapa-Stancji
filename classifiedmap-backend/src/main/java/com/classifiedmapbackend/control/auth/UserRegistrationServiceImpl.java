package com.classifiedmapbackend.control.auth;

import com.classifiedmapbackend.control.repositories.UserRepository;
import com.classifiedmapbackend.entity.domain.DomainUser;
import com.classifiedmapbackend.entity.dto.UserDTO;
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

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsUserAccountEntityByUserName(username);
    }

    @Override
    public boolean existsByEmail(String email)
    {
        return userRepository.existsUserAccountEntityByEmail(email);
    }

    @Override
    public void register(UserAccountEntity userEntity) {
        userRepository.save(userEntity);
    }

}
