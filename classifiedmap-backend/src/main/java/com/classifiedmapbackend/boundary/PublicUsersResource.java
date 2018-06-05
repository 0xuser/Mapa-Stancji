package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.boundary.delegate.UserDelegate;
import com.classifiedmapbackend.control.auth.UserAuthenticationService;
import com.classifiedmapbackend.control.auth.UserRegistrationService;
import com.classifiedmapbackend.control.repositories.AddressRepository;
import com.classifiedmapbackend.control.repositories.FacebookUserMarkerRepository;
import com.classifiedmapbackend.control.repositories.FacebookUserRepository;
import com.classifiedmapbackend.control.repositories.GeolocationRepository;
import com.classifiedmapbackend.entity.dto.AddAddressDTO;
import com.classifiedmapbackend.entity.dto.FacebookUserDTO;
import com.classifiedmapbackend.entity.dto.LoggingDTO;
import com.classifiedmapbackend.entity.dto.UserDTO;
import com.classifiedmapbackend.entity.jpa.*;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.constraints.NotNull;
import java.util.Optional;
import java.util.UUID;

import static lombok.AccessLevel.PRIVATE;
import static lombok.AccessLevel.PUBLIC;

@RestController
@CrossOrigin
@RequestMapping("/public/users")
@FieldDefaults(level = PRIVATE, makeFinal = true)
@AllArgsConstructor(access = PUBLIC)
public final class PublicUsersResource {
  @NonNull
  UserAuthenticationService authentication;

  @NotNull
  UserRegistrationService registrationService;

  @Inject
  UserDelegate userDelegate;

  @PostMapping("/login")
  public ResponseEntity login(@RequestBody LoggingDTO loggingData) {
    Optional<String> token = authentication.login(loggingData.getUsername(), loggingData.getPassword());
    return token.<ResponseEntity>map(s -> ResponseEntity.status(HttpStatus.OK).body(s)).orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
  }

  @PostMapping("/register")
    public ResponseEntity registerUser(@RequestBody UserDTO userDTO) {
      if(registrationService.existsByUsername(userDTO.getUserName()))
        return ResponseEntity.status(HttpStatus.CONFLICT).body("username");

      if(registrationService.existsByEmail(userDTO.getEmail()))
        return ResponseEntity.status(HttpStatus.CONFLICT).body("email");

      UserAccountEntity newUser = userDelegate.mapToUserAccountEntity(userDTO);
      registrationService.register(newUser);

      return ResponseEntity.status(HttpStatus.OK).body(newUser.getId());
  }

  @PostMapping("/fbregister")
  public ResponseEntity registerFacebookUser(@RequestBody FacebookUserDTO userDTO) {
    if(registrationService.existsByUsername(userDTO.getFacebookId())) {
      Optional<String> token = authentication.login(userDTO.getFacebookId(), Optional.empty());
      return token.<ResponseEntity>map(s -> ResponseEntity.status(HttpStatus.OK).body(s)).orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    FacebookAccountEntity newUser = userDelegate.mapToFacebookAccountEntity(userDTO);
    registrationService.register(newUser);

    return ResponseEntity.status(HttpStatus.OK).body(newUser.getId());
  }

  @PostMapping("/edit")
  public ResponseEntity addFacebookUserAddress(@RequestBody AddAddressDTO addressDTO, @RequestParam String id){
    String token = userDelegate.addUserFacebookAddress(addressDTO,id);
    return ResponseEntity.status(HttpStatus.OK).body(token);
  }

}