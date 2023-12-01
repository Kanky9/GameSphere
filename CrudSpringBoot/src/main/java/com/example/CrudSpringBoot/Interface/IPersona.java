package com.example.CrudSpringBoot.Interface;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.CrudSpringBoot.Models.Persona;

@Repository
public interface IPersona extends CrudRepository<Persona, Integer>{
    
}
