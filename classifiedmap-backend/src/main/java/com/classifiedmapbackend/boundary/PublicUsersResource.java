package com.classifiedmapbackend.boundary;

import com.classifiedmapbackend.control.UserAuthenticationService;
import com.classifiedmapbackend.control.UserRegistrationService;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import static com.google.common.base.Strings.emptyToNull;
import static java.util.Optional.ofNullable;
import static lombok.AccessLevel.PACKAGE;
import static lombok.AccessLevel.PRIVATE;
import static lombok.AccessLevel.PUBLIC;

@RestController
@RequestMapping("/public/users")
@FieldDefaults(level = PRIVATE, makeFinal = true)
@AllArgsConstructor(access = PUBLIC)
public final class PublicUsersResource {
  @NonNull
  UserAuthenticationService authentication;
  @NonNull
  UserRegistrationService registration;

  @PostMapping("/register")
  public String register(
    final HttpServletRequest request,
    @RequestParam("username") final String username,
    @RequestParam(value = "password", required = false) final String password) {
    registration.register(username, ofNullable(emptyToNull(password)));
    return authentication.login(username, password).orElseThrow(RuntimeException::new);
  }

  @GetMapping
  public String kurwa()
  {
    return "czego to kurwa nie działa\n";
  }

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