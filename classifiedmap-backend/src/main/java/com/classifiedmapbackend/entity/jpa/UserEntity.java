package com.classifiedmapbackend.entity.jpa;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class UserEntity {

    @Id
    private String id;

    @Column(name = "Username")
    private String username;

    @Column(name = "Password")
    private String password;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdGeolocation", referencedColumnName = "id")
    private GeolocationEntity geolocation;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdRole", referencedColumnName = "id")
    private RoleEntity role;

    public UserEntity() {
    }

    public UserEntity(String id, String username, String password, GeolocationEntity geolocation, RoleEntity role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.geolocation = geolocation;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public GeolocationEntity getGeolocation() {
        return geolocation;
    }

    public void setGeolocation(GeolocationEntity geolocation) {
        this.geolocation = geolocation;
    }

    public RoleEntity getRole() {
        return role;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
    }
}
