package com.classifiedmapbackend.entity.dto;

import javax.swing.text.html.Option;
import java.util.Optional;

public class LoggingDTO {
    private String username;
    private Optional<String> password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Optional<String> getPassword() {
        return password;
    }

    public void setPassword(Optional<String> password) {
        this.password = password;
    }
}
