import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  correo: string = '';
  contrasena: string = '';
  usuarios: Usuario[] = [];
  inicioSesionFallido: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => (this.usuarios = usuarios)
    );
  }

  iniciarSesion() {
    console.log('Credenciales recibidas: ', this.correo, this.contrasena);

    const usuarioEncontrado = this.usuarios.find(
      (usuario) =>
        usuario.correo === this.correo && usuario.password === this.contrasena
    );

    if (usuarioEncontrado) {
      console.log('Inicio de sesión exitoso para el usuario: ', usuarioEncontrado);
      this.inicioSesionFallido = false;
      localStorage.setItem('sesion', JSON.stringify(usuarioEncontrado));
      this.router.navigate(['/evento']);
      setTimeout(() => {
        location.reload();
      }, 0);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales incorrectas o no existe el usuario!',
      });
      console.log('Inicio de sesión fallido. Verifica el correo y la contraseña.');
      this.inicioSesionFallido = true;
    }
  }
}
