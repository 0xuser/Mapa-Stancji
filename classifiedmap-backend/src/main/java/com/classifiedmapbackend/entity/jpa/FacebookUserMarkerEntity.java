package com.classifiedmapbackend.entity.jpa;

import lombok.Builder;

import javax.persistence.*;

@Entity
@Builder
@Table(name = "facebook_user_marker")
public class FacebookUserMarkerEntity {

    @Id
    private String id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_geolocation", referencedColumnName = "id")
    private GeolocationEntity geolocation;

    public FacebookUserMarkerEntity(){

    }

    public FacebookUserMarkerEntity(String id, GeolocationEntity geolocation) {
        this.id = id;
        this.geolocation = geolocation;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public GeolocationEntity getGeolocation() {
        return geolocation;
    }

    public void setGeolocation(GeolocationEntity geolocation) {
        this.geolocation = geolocation;
    }
}
