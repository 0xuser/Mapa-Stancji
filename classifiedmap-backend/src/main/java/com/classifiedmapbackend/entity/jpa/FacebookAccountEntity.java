package com.classifiedmapbackend.entity.jpa;

import lombok.Builder;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "facebook_account")
@PrimaryKeyJoinColumn(name = "userID")
public class FacebookAccountEntity extends BaseAccountEntity {
    private String facebookID;

    public FacebookAccountEntity() {
    }

    @Builder
    public FacebookAccountEntity(String id, String firstName, String lastName, String phoneNumber, String email, String facebookID) {
        super(id, firstName, lastName, phoneNumber, email);
        this.facebookID = facebookID;
    }

    @Column(name = "id_address")
    private String id_address;

    @Column(name = "id_user_marker")
    private String id_user_marker;

    public FacebookAccountEntity(String id, String firstName, String lastName, String phoneNumber, String email, String facebookID, String id_address, String id_user_marker) {
        super(id, firstName, lastName, phoneNumber, email);
        this.facebookID = facebookID;
        this.id_address = id_address;
        this.id_user_marker = id_user_marker;
    }


    public void setId_address(String id_address) {
        this.id_address = id_address;
    }

    public void setId_user_marker(String id_user_marker) {
        this.id_user_marker = id_user_marker;
    }

    public String getFacebookID() {
        return facebookID;
    }

    public void setFacebookID(String facebookID) {
        this.facebookID = facebookID;
    }
}
