package com.controlfullstack.servicio;

import com.controlfullstack.modelo.Usuario;
import com.controlfullstack.repositorio.IGenericoRepositorio;
import com.controlfullstack.repositorio.IUsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServicio extends CRUDImpl<Usuario, Integer> implements IUsuarioServicio{
    @Autowired
    private IUsuarioRepositorio usuarioRepositorio;
    @Override
    protected IGenericoRepositorio<Usuario, Integer> getRepo(){
        return usuarioRepositorio;
    }
}
