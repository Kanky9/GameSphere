package com.example.CrudSpringBoot.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.CrudSpringBoot.InterfaceService.IpersonaService;
import com.example.CrudSpringBoot.Models.Persona;
import com.example.CrudSpringBoot.Services.PersonaService;

@Controller
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class PersonaControllador {

    /* El error esta en los return de los metodos */
    /* Asi como estan solo guarda la contraseña de los usuarios */
    /* Los return se tienen que conectar con los metodos del servicio */

    @Autowired
    private IpersonaService service;
    private PersonaService personaService; 

   @GetMapping("/listar")
    public String listar(Model model) {
        List<Persona> personas = service.listar();
        model.addAttribute("personas", personas);
        return listar(model);
    }
    
    @GetMapping("/new")
    public String agregar(Model model) {
        model.addAttribute("persona", new Persona());
        return agregar(model); 
    }
    
    @PostMapping("/save")
    public int save(@Validated @RequestBody Persona p, Model model) {
        service.save(p);
        return personaService.save(p); 
    }

    @GetMapping("/editar/{id}")
    public String editar(@PathVariable int id, Model model) {
        Optional<Persona> persona = service.listarId(id);
        model.addAttribute("persona", persona);
        return "edit";
    }
    
    @GetMapping("/eliminar/{id}")
    public String delete(Model model, @PathVariable int id){
        service.delete(id);
        return "redirect:/listar"; 
    }
}