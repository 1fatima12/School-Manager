package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.student;



@Repository
public interface studentRepository extends MongoRepository<student, String> {

}
