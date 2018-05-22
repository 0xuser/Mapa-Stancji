package com.classifiedmapbackend.entity.jpa;

import javax.persistence.*;

@Entity
@Table(name = "user_account")
@PrimaryKeyJoinColumn(name = "userID")
public class UserAccount extends BaseAccount {
    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    public UserAccount() {
    }

    public UserAccount(String id, String firstName, String lastName, String phoneNumber, String email, String userName, String password) {
        super(id, firstName, lastName, phoneNumber, email);
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
