package com.classifiedmapbackend.control.repositories;

import com.classifiedmapbackend.entity.jpa.BaseAccount;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<BaseAccount, String> {

}
