package com.classifiedmapbackend.entity.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Geolocation")
public class GeolocationEntity {

    @Id
    private String id;

    @Column(name = "Latitude")
    private double lat;

    @Column(name = "Longitude")
    private double lng;

    public GeolocationEntity() {
    }

    public GeolocationEntity(String id, double lat, double lng) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }
}
