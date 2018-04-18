package com.classifiedmapbackend.entity.jpa;

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
}
