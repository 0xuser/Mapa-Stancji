package com.classifiedmapbackend.entity.jpa;

import com.classifiedmapbackend.entity.dto.SimpleClassifiedDTO;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Classified")
public class ClassifiedEntity {

    @Id
    private String id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Description")
    private String description;

    @Column(name = "Creation_Date")
    private Date creationDate;

    @Column(name = "cost")
    private double cost;

    @Column(name = "Persons")
    private int persons;

    @Column(name = "Area")
    private double area;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdAddress", referencedColumnName = "id")
    private AddressEntity address;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdGeolocation", referencedColumnName = "id")
    private GeolocationEntity geolocation;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdStatus", referencedColumnName = "id")
    private StatusEntity status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdThumbnail", referencedColumnName = "id")
    private ThumbnailEntity thumbnail;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdType", referencedColumnName = "id")
    private TypeEntity type;

    public ClassifiedEntity() {
    }

    public ClassifiedEntity(String id, String title, String description, Date creationDate, AddressEntity address, GeolocationEntity geolocation, StatusEntity status, ThumbnailEntity thumbnail, TypeEntity type) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creationDate = creationDate;
        this.address = address;
        this.geolocation = geolocation;
        this.status = status;
        this.thumbnail = thumbnail;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public AddressEntity getAddress() {
        return address;
    }

    public void setAddress(AddressEntity address) {
        this.address = address;
    }

    public GeolocationEntity getGeolocation() {
        return geolocation;
    }

    public void setGeolocation(GeolocationEntity geolocation) {
        this.geolocation = geolocation;
    }

    public StatusEntity getStatus() {
        return status;
    }

    public void setStatus(StatusEntity status) {
        this.status = status;
    }

    public ThumbnailEntity getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(ThumbnailEntity thumbnail) {
        this.thumbnail = thumbnail;
    }

    public TypeEntity getType() {
        return type;
    }

    public void setType(TypeEntity type) {
        this.type = type;
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

    public SimpleClassifiedDTO mapToSimpleClassifiedDTO()
    {
        return new SimpleClassifiedDTO.SimpleClassifiedDTOBuilder().setId(this.id)
                .setGeolocation(this.geolocation)
                .setType(this.type.getId())
                .setAddress(this.address)
                .setCost(this.cost)
                .build();
    }
}
