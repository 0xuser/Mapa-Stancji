package com.classifiedmapbackend.entity.dto;

import lombok.Builder;

@Builder
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
    private String userId;

    public FullClassifiedDTO() {
    }

    public FullClassifiedDTO(String title, String description, double cost, int persons, double area, String city, String district, String street, String buildingNum, String flatNum, double lat, double lng, String type, String userId) {
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.persons = persons;
        this.area = area;
        this.city = city;
        this.district = district;
        this.street = street;
        this.buildingNum = buildingNum;
        this.flatNum = flatNum;
        this.lat = lat;
        this.lng = lng;
        this.type = type;
        this.userId = userId;
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

    public String getUserId() { return userId; }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
