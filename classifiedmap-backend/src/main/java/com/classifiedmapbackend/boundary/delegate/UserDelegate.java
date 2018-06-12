package com.classifiedmapbackend.boundary.delegate;

import com.classifiedmapbackend.control.repositories.AddressRepository;
import com.classifiedmapbackend.control.repositories.FacebookUserMarkerRepository;
import com.classifiedmapbackend.control.repositories.FacebookUserRepository;
import com.classifiedmapbackend.control.repositories.GeolocationRepository;
import com.classifiedmapbackend.entity.dto.AddAddressDTO;
import com.classifiedmapbackend.entity.dto.FacebookUserDTO;
import com.classifiedmapbackend.entity.dto.UserDTO;
import com.classifiedmapbackend.entity.jpa.*;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.UUID;

@Service
public class UserDelegate {
    @Inject
    private AddressRepository addressRepository;

    @Inject
    private GeolocationRepository geolocationRepository;

    @Inject
    private FacebookUserRepository facebookUserRepository;

    @Inject
    private FacebookUserMarkerRepository facebookUserMarkerRepository;

    public String addUserFacebookAddress(AddAddressDTO addressDTO, String id)
    {
        AddressEntity newAddress = mapToAddressEntity(addressDTO);
        addressRepository.save(newAddress);

        GeolocationEntity newGeolocation = mapToGeolocationEntity(addressDTO);
        geolocationRepository.save(newGeolocation);

        FacebookUserMarkerEntity newFacebookMarker = FacebookUserMarkerEntity.builder()
                .id(UUID.randomUUID().toString())
                .geolocation(newGeolocation).build();

        facebookUserMarkerRepository.save(newFacebookMarker);

        FacebookAccountEntity user = facebookUserRepository.findUserById(id);
        user.setId_address(newAddress.getId());
        user.setId_user_marker(newFacebookMarker.getId());
        facebookUserRepository.save(user);

        return user.getId();
    }

    public FacebookAccountEntity mapToFacebookAccountEntity(FacebookUserDTO userDTO) {
        return FacebookAccountEntity.builder()
                .id(UUID.randomUUID().toString())
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .phoneNumber(userDTO.getPhoneNumber())
                .email(userDTO.getPhoneNumber())
                .facebookID(userDTO.getFacebookId())
                .build();
    }

    public UserAccountEntity mapToUserAccountEntity(UserDTO userDTO) {
        return UserAccountEntity.builder()
                .id(UUID.randomUUID().toString())
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .phoneNumber(userDTO.getPhoneNumber())
                .email(userDTO.getPhoneNumber())
                .userName(userDTO.getUserName())
                .password(userDTO.getPassword())
                .build();
    }

    private AddressEntity mapToAddressEntity(AddAddressDTO addressDTO){
        return AddressEntity.builder()
                .id(UUID.randomUUID().toString())
                .city(addressDTO.getCity())
                .district(addressDTO.getDistrict())
                .street(addressDTO.getStreet())
                .buildingNum(addressDTO.getBuildingNum())
                .flatNum(addressDTO.getFlatNum()).build();

    }

    private GeolocationEntity mapToGeolocationEntity(AddAddressDTO addressDTO){
        return GeolocationEntity.builder()
                .id(UUID.randomUUID().toString())
                .lng(addressDTO.getLng())
                .lat(addressDTO.getLat()).build();
    }
}
