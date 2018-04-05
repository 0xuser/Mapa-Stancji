package com.classifiedmapbackend.entity.dto;

import org.springframework.context.annotation.Bean;

import javax.persistence.Entity;


public class SimpleClassifiedDTO {

    private String id;
    private double longitude;
    private double latitude;
    private String type;

    public SimpleClassifiedDTO(String id, double longitude, double lattitude, String type) {
        this.id = id;
        this.longitude = longitude;
        this.latitude = lattitude;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public double getLongitude() {
        return longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public String getType() {
        return type;
    }

    public static class SimpleClassifiedDTOBuilder
    {
        String id;
        double longitude;
        double latitude;
        String type;

        public SimpleClassifiedDTOBuilder setId(String id)
        {
            this.id = id;
            return this;
        }

        public SimpleClassifiedDTOBuilder setLongitude(double longitude)
        {
            this.longitude = longitude;
            return this;
        }

        public SimpleClassifiedDTOBuilder setLatitude(double latitude)
        {
            this.latitude = latitude;
            return this;
        }

        public SimpleClassifiedDTOBuilder setType(String type)
        {
            this.type = type;
            return this;
        }


        public SimpleClassifiedDTO build()
        {
            return new SimpleClassifiedDTO(id, longitude, latitude, type);
        }

    }
}
