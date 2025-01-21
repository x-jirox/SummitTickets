import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // Datos quemados
  private usuarios: Usuario[] = [
    {
      id_usuario: '1',
      nombre: 'John Doe',
      correo: 'example2025@gmail.com',
      password: '12345',
      telefono: '1234567890',
    },
    {
      id_usuario: '2',
      nombre: 'Jane Smith',
      correo: 'jane.smith@example.com',
      password: 'password123',
      telefono: '0987654321',
    },
  ];

  constructor() {}

  // Simula guardar un usuario (actualmente solo añade a la lista)
  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    usuario.id_usuario = (this.usuarios.length + 1).toString();
    this.usuarios.push(usuario);
    return of(usuario);
  }

  // Retorna la lista de usuarios quemados
  getUsuarios(): Observable<Usuario[]> {
    return of(this.usuarios);
  }

  // Retorna un usuario por su ID
  getUsuario(id_usuario: string): Observable<Usuario | undefined> {
    const usuario = this.usuarios.find((u) => u.id_usuario === id_usuario);
    return of(usuario);
  }

  // Simula el inicio de sesión buscando un usuario en los datos quemados
  login(correo: string, password: string): Observable<Usuario | null> {
    const usuario = this.usuarios.find(
      (user) => user.correo === correo && user.password === password
    );
    return of(usuario || null);
  }
}
