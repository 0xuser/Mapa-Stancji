package com.classifiedmapbackend.entity.dto;

import lombok.Builder;

@Builder
public class AdditionalMapMarkerDTO {
    private String id;
    private String name;
    private int iconLocalization;
    private double lat;
    private double lng;

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
