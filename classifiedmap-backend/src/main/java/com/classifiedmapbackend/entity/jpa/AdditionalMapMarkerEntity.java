package com.classifiedmapbackend.entity.jpa;

import lombok.Builder;

import javax.persistence.*;

@Entity
@Builder
@Table(name = "Marker")
public class AdditionalMapMarkerEntity {

    @Id
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "IdType")
    private int iconLocalization;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdGeolocation", referencedColumnName = "id")
    private GeolocationEntity geolocation;

    public AdditionalMapMarkerEntity() {
    }

    public AdditionalMapMarkerEntity(String id, String name, int iconLocalization, GeolocationEntity geolocation) {
        this.id = id;
        this.name = name;
        this.iconLocalization = iconLocalization;
        this.geolocation = geolocation;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIconLocalization() {
        return iconLocalization;
    }

    public void setIconLocalization(int iconLocalization) {
        this.iconLocalization = iconLocalization;
    }

    public GeolocationEntity getGeolocation() {
        return geolocation;
    }

    public void setGeolocation(GeolocationEntity geolocation) {
        this.geolocation = geolocation;
    }
}
