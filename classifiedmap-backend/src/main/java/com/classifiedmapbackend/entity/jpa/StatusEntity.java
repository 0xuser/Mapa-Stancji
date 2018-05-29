package com.classifiedmapbackend.entity.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Status")
public class StatusEntity {

    @Id
    private String id;

    @Column(name = "Title")
    private String title;

    @Column(name  = "Description")
    private String description;

    public StatusEntity() {
    }

    public StatusEntity(String id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        id = id;
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

}
