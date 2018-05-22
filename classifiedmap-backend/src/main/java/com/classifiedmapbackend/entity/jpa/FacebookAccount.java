package com.classifiedmapbackend.entity.jpa;

import javax.persistence.*;

@Entity
@Table(name = "facebook_account")
@PrimaryKeyJoinColumn(name = "userID")
public class FacebookAccount extends BaseAccount {
    private String facebookID;

    public FacebookAccount() {
    }

    public FacebookAccount(String id, String firstName, String lastName, String phoneNumber, String email, String facebookID) {
        super(id, firstName, lastName, phoneNumber, email);
        this.facebookID = facebookID;
    }

    public String getFacebookID() {
        return facebookID;
    }

    public void setFacebookID(String facebookID) {
        this.facebookID = facebookID;
    }
}
