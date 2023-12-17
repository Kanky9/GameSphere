package com.example.CrudSpringBoot.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CrudSpringBoot.Interface.IPersona;
import com.example.CrudSpringBoot.InterfaceService.IpersonaService;
import com.example.CrudSpringBoot.Models.Persona;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PersonaService implements IpersonaService {

    @Autowired
    private IPersona data; 

    @Override
    public List<Persona> listar() {
        return (List<Persona>)data.findAll();
    }

    @Override
    public Optional<Persona> listarId(int id) {
        return data.findById(id); 
    }

    @Transactional //Para garantizar la atomicidad de estas operaciones
    @Override
    public int save(Persona p) {
    Persona persona = data.save(p);
    return (persona.getId() != 0) ? 1 : 0;
    }

    @Transactional
    @Override
    public void delete(int id) {
        data.deleteById(id);
    }
}