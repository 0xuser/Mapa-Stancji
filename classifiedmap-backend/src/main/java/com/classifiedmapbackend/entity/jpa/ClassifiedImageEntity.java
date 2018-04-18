package com.classifiedmapbackend.entity.jpa;

import javax.persistence.*;

@Entity
@Table(name = "ClassifiedImage")
public class ClassifiedImageEntity {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "IdClassified", referencedColumnName = "id")
    private ClassifiedEntity classified;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdImage", referencedColumnName = "id")
    private ImageEntity image;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ClassifiedEntity getClassified() {
        return classified;
    }

    public void setClassified(ClassifiedEntity classified) {
        this.classified = classified;
    }

    public ImageEntity getImage() {
        return image;
    }

    public void setImage(ImageEntity image) {
        this.image = image;
    }
}
