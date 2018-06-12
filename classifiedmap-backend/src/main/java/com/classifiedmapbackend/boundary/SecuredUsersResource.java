package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.auth.UserAuthenticationService;
import com.classifiedmapbackend.entity.domain.DomainUser;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static lombok.AccessLevel.PACKAGE;
import static lombok.AccessLevel.PRIVATE;

@RestController
@CrossOrigin
@RequestMapping("/users")
@FieldDefaults(level = PRIVATE, makeFinal = true)
@AllArgsConstructor(access = PACKAGE)
public final class SecuredUsersResource {
  @NonNull
  UserAuthenticationService authentication;

  @GetMapping("/current")
  public DomainUser getCurrent(@AuthenticationPrincipal final DomainUser user) {
    return user;
  }

  @GetMapping("/logout")
  public boolean logout(@AuthenticationPrincipal final DomainUser user) {
    //authentication.logout(user);
    return true;
  }
}