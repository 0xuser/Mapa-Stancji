package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.auth.UserAuthenticationService;
import com.classifiedmapbackend.control.auth.UserRegistrationService;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import static com.google.common.base.Strings.emptyToNull;
import static java.util.Optional.ofNullable;
import static lombok.AccessLevel.PRIVATE;
import static lombok.AccessLevel.PUBLIC;

@RestController
@RequestMapping("/public/users")
@FieldDefaults(level = PRIVATE, makeFinal = true)
@AllArgsConstructor(access = PUBLIC)
public final class PublicUsersResource {
  @NonNull
  UserAuthenticationService authentication;

  @PostMapping("/login")
  public String login(
    final HttpServletRequest request,
    @RequestParam("username") final String username,
    @RequestParam("password") final String password) {
    return authentication
      .login(username, password)
      .orElseThrow(() -> new RuntimeException("invalid login and/or password"));
  }
}