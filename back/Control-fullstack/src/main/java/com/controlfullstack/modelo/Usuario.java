package com.controlfullstack.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int IdUsuario;
    @Column (length = 100, nullable = false)
    private String nombre;
    @Column (length = 100, nullable = false)
    private String correo;
}
