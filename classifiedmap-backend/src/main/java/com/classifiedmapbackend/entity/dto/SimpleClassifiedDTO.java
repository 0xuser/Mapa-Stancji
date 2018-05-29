package com.classifiedmapbackend.entity.dto;

import com.classifiedmapbackend.entity.jpa.AddressEntity;
import com.classifiedmapbackend.entity.jpa.GeolocationEntity;


public class SimpleClassifiedDTO {

    private String id;
    private double cost;
    private String type;
    private AddressEntity address;
    private GeolocationEntity geolocation;


    public SimpleClassifiedDTO(String id, GeolocationEntity geolocation,  String type, AddressEntity address, double cost) {
        this.id = id;
        this.geolocation = geolocation;
        this.type = type;
        this.address = address;
        this.cost = cost;
    }

    public String getId() {
        return id;
    }

    public GeolocationEntity getGeolocation() {
        return geolocation;
    }

    public String getType() {
        return type;
    }

    public AddressEntity getAddress() {
        return address;
    }

    public double getCost() {
        return cost;
    }

    public static class SimpleClassifiedDTOBuilder
    {
        String id;
        String type;
        private AddressEntity address;
        GeolocationEntity geolocation;
        private double cost;

        public SimpleClassifiedDTOBuilder setId(String id)
        {
            this.id = id;
            return this;
        }


        public SimpleClassifiedDTOBuilder setType(String type)
        {
            this.type = type;
            return this;
        }

        public SimpleClassifiedDTOBuilder setAddress(AddressEntity address) {
            this.address = address;
            return this;
        }

        public SimpleClassifiedDTOBuilder setGeolocation(GeolocationEntity geolocation) {
            this.geolocation = geolocation;
            return this;
        }

        public SimpleClassifiedDTO build()
        {
            return new SimpleClassifiedDTO(id, geolocation, type, address, cost);
        }

        public SimpleClassifiedDTOBuilder setCost(double cost) {
            this.cost = cost;
            return this;
        }
    }
}
