package com.classifiedmapbackend.entity.dto;

import com.classifiedmapbackend.entity.jpa.*;

import java.util.Date;
import java.util.UUID;

public class FullClassifiedDTO {

    private String title;
    private String description;
    private double cost;
    private int persons;
    private double area;
    private String city;
    private String district;
    private String street;
    private String buildingNum;
    private String flatNum;
    private double lat;
    private double lng;
    private String type;

    public FullClassifiedDTO() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public int getPersons() {
        return persons;
    }

    public void setPersons(int persons) {
        this.persons = persons;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getBuildingNum() {
        return buildingNum;
    }

    public void setBuildingNum(String buildingNum) {
        this.buildingNum = buildingNum;
    }

    public String getFlatNum() {
        return flatNum;
    }

    public void setFlatNum(String flatNum) {
        this.flatNum = flatNum;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ClassifiedEntity mapToClassifiedEntity(TypeEntity typeEntity)
    {
        GeolocationEntity newGeolocation = GeolocationEntity.builder().id(UUID.randomUUID().toString())
                .lat(lat).lng(lng).build();

        AddressEntity newAddress = AddressEntity.builder().id(UUID.randomUUID().toString()).city(city)
                .district(district).street(street).buildingNum(buildingNum).flatNum(flatNum).build();

        ClassifiedEntity newClassified = ClassifiedEntity.builder().id(UUID.randomUUID().toString()).title(title)
                .description(description).creationDate(new Date()).cost(cost).persons(persons).area(area)
                .address(newAddress).geolocation(newGeolocation)
                .status(new StatusEntity(UUID.randomUUID().toString(), "test", "test"))
                .thumbnail(new ThumbnailEntity(UUID.randomUUID().toString(), "test"))
                .type(typeEntity)
                .build();

        return newClassified;
    }
}
