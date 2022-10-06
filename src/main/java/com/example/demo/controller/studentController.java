package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.studentRepository;
import com.example.demo.model.student;

@CrossOrigin
@RestController
public class studentController {
	@Autowired
	private studentRepository rep;
	
	//add Student
	@PostMapping("/addStudent")
	public void addStudent(@RequestBody student s) {
		rep.insert(s);
	}
	 
	@GetMapping("/all")
	//List of student
	public List<student> students(){
		return rep.findAll();
	}
    
	@GetMapping("getByid/{id}")
	//get student by id{id}
	public student findByIdStudent(@PathVariable  String id) {
		return rep.findById(id).orElse(null);
	}
	
	
	@DeleteMapping("/deleteById/{id}")
	//deleteByid
	public void deleteStudent(@PathVariable String id) {
		rep.deleteById(id);
	}
	
	
	//updateStudent
	@PutMapping("/updateStd/{id}")
	public void updateStudent(@PathVariable String id , @RequestBody student s) {
		s.setId(id);
		rep.insert(s);
	}
}
